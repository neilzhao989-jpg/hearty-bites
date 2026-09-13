/**
 * GET  /api/reviews          -> { reviews: { [slug]: Review[] } }
 * POST /api/reviews          -> { ok: true, review }   body: {slug,name,rating,text}
 *
 * Backed by Vercel KV over its REST API. Talking to it with plain fetch keeps
 * this function dependency-free, so there is no install step to go wrong.
 *
 * Reviews live in one Redis list per recipe and are appended with LPUSH, so
 * two people posting at the same moment cannot overwrite each other the way a
 * read-modify-write on a single JSON blob would. A set holds the slugs that
 * have reviews, so the index page does not need to know the recipe list.
 */

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

const SLUG_RE = /^[a-z0-9-]{1,64}$/;
const MAX_NAME = 60;
const MAX_TEXT = 1000;
const RATE_LIMIT = 5;              // posts per window, per IP
const RATE_WINDOW_SECONDS = 600;

async function kv(command) {
  const res = await fetch(KV_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command)
  });
  if (!res.ok) throw new Error(`KV ${command[0]} failed: ${res.status}`);
  const data = await res.json();
  return data.result;
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (Array.isArray(fwd) ? fwd[0] : (fwd || '')).split(',')[0].trim() || 'unknown';
}

async function readAll() {
  const slugs = (await kv(['SMEMBERS', 'reviews:index'])) || [];
  const reviews = {};
  for (const slug of slugs) {
    const rows = (await kv(['LRANGE', `reviews:${slug}`, '0', '-1'])) || [];
    const parsed = [];
    for (const row of rows) {
      try { parsed.push(JSON.parse(row)); } catch { /* skip a corrupt row */ }
    }
    if (parsed.length) reviews[slug] = parsed;
  }
  return reviews;
}

export default async function handler(req, res) {
  if (!KV_URL || !KV_TOKEN) {
    return res.status(503).json({ error: 'Review storage is not configured.' });
  }

  try {
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
      return res.status(200).json({ reviews: await readAll() });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const slug = String(body.slug || '').trim();
      const name = String(body.name || '').trim();
      const text = String(body.text || '').trim();
      const rating = Number(body.rating);

      if (!SLUG_RE.test(slug)) return res.status(400).json({ error: 'Unknown recipe.' });
      if (!name || name.length > MAX_NAME) return res.status(400).json({ error: 'Please give a name under 60 characters.' });
      if (!text || text.length > MAX_TEXT) return res.status(400).json({ error: 'Please keep the review under 1000 characters.' });
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating must be between 1 and 5.' });

      // Published on arrival, so throttle by IP to blunt spam.
      const key = `reviews:rate:${clientIp(req)}`;
      const count = await kv(['INCR', key]);
      if (count === 1) await kv(['EXPIRE', key, String(RATE_WINDOW_SECONDS)]);
      if (count > RATE_LIMIT) {
        return res.status(429).json({ error: 'That is a lot of reviews at once. Please try again a little later.' });
      }

      const review = { name, text, rating, date: new Date().toISOString() };
      await kv(['LPUSH', `reviews:${slug}`, JSON.stringify(review)]);
      await kv(['SADD', 'reviews:index', slug]);
      return res.status(201).json({ ok: true, review });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error('reviews api:', err);
    return res.status(500).json({ error: 'Could not reach review storage.' });
  }
}
