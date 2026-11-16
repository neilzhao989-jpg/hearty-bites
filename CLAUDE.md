# Amazing Recipes

A single-file vanilla SPA that grades every recipe to an IDDSI texture level, for
people with oral dysphagia and the people cooking for them. No build step.

- `index.html` is the source of truth: the stylesheet, the router, and the
  `recipes` / `IDDSI_LEVELS` / `MIXED_CONSISTENCY` data all live in it.
- `prerender.py` reads that data back out and writes one static HTML file per
  route, so crawlers see content on the first fetch. **Run it after any change
  to `index.html`** — `python3 prerender.py` — and commit the output.
- `i18n.js` holds the French and Chinese translations. Recipe blocks sit between
  `/* RECIPES:fr */` markers and are generated, not hand-edited.
- Preview with the `static-site` launch config, never a hand-rolled server.
  It does not rewrite clean URLs, so recipe pages need `.html` locally.
- `prerender.py` also writes `404.html`, `sitemap.xml` and `api/_slugs.js`
  (the list of recipes the review API will accept). None are hand-edited.
- `vercel.json` carries the security headers, including a Content-Security-
  Policy. Anything loaded from a new origin has to be added there or it is
  silently blocked on the live site and nowhere else.
- When a photo file is replaced, bump `IMAGE_VERSION` in `index.html`. Photos
  are cached for a year under their own name; the version is what makes
  returning visitors fetch the new one.
- `i18n.js` is fetched only when a reader picks French or Chinese. Every
  interface string therefore needs its English in `EN_UI` first, and the two
  translations added to the `ui` blocks in `i18n.js` in the same change.
- Style the page chrome by class (`.site-header`), never by element. A bare
  `header {}` rule once restyled the `<header>` inside every review card.

Most of the audience is older, often on a tablet, often with reduced dexterity.
Legibility and a control answering the moment it is touched matter more here
than they would elsewhere. Translations must come from the source text, never
from memory — a row-count check proves structure, not content.

## Interface house style

`.claude/skills/apple-design/SKILL.md` is the standard for anything that moves,
floats, or is typeset. **It applies to every change, not only when asked.**
Read it before touching the stylesheet. The short version of what is already
built on top of it:

**Motion.** Springs are specified as damping + response, never duration. Two
curves only: `--spring` (critically damped, no overshoot) for anything that
changes state, and `--spring-bounce` for motion the person's own momentum
started — a flick or a throw. Nothing on this site is drag-driven yet, so
`--spring-bounce` is defined and deliberately unused; don't sprinkle it on
taps. Durations come from `--resp-press` (0.16s), `--resp` (0.3s) and
`--resp-slow` (0.4s). Animate only `transform` and `opacity`; never
`transition: all`, which quietly animates layout too.

**Contrast.** Small text needs 4.5:1. White fails on the yellow, orange, green
and pink IDDSI colours, so anything printed on a level's `color` takes its
`ink` from the same entry in `IDDSI_LEVELS`; white is only safe on `deep`.

**Press feedback.** Every new control goes in the `PRESSABLE` selector list in
`index.html` and gets a `[data-pressed]` rule (and a line in the reduced-motion
block at the end of the stylesheet). Feedback lands on pointer-down,
not on click — on a touch screen there is no hover to borrow, and Safari only
honours `:active` for some elements. The shared handler releases the press
after ~10px of travel, so sliding off a control backs out of the tap.

**Materials.** Floating chrome (the header, the nav dropdown) is a translucent
layer with the page running under it: `--material-thin` / `--material-thick`
plus `--material-blur`. Never stack one translucent surface on another. No 1px
rule under a sticky header — use the faded `header::after` edge, which only
appears once content is actually passing underneath.

**Spatial consistency.** A panel leaves the way it arrived, and its
`transform-origin` sits on the control that opened it, so the two read as one
object. Glass surfaces animate blur and scale together, so they arrive as a
material rather than dissolving in.

**Typography.** Tracking is a function of size and is never one value for the
whole scale: large text is pulled in (`-0.022em` at h1), small text is left
alone. Leading runs the other way. CJK takes none of this — negative tracking
is a Latin correction, and the `html[lang="zh-Hans"]` block at the end of the
stylesheet undoes it. Size in `rem`, never `px`, so a reader who has set a
larger default text size gets it.

**Preferences.** `prefers-reduced-motion`, `prefers-reduced-transparency` and
`prefers-contrast` are all honoured, and their blocks live at the **end** of
the stylesheet — written anywhere else they lose every tie on specificity to
the component rules below them. Reduced motion means feedback without the
travel, not no feedback: drop transforms, keep opacity and colour.
