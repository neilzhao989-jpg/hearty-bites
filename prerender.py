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

def iso_duration(text):
    """"1 hour 30 minutes" -> "PT1H30M", the format schema.org wants."""
    if not text:
        return None
    hours = re.search(r'(\d+)\s*hour', text, re.I)
    mins = re.search(r'(\d+)\s*min', text, re.I)
    if not hours and not mins:
        return None
    return 'PT' + (hours.group(1) + 'H' if hours else '') + (mins.group(1) + 'M' if mins else '')


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
    for key, value in (('prepTime', iso_duration(recipe.get('prepTime'))),
                       ('cookTime', iso_duration(recipe.get('cookTime')))):
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
             'swallow. Every recipe carries the IDDSI texture level it is safe at.')


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
            title = '%s — IDDSI Level %s, %s' % (recipe['title'], recipe['dysphagia'], level['name'])
            desc = '%s Graded IDDSI Level %s (%s). Serves %s.' % (
                recipe['description'], recipe['dysphagia'], level['name'], recipe['servings'])
            if recipe.get('image'):
                image = '%s%s-1200.jpg' % (SITE, recipe['image'])
            jsonld = recipe_jsonld(recipe, levels)
    elif path == '/texture-guide':
        title = 'IDDSI Texture Guide — what each level means'
        desc = 'Plain-language explanation of IDDSI Levels 2 to 7, and which recipes match each one.'
    elif path == '/reviews':
        title = 'Reviews — Amazing Recipes'
        desc = 'Notes from people who have cooked these texture-graded recipes.'

    if not title:
        title, desc = HOME_TITLE, HOME_DESC

    return {'url': url, 'title': title, 'desc': desc, 'image': image, 'jsonld': jsonld}


def head_block(seo):
    e = html.escape
    lines = [
        '  <!-- SEO:START - written by prerender.py. Do not hand-edit; regenerate. -->',
        '  <meta name="description" content="%s">' % e(seo['desc'], quote=True),
        '  <link rel="canonical" href="%s">' % e(seo['url'], quote=True),
        '  <meta property="og:type" content="%s">' % ('article' if seo['jsonld'] else 'website'),
        '  <meta property="og:site_name" content="Amazing Recipes">',
        '  <meta property="og:url" content="%s">' % e(seo['url'], quote=True),
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

def recipe_body(recipe, levels, mixed):
    e = html.escape
    level = levels[str(recipe['dysphagia'])]
    out = ['<div class="page" id="recipe-page">']
    out.append('<div class="recipe-header">')
    out.append('<a href="/" class="back-link">Back to All Recipes</a>')
    out.append('<div class="recipe-top"><div class="recipe-title-tile">')
    out.append('<h1>%s</h1>' % e(recipe['title']))
    out.append('<p>%s</p>' % e(recipe['description']))
    out.append('<div class="fact-row">')
    out.append('<div class="fact"><b>Time</b><span>%s</span></div>' % e(recipe.get('cookTime', '')))
    out.append('<div class="fact"><b>Serves</b><span>%s</span></div>' % recipe['servings'])
    out.append('<div class="fact"><b>Effort</b><span>%s</span></div>' % e(recipe.get('difficulty', '')))
    out.append('</div></div>')

    if recipe.get('image'):
        out.append(
            '<div class="recipe-hero-image" style="background:%s">'
            '<img src="%s-800.jpg" alt="%s" width="800" height="600">'
            '</div>' % (e(recipe.get('imageBg', '#FBEFE1'), quote=True),
                        e(recipe['image'], quote=True),
                        e(recipe.get('imageAlt', recipe['title']), quote=True)))
    out.append('</div>')

    out.append('<div class="texture-tile" style="background:%s">' % e(level['deep'], quote=True))
    out.append('<b>Texture level</b>')
    out.append('<h2>%s &middot; %s</h2>' % (recipe['dysphagia'], e(level['name'])))
    out.append('<p>%s</p>' % e(level['desc']))
    out.append('<a href="/texture-guide">See all texture levels</a>')
    out.append('</div>')

    if recipe['slug'] in mixed:
        out.append('<div class="mixed-warning" role="note"><div>'
                   '<strong>Solids and liquid separate in this dish.</strong> '
                   'Not considered safe at Levels 4 to 6 as written. %s'
                   '</div></div>' % e(mixed[recipe['slug']]))
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
    out.append('</div>')
    return '\n      '.join(out)


REVIEWS_BODY = ('<div class="page">\n      <h1>Reviews</h1>\n      '
                '<p>Notes from people who have cooked these texture-graded recipes. '
                'Open any recipe and scroll to the bottom to leave one.</p>\n      </div>')


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

    out_dir = os.path.join(ROOT, 'recipe')
    if os.path.isdir(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)

    written = []

    for recipe in recipes:
        path = '/recipe/%s' % recipe['slug']
        page = build_page(template, seo_for(path, recipes, levels),
                          recipe_body(recipe, levels, mixed))
        target = os.path.join(out_dir, '%s.html' % recipe['slug'])
        io.open(target, 'w', encoding='utf-8').write(page)
        written.append(path)

    for path, body, filename in (
            ('/texture-guide', texture_guide_body(recipes, levels), 'texture-guide.html'),
            ('/reviews', REVIEWS_BODY, 'reviews.html')):
        page = build_page(template, seo_for(path, recipes, levels), body)
        io.open(os.path.join(ROOT, filename), 'w', encoding='utf-8').write(page)
        written.append(path)

    # The homepage is index.html itself, so it gets the same treatment in place.
    home = build_page(template, seo_for('/', recipes, levels), home_body(recipes, levels))
    io.open(SOURCE, 'w', encoding='utf-8').write(home)
    written.append('/')

    print('Prerendered %d pages from %d recipes.' % (len(written), len(recipes)))
    return written


if __name__ == '__main__':
    main()
