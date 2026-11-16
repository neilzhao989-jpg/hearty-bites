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

// Written by prerender.py from the recipes in index.html. Only these can be
// reviewed: without the check, anyone could post under an invented recipe
// name, and every such name was then read back on every page load.
import SLUGS from './_slugs.js';

// Vercel KV supplies KV_REST_API_*; the Marketplace Upstash Redis integration
// supplies UPSTASH_REDIS_REST_*. Accept either so it works whichever you attach.
const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const KNOWN = new Set(SLUGS);
const MAX_NAME = 60;
const MAX_TEXT = 1000;
const MAX_PER_RECIPE = 200;        // newest kept; a list cannot grow without limit
const RATE_LIMIT = 5;              // posts per window, per IP
const RATE_WINDOW_SECONDS = 600;

// Reviews are published the moment they arrive, with nobody reading them
// first. Links are what spam is for, so a review that carries one is refused.
const LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|ru|cn|info|biz|xyz|top|io|co)\b)/i;

async function kvPost(path, body) {
  const res = await fetch(KV_URL + path, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`KV ${path || '/'} failed: ${res.status}`);
  return res.json();
}

async function kv(command) {
  return (await kvPost('', command)).result;
}

/* Several commands in one round trip. Reading every recipe's reviews used to
   be one request each, in sequence. */
async function kvPipeline(commands) {
  if (!commands.length) return [];
  const rows = await kvPost('/pipeline', commands);
  return rows.map(row => {
    if (row && row.error) throw new Error(`KV pipeline: ${row.error}`);
    return row ? row.result : null;
  });
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (Array.isArray(fwd) ? fwd[0] : (fwd || '')).split(',')[0].trim() || 'unknown';
}

async function readAll() {
  const indexed = (await kv(['SMEMBERS', 'reviews:index'])) || [];
  const slugs = indexed.filter(slug => KNOWN.has(slug));
  const lists = await kvPipeline(
    slugs.map(slug => ['LRANGE', `reviews:${slug}`, '0', String(MAX_PER_RECIPE - 1)]));
  const reviews = {};
  slugs.forEach((slug, i) => {
    const parsed = [];
    for (const row of lists[i] || []) {
      try { parsed.push(JSON.parse(row)); } catch { /* skip a corrupt row */ }
    }
    if (parsed.length) reviews[slug] = parsed;
  });
  return reviews;
}

export default async function handler(req, res) {
  if (!KV_URL || !KV_TOKEN) {
    return res.status(503).json({
      error: 'Review storage is not configured.',
      hint: 'Attach a KV / Upstash Redis store in Vercel, then redeploy. Expected KV_REST_API_URL + KV_REST_API_TOKEN, or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN.'
    });
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

      // A field no person can see. Whatever fills it in is not a person; it is
      // told the review went through, so it has no reason to try another way.
      if (String(body.website || '').trim()) {
        return res.status(201).json({ ok: true, review: { name, text, rating, date: new Date().toISOString() } });
      }

      if (!KNOWN.has(slug)) return res.status(400).json({ error: 'Unknown recipe.' });
      if (!name || name.length > MAX_NAME) return res.status(400).json({ error: 'Please give a name under 60 characters.' });
      if (!text || text.length > MAX_TEXT) return res.status(400).json({ error: 'Please keep the review under 1000 characters.' });
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
      if (LINK_RE.test(name) || LINK_RE.test(text)) {
        return res.status(400).json({ error: 'Reviews cannot contain links or web addresses.' });
      }

      // Published on arrival, so throttle by IP to blunt spam. Counter and
      // expiry go in one request: set separately, a failure between the two
      // left a counter that never expired and locked that address out for good.
      const key = `reviews:rate:${clientIp(req)}`;
      const [, count] = await kvPipeline([
        ['SET', key, '0', 'EX', String(RATE_WINDOW_SECONDS), 'NX'],
        ['INCR', key]
      ]);
      if (count > RATE_LIMIT) {
        return res.status(429).json({ error: 'That is a lot of reviews at once. Please try again a little later.' });
      }

      const review = { name, text, rating, date: new Date().toISOString() };
      await kvPipeline([
        ['LPUSH', `reviews:${slug}`, JSON.stringify(review)],
        ['LTRIM', `reviews:${slug}`, '0', String(MAX_PER_RECIPE - 1)],
        ['SADD', 'reviews:index', slug]
      ]);
      return res.status(201).json({ ok: true, review });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error('reviews api:', err);
    return res.status(500).json({ error: 'Could not reach review storage.' });
  }
}
