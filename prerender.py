#!/usr/bin/env python3
"""
Bakes a real HTML file for every route.

The site is one index.html that fills <main> from JavaScript. That works for
people, but Googlebot crawls first and runs the JavaScript later, from a queue
that can lag by days. On that first pass every URL looked identical: the same
title, the same empty <main>, no canonical. Pages that look like duplicates of
the homepage tend to sit in "Discovered - currently not indexed" forever.

So we write out a file per route with the right <head> and the recipe already
in the body. The app still boots and re-renders over it, so nothing changes for
a visitor; the crawler just gets the content on the first fetch instead of the
third.

Run it after editing recipes:

    python3 prerender.py

It reads the recipe data straight out of index.html, so index.html stays the
one place recipes are defined.
"""

import datetime
import html
import io
import json
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://amazingrecipes.org'
SOURCE = os.path.join(ROOT, 'index.html')


# --- reading the data out of index.html -----------------------------------
#
# The recipes are a plain JavaScript array literal. Rather than regex at it,
# parse it properly: it is JSON apart from unquoted keys, single-quoted
# strings and trailing commas.

class JSLiteral:
    def __init__(self, text, pos=0):
        self.s = text
        self.i = pos

    def error(self, msg):
        line = self.s.count('\n', 0, self.i) + 1
        raise ValueError('%s at line %d: %r' % (msg, line, self.s[self.i:self.i + 40]))

    def skip(self):
        while self.i < len(self.s):
            c = self.s[self.i]
            if c in ' \t\r\n':
                self.i += 1
            elif self.s.startswith('//', self.i):
                nl = self.s.find('\n', self.i)
                self.i = len(self.s) if nl == -1 else nl
            elif self.s.startswith('/*', self.i):
                end = self.s.find('*/', self.i)
                self.i = len(self.s) if end == -1 else end + 2
            else:
                return

    def value(self):
        self.skip()
        if self.i >= len(self.s):
            self.error('unexpected end of input')
        c = self.s[self.i]
        if c == '{':
            return self.obj()
        if c == '[':
            return self.arr()
        if c in '"\'`':
            return self.string()
        if self.s.startswith('true', self.i):
            self.i += 4
            return True
        if self.s.startswith('false', self.i):
            self.i += 5
            return False
        if self.s.startswith('null', self.i):
            self.i += 4
            return None
        return self.number()

    def obj(self):
        self.i += 1  # {
        out = {}
        while True:
            self.skip()
            if self.s[self.i] == '}':
                self.i += 1
                return out
            if self.s[self.i] in '"\'':
                key = self.string()
            else:
                # Identifier keys, and the bare numbers IDDSI_LEVELS is keyed by.
                m = re.match(r'[A-Za-z_$][A-Za-z0-9_$]*|\d+', self.s[self.i:])
                if not m:
                    self.error('expected a property name')
                key = m.group(0)
                self.i += len(key)
            self.skip()
            if self.s[self.i] != ':':
                self.error('expected ":" after %r' % key)
            self.i += 1
            out[key] = self.value()
            self.skip()
            if self.s[self.i] == ',':
                self.i += 1
            elif self.s[self.i] != '}':
                self.error('expected "," or "}"')

    def arr(self):
        self.i += 1  # [
        out = []
        while True:
            self.skip()
            if self.s[self.i] == ']':
                self.i += 1
                return out
            out.append(self.value())
            self.skip()
            if self.s[self.i] == ',':
                self.i += 1
            elif self.s[self.i] != ']':
                self.error('expected "," or "]"')

    def string(self):
        quote = self.s[self.i]
        self.i += 1
        out = []
        escapes = {'n': '\n', 't': '\t', 'r': '\r', 'b': '\b', 'f': '\f',
                   '\\': '\\', '/': '/', '"': '"', "'": "'", '`': '`', '\n': ''}
        while True:
            if self.i >= len(self.s):
                self.error('unterminated string')
            c = self.s[self.i]
            if c == '\\':
                nxt = self.s[self.i + 1]
                if nxt == 'u':
                    out.append(chr(int(self.s[self.i + 2:self.i + 6], 16)))
                    self.i += 6
                    continue
                out.append(escapes.get(nxt, nxt))
                self.i += 2
                continue
            if c == quote:
                self.i += 1
                return ''.join(out)
            out.append(c)
            self.i += 1

    def number(self):
        m = re.match(r'-?\d+(\.\d+)?([eE][-+]?\d+)?', self.s[self.i:])
        if not m:
            self.error('expected a value')
        self.i += len(m.group(0))
        text = m.group(0)
        return float(text) if ('.' in text or 'e' in text.lower()) else int(text)


def read_literal(source, declaration):
    """Pull `const <name> = <literal>` out of the page source."""
    at = source.index(declaration)
    parser = JSLiteral(source, at + len(declaration))
    return parser.value()


# --- the same SEO strings the runtime produces ----------------------------

def duration_minutes(text):
    if not text:
        return 0
    hours = re.search(r'(\d+)\s*hour', text, re.I)
    mins = re.search(r'(\d+)\s*min', text, re.I)
    return (int(hours.group(1)) * 60 if hours else 0) + (int(mins.group(1)) if mins else 0)


def minutes_to_iso(total):
    """90 -> "PT1H30M", the format schema.org wants."""
    if not total:
        return None
    hours, mins = divmod(total, 60)
    return 'PT' + ('%dH' % hours if hours else '') + ('%dM' % mins if mins else '')


def iso_duration(text):
    return minutes_to_iso(duration_minutes(text))


def recipe_jsonld(recipe, levels):
    level = levels[str(recipe['dysphagia'])]
    data = {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        'name': recipe['title'],
        'description': recipe['description'],
        'recipeYield': '%s servings' % recipe['servings'],
        'recipeCategory': 'Texture-modified',
        'keywords': ', '.join([recipe['title'], 'dysphagia',
                               'IDDSI Level %s' % recipe['dysphagia'], level['name'],
                               'texture modified diet', 'soft food']),
        'recipeIngredient': [('%s %s' % (i.get('amount', ''), i['item'])).strip()
                             for i in recipe['ingredients']],
        'recipeInstructions': [{'@type': 'HowToStep', 'position': s['step'], 'text': s['text']}
                               for s in recipe['instructions']],
        'author': {'@type': 'Organization', 'name': 'Amazing Recipes', 'url': SITE},
    }
    if recipe.get('image'):
        data['image'] = ['%s%s-1200.jpg' % (SITE, recipe['image'])]
    total = duration_minutes(recipe.get('prepTime')) + duration_minutes(recipe.get('cookTime'))
    for key, value in (('prepTime', iso_duration(recipe.get('prepTime'))),
                       ('cookTime', iso_duration(recipe.get('cookTime'))),
                       ('totalTime', minutes_to_iso(total)),
                       ('datePublished', recipe.get('datePublished')),
                       # Set only on dishes that really belong to one cuisine.
                       ('recipeCuisine', recipe.get('cuisine'))):
        if value:
            data[key] = value
    nutrition = recipe.get('nutrition')
    if nutrition:
        data['nutrition'] = {
            '@type': 'NutritionInformation',
            'calories': nutrition.get('calories'),
            'proteinContent': nutrition.get('protein'),
            'fatContent': nutrition.get('fat'),
            'carbohydrateContent': nutrition.get('carbs'),
            'sodiumContent': nutrition.get('sodium'),
        }
    return data


HOME_TITLE = 'Amazing Recipes — every recipe graded to an IDDSI texture level'
HOME_DESC = ('Soft, fork-tender cooking for anyone who needs food that is easy to chew and '
             'swallow. Every recipe carries the IDDSI texture level it is graded to.')


def seo_for(path, recipes, levels):
    """Mirror of applySeo() in index.html. Keep the two in step."""
    url = SITE + ('/' if path == '/' else path)
    image = '%s/assets/social-card.jpg' % SITE
    title = desc = None
    jsonld = None

    if path.startswith('/recipe/'):
        slug = path[len('/recipe/'):]
        recipe = next((r for r in recipes if r['slug'] == slug), None)
        if recipe:
            level = levels[str(recipe['dysphagia'])]
            # Dish, then plain-language texture, then the clinical grade.
            title = '%s — %s (IDDSI Level %s)' % (
                recipe['title'], level['plain'], recipe['dysphagia'])
            desc = ('%s A dysphagia-friendly recipe for anyone with swallowing difficulty '
                    'or on a soft diet — graded IDDSI Level %s, %s. Serves %s.' % (
                        recipe['description'], recipe['dysphagia'], level['name'],
                        recipe['servings']))
            if recipe.get('image'):
                image = '%s%s-1200.jpg' % (SITE, recipe['image'])
            jsonld = recipe_jsonld(recipe, levels)
    elif path == '/texture-guide':
        title = 'IDDSI Texture Guide — what each level means'
        desc = 'Plain-language explanation of IDDSI Levels 2 to 7, and which recipes match each one.'
    elif path == '/reviews':
        title = 'Reviews — Amazing Recipes'
        desc = 'Notes from people who have cooked these texture-graded recipes.'
    elif path == '/dysphagia':
        title = 'What Is Dysphagia? IDDSI Levels Explained — Amazing Recipes'
        desc = ('A plain-language introduction to dysphagia (difficulty swallowing) and the IDDSI '
                'food and drink levels, with links to the official IDDSI sources.')
    elif path == '/about':
        title = 'About — Amazing Recipes'
        desc = ('Why this site exists: a Grade 10 student in Ontario building recipes '
                'for people living with oral dysphagia.')

    if path == '/404':
        return {'url': None, 'title': 'Page not found — Amazing Recipes',
                'desc': 'There is nothing at this address.', 'image': image,
                'jsonld': None, 'noindex': True}

    if not title:
        title, desc = HOME_TITLE, HOME_DESC

    return {'url': url, 'title': title, 'desc': desc, 'image': image, 'jsonld': jsonld}


def head_block(seo):
    e = html.escape
    lines = [
        '  <!-- SEO:START - written by prerender.py. Do not hand-edit; regenerate. -->',
        '  <meta name="description" content="%s">' % e(seo['desc'], quote=True),
    ]
    if seo.get('noindex'):
        # The error page stands in for any address, so it has no canonical
        # address of its own and must never be indexed.
        lines.append('  <meta name="robots" content="noindex">')
    else:
        lines.append('  <link rel="canonical" href="%s">' % e(seo['url'], quote=True))
        lines.append('  <meta property="og:url" content="%s">' % e(seo['url'], quote=True))
    lines += [
        '  <meta property="og:type" content="%s">' % ('article' if seo['jsonld'] else 'website'),
        '  <meta property="og:site_name" content="Amazing Recipes">',
        '  <meta property="og:title" content="%s">' % e(seo['title'], quote=True),
        '  <meta property="og:description" content="%s">' % e(seo['desc'], quote=True),
        '  <meta property="og:image" content="%s">' % e(seo['image'], quote=True),
        '  <meta name="twitter:card" content="summary_large_image">',
        '  <meta name="twitter:title" content="%s">' % e(seo['title'], quote=True),
        '  <meta name="twitter:description" content="%s">' % e(seo['desc'], quote=True),
        '  <meta name="twitter:image" content="%s">' % e(seo['image'], quote=True),
        '  <title>%s</title>' % e(seo['title']),
    ]
    if seo['jsonld']:
        payload = json.dumps(seo['jsonld'], ensure_ascii=False)
        # </script> inside JSON would close the tag early.
        payload = payload.replace('</', '<\\/')
        lines.append('  <script type="application/ld+json" id="recipe-jsonld">%s</script>' % payload)
    lines.append('  <!-- SEO:END -->')
    return '\n'.join(lines)


# --- the body a crawler sees before the app boots -------------------------
#
# The app replaces all of this the moment it runs, so it only has to carry the
# same information, not the same markup. Real headings and lists, no widgets.

def texture_summary(recipe, level):
    """Mirror of textureSummary() in index.html. Keep the two in step."""
    return ('Suitable for anyone who finds food hard to chew or swallow. '
            'Graded IDDSI Level %s (%s) &mdash; %s &mdash; the texture standard '
            'used in dysphagia care and soft diets.'
            % (recipe['dysphagia'], html.escape(level['name']),
               html.escape(level['plain'].lower())))


DISCLAIMER = ('Texture levels on this site are a starting point, not a clinical assessment. '
              'A speech-language pathologist or dietitian should confirm the right level for '
              'the person you are cooking for.')

IMAGE_VERSION = 1   # replaced in main() with the value index.html declares


def clock(minutes):
    """Mirror of clock() in index.html: 80 -> "1 hr 20 min"."""
    hours, mins = divmod(minutes, 60)
    return ' '.join(p for p in ('%d hr' % hours if hours else '', '%d min' % mins if mins else '') if p)


def hero_picture(recipe):
    """The same <picture> the app draws for the recipe photo, byte for byte in
    the parts that decide which file is fetched. When this was a bare JPEG the
    browser downloaded it, then downloaded the WebP as soon as the app drew
    over the page: every recipe paid for its main photo twice."""
    e = html.escape
    sizes = '(max-width: 860px) calc(100vw - 40px), 520px'
    v = '?v=%d' % IMAGE_VERSION
    srcset = lambda ext: ', '.join('%s-%d.%s%s %dw' % (recipe['image'], n, ext, v, n)
                                   for n in (400, 800, 1200))
    return ('<picture style="background:%s">'
            '<source type="image/webp" srcset="%s" sizes="%s">'
            '<img src="%s-800.jpg%s" srcset="%s" sizes="%s" alt="%s" width="1200" height="900" '
            'loading="eager" decoding="async" fetchpriority="high">'
            '</picture>' % (e(recipe.get('imageBg', '#FBEFE1'), quote=True),
                            e(srcset('webp'), quote=True), e(sizes, quote=True),
                            e(recipe['image'], quote=True), v,
                            e(srcset('jpg'), quote=True), e(sizes, quote=True),
                            e(recipe.get('imageAlt', recipe['title']), quote=True)))


def recipe_body(recipe, levels, mixed):
    e = html.escape
    level = levels[str(recipe['dysphagia'])]
    total = duration_minutes(recipe.get('prepTime')) + duration_minutes(recipe.get('cookTime'))
    out = ['<div class="page" id="recipe-page">']
    out.append('<div class="recipe-header">')
    out.append('<a href="/" class="back-link">Back to All Recipes</a>')
    out.append('<div class="recipe-top"><div class="recipe-title-tile">')
    out.append('<h1>%s</h1>' % e(recipe['title']))
    out.append('<p>%s</p>' % e(recipe['description']))
    out.append('<div class="fact-row">')
    out.append('<div class="fact"><b>Time</b><span>%s</span></div>'
               % e(clock(total) if total else recipe.get('cookTime', '')))
    out.append('<div class="fact"><b>Serves</b><span>%s</span></div>' % recipe['servings'])
    out.append('<div class="fact"><b>Effort</b><span>%s</span></div>' % e(recipe.get('difficulty', '')))
    out.append('</div></div>')

    if recipe.get('image'):
        note = ('<p class="photo-note">The photo is not exactly the version graded here. '
                'Read the serving tips before you cook.</p>' if recipe.get('photoDiffers') else '')
        out.append(
            '<div class="recipe-hero-wrap%s"><div class="recipe-hero-image" style="background:%s">%s</div>%s</div>'
            % (' has-note' if note else '', e(recipe.get('imageBg', '#FBEFE1'), quote=True),
               hero_picture(recipe), note))
    out.append('</div>')

    out.append('<div class="texture-tile" style="background:%s">' % e(level['deep'], quote=True))
    out.append('<b>Texture level</b>')
    out.append('<h2>%s &middot; %s</h2>' % (recipe['dysphagia'], e(level['name'])))
    out.append('<p>%s</p>' % e(level['desc']))
    out.append('<p>%s</p>' % texture_summary(recipe, level))
    out.append('<a href="/texture-guide">See all texture levels</a>')
    out.append('</div>')

    if recipe['slug'] in mixed:
        out.append('<div class="mixed-warning" role="note"><div>'
                   '<strong>Solids and liquid separate in this dish.</strong> '
                   'Left as it is, that is not safe at Levels 4 to 6. The level shown here '
                   'assumes you do the following. %s'
                   '</div></div>' % e(mixed[recipe['slug']]))
    out.append('<p class="safety-note">%s</p>' % e(DISCLAIMER))
    out.append('</div>')

    out.append('<section class="recipe-section"><h2>Ingredients</h2><ul class="ingredients-list">')
    for ing in recipe['ingredients']:
        note = ' <span class="ingredient-note">%s</span>' % e(ing['note']) if ing.get('note') else ''
        out.append('<li class="ingredient-item"><span class="ingredient-amount">%s</span> %s%s</li>'
                   % (e(ing.get('amount', '')), e(ing['item']), note))
    out.append('</ul></section>')

    out.append('<section class="recipe-section"><h2>Instructions</h2><ol class="instructions-list">')
    for step in recipe['instructions']:
        out.append('<li class="instruction-step"><div class="step-content"><p>%s</p></div></li>'
                   % e(step['text']))
    out.append('</ol></section>')

    if recipe.get('servingTips'):
        out.append('<section class="recipe-section"><h2>Serving Tips</h2>'
                   '<div class="tips-box"><h3>Important Guidance</h3><ul>')
        for tip in recipe['servingTips']:
            out.append('<li><span>%s</span></li>' % e(tip))
        out.append('</ul></div></section>')

    nutrition = recipe.get('nutrition')
    if nutrition:
        out.append('<section class="recipe-section"><h2>Nutrition Facts</h2><div class="nutrition-grid">')
        for label, key in (('Calories', 'calories'), ('Protein', 'protein'), ('Fat', 'fat'),
                           ('Carbohydrates', 'carbs'), ('Sodium', 'sodium'),
                           ('Cholesterol', 'cholesterol')):
            if nutrition.get(key):
                out.append('<div class="nutrition-cell"><strong>%s</strong><span>%s</span></div>'
                           % (label, e(nutrition[key])))
        out.append('</div>')
        if nutrition.get('basis'):
            out.append('<p class="nutrition-basis">%s</p>' % e(nutrition['basis']))
        out.append('</section>')

    if recipe.get('dietaryNotes'):
        out.append('<section class="recipe-section"><h2>Dietary Notes</h2><p>%s</p></section>'
                   % e(recipe['dietaryNotes']))

    out.append('</div>')
    return '\n      '.join(out)


def home_body(recipes, levels):
    e = html.escape
    out = ['<div class="page">']
    out.append('<h1>%s</h1>' % e(HOME_TITLE))
    out.append('<p>%s</p>' % e(HOME_DESC))
    for number in sorted({r['dysphagia'] for r in recipes}):
        level = levels[str(number)]
        matching = [r for r in recipes if r['dysphagia'] == number]
        out.append('<section><h2>Level %s &middot; %s</h2><p>%s</p><ul>'
                   % (number, e(level['name']), e(level['desc'])))
        for recipe in sorted(matching, key=lambda r: r['title']):
            out.append('<li><a href="/recipe/%s">%s</a> &mdash; %s</li>'
                       % (e(recipe['slug'], quote=True), e(recipe['title']), e(recipe['description'])))
        out.append('</ul></section>')
    out.append('</div>')
    return '\n      '.join(out)


def texture_guide_body(recipes, levels):
    e = html.escape
    out = ['<div class="page">', '<h1>IDDSI Texture Guide</h1>']
    out.append('<p>The IDDSI framework grades food and drink from Level 0 to Level 7. '
               'These are the levels the recipes on this site are graded at.</p>')
    for number in sorted(levels, key=int):
        level = levels[number]
        count = len([r for r in recipes if str(r['dysphagia']) == number])
        out.append('<section><h2>Level %s &middot; %s</h2><p>%s</p><p>%d recipe%s at this level.</p></section>'
                   % (number, e(level['name']), e(level['desc']), count, '' if count == 1 else 's'))
    out.append('<p>%s</p>' % e(DISCLAIMER))
    out.append('</div>')
    return '\n      '.join(out)


ABOUT_BODY = (
    '<div class="page" id="about-page">\n      '
    '<section class="about-grid">\n      '
    '<div class="about-photo">'
    '<img src="/assets/about-neil-480.jpg" alt="Neil, who built this site." '
    'width="480" height="600"></div>\n      '
    '<div class="about-copy">\n      '
    '<span class="eyebrow">About</span>\n      '
    '<h1>Why I made this</h1>\n      '
    '<p class="about-lede">My name is Neil, and I am a Grade 10 student in Ontario, '
    'Canada &mdash; class of 2029.</p>\n      '
    '<p>There is a noticeable difference at a table when someone cannot eat the same food '
    'as everyone else. They might be given something soft or easy to swallow, finish their '
    'meal quickly, and then sit while everyone else continues eating. It is not that they '
    'are not hungry; they do not have many options for what they can safely eat, and often, '
    'the people around them are not sure what to offer.</p>\n      '
    '<p>My grandma would cook an amazing meal for everyone every time I visited; everyone '
    'ate well, had a great time, and complimented the dishes afterwards. Yet she was the one '
    'who sat down by herself with a simple meal every time after spending hours cooking for '
    'others. She was not able to enjoy the food she spent hours making just because of oral '
    'dysphagia.</p>\n      '
    '<p>I keep thinking about how strange that is. Eating is supposed to be one of the '
    'simple, enjoyable parts of the day, but for a lot of people, it can quietly become '
    'something they have to worry about instead.</p>\n      '
    '<p>That is why I built this. Every recipe includes the texture level it is suitable '
    'for, so you can know what works before you start cooking. But I also wanted the recipes '
    'to be more than just food that meets a requirement. They should be meals that someone '
    'would actually want to eat. Congee that still tastes like congee. A bisque that you '
    'would genuinely look forward to having.</p>\n      '
    '<p class="about-close">If you are living with oral dysphagia, or you are cooking for '
    'someone who is, I hope you find something here that you actually enjoy making and '
    'eating.</p>\n      '
    '</div>\n      </section>\n      </div>')

REVIEWS_BODY = ('<div class="page">\n      <h1>Reviews</h1>\n      '
                '<p>Notes from people who have cooked these texture-graded recipes. '
                'Open any recipe and scroll to the bottom to leave one.</p>\n      </div>')


def learn_body(ui, sources):
    """The dysphagia explainer, from the same English strings the app uses."""
    e = html.escape
    out = ['<div class="page" id="learn-page"><article class="learn">',
           '<h1>%s</h1>' % e(ui['learn.h1']), '<p>%s</p>' % e(ui['learn.lede'])]
    for head, keys in (('learn.d.h', ['learn.d.p1', 'learn.d.p2', 'learn.d.p3']),
                       ('learn.i.h', ['learn.i.p1', 'learn.i.p2']),
                       ('learn.l.h', ['learn.l.p1'])):
        out.append('<h2>%s</h2>' % e(ui[head]))
        out += ['<p>%s</p>' % e(ui[k]) for k in keys]
    out.append('<h3>%s</h3><ol>%s</ol>' % (e(ui['learn.l.foods']), ''.join(
        '<li>Level %d: %s</li>' % (n, e(ui['learn.l.f%d' % n])) for n in (7, 6, 5, 4, 3))))
    out.append('<h3>%s</h3><ol>%s</ol>' % (e(ui['learn.l.drinks']), ''.join(
        '<li>Level %d: %s</li>' % (n, e(ui['learn.l.d%d' % n])) for n in (4, 3, 2, 1, 0))))
    out += ['<p>%s</p>' % e(ui['learn.l.p2']),
            '<p>%s <a href="/texture-guide">%s</a>.</p>' % (e(ui['learn.l.site']), e(ui['learn.l.link'])),
            '<h2>%s</h2>' % e(ui['learn.t.h'])]
    out += ['<p>%s</p>' % e(ui[k]) for k in ('learn.t.p1', 'learn.t.p2', 'learn.t.p3')]
    out.append('<p>%s</p>' % e(DISCLAIMER))
    out.append('<h2>%s</h2><p>%s</p><ol>' % (e(ui['learn.s.h']), e(ui['learn.s.note'])))
    for i, url in enumerate(sources):
        out.append('<li>%s <a href="%s">%s</a></li>' % (e(ui['learn.s.%d' % (i + 1)]), e(url, quote=True), e(url)))
    out.append('</ol></article></div>')
    return '\n      '.join(out)


NOT_FOUND_BODY = ('<div class="page">\n      <h1>Page not found</h1>\n      '
                  '<p>There is nothing at this address.</p>\n      '
                  '<a href="/" class="btn btn-primary">Back to All Recipes</a>\n      </div>')


# --- sitemap --------------------------------------------------------------
#
# lastmod is only worth sending if it is true. A page keeps the date it
# already has unless what is on it actually changed in this run; stamping
# every page with today's date on every build teaches a crawler to ignore it.

def page_fingerprint(page):
    head = HEAD_RE.search(page)
    main = MAIN_RE.search(page)
    return (head.group(0) if head else '') + (main.group(0) if main else '')


def read_lastmods(path):
    if not os.path.exists(path):
        return {}
    text = io.open(path, encoding='utf-8').read()
    return dict(re.findall(r'<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>', text))


def write_sitemap(entries):
    """entries: (path, lastmod, changefreq, priority)"""
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path, lastmod, freq, priority in entries:
        out += ['  <url>',
                '    <loc>%s%s</loc>' % (SITE, '/' if path == '/' else path),
                '    <lastmod>%s</lastmod>' % lastmod,
                '    <changefreq>%s</changefreq>' % freq,
                '    <priority>%s</priority>' % priority,
                '  </url>']
    out.append('</urlset>')
    io.open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')


# --- putting the files together -------------------------------------------

HEAD_RE = re.compile(r'[ \t]*<!-- SEO:START.*?SEO:END -->', re.S)
MAIN_RE = re.compile(r'(<main id="main-content" role="main">).*?(</main>)', re.S)


def build_page(template, seo, body):
    if not HEAD_RE.search(template):
        sys.exit('index.html has no <!-- SEO:START --> / <!-- SEO:END --> markers.')
    page = HEAD_RE.sub(lambda m: head_block(seo), template, count=1)
    if not MAIN_RE.search(page):
        sys.exit('index.html has no <main id="main-content"> element.')
    return MAIN_RE.sub(lambda m: '%s\n      %s\n  %s' % (m.group(1), body, m.group(2)),
                       page, count=1)


def main():
    template = io.open(SOURCE, encoding='utf-8').read()
    recipes = read_literal(template, 'const recipes = ')
    levels_raw = read_literal(template, 'const IDDSI_LEVELS = ')
    levels = {str(k): v for k, v in levels_raw.items()}
    try:
        mixed = read_literal(template, 'const MIXED_CONSISTENCY = ')
    except ValueError:
        mixed = {}

    global IMAGE_VERSION
    version = re.search(r'const IMAGE_VERSION = (\d+);', template)
    if not version:
        sys.exit('index.html does not declare IMAGE_VERSION.')
    IMAGE_VERSION = int(version.group(1))

    out_dir = os.path.join(ROOT, 'recipe')
    today = datetime.date.today().isoformat()
    lastmods = read_lastmods(os.path.join(ROOT, 'sitemap.xml'))
    sitemap = []
    written = []

    def emit(path, body, target, freq=None, priority=None):
        """Write one page; record it for the sitemap with an honest lastmod."""
        page = build_page(template, seo_for(path, recipes, levels), body)
        old = io.open(target, encoding='utf-8').read() if os.path.exists(target) else ''
        url = SITE + ('/' if path == '/' else path)
        changed = page_fingerprint(old) != page_fingerprint(page)
        io.open(target, 'w', encoding='utf-8').write(page)
        written.append(path)
        if freq:
            sitemap.append((path, today if changed or url not in lastmods else lastmods[url],
                            freq, priority))

    # Pages are overwritten in place rather than the folder being wiped first,
    # so each can be compared with what was there. Files for recipes that no
    # longer exist are removed afterwards.
    os.makedirs(out_dir, exist_ok=True)
    keep = set()
    recipe_pages = []
    for recipe in recipes:
        target = os.path.join(out_dir, '%s.html' % recipe['slug'])
        keep.add(os.path.basename(target))
        recipe_pages.append(('/recipe/%s' % recipe['slug'], recipe_body(recipe, levels, mixed), target))
    for name in os.listdir(out_dir):
        if name.endswith('.html') and name not in keep:
            os.remove(os.path.join(out_dir, name))

    # The homepage is index.html itself, so it gets the same treatment in place.
    emit('/', home_body(recipes, levels), SOURCE, 'weekly', '1.0')
    emit('/texture-guide', texture_guide_body(recipes, levels),
         os.path.join(ROOT, 'texture-guide.html'), 'monthly', '0.8')
    for path, body, target in recipe_pages:
        emit(path, body, target, 'monthly', '0.8')
    emit('/dysphagia', learn_body(read_literal(template, 'const EN_UI = '),
                                  read_literal(template, 'const LEARN_SOURCES = ')),
         os.path.join(ROOT, 'dysphagia.html'), 'monthly', '0.7')
    emit('/reviews', REVIEWS_BODY, os.path.join(ROOT, 'reviews.html'), 'weekly', '0.5')
    emit('/about', ABOUT_BODY, os.path.join(ROOT, 'about.html'), 'monthly', '0.5')

    # Vercel serves 404.html for any address that matches nothing. The app
    # boots on it like any other page, so the error screen is the site's own
    # and follows the reader's language.
    emit('/404', NOT_FOUND_BODY, os.path.join(ROOT, '404.html'))

    write_sitemap(sitemap)

    # The review API only accepts reviews for recipes that exist. It cannot
    # read index.html at run time, so the list is written out for it here.
    slugs = sorted(r['slug'] for r in recipes)
    io.open(os.path.join(ROOT, 'api', '_slugs.js'), 'w', encoding='utf-8').write(
        '// Written by prerender.py. Do not hand-edit; regenerate.\n'
        'export default %s;\n' % json.dumps(slugs, indent=2))

    print('Prerendered %d pages from %d recipes.' % (len(written), len(recipes)))
    return written


if __name__ == '__main__':
    main()
