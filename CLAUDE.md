# CLAUDE.md — MeasuredPlan website

Marketing site for MeasuredPlan, a premium measured survey practice
(floor plans, elevations, lease plans, topographical surveys).
Static Astro site based on the free shadcnblocks **Mainline Astro template**
(Astro + shadcn/ui + Tailwind 4 + MDX + React islands).

**Read `docs/site-brief.md` before any structural or content work.**
It defines the sitemap, per-page sections, content model, and build order.
Do not add pages, sections, or features that are not in the brief — ask first.

## Commands

Package manager is **npm** (`package-lock.json`).

- `npm run dev` — local dev server
- `npm run build` — production build (must pass before every commit)
- `npx astro check` — type/content checks (must pass before every commit)
- `npm run format` — prettier (only formats non-`.astro` files; no astro plugin)

## Deploy

`master` auto-deploys via `.github/workflows/deploy.yml` → GitHub Pages,
custom domain **measuredplan.com** (`public/CNAME`). Push with
`git push -u origin master` (retry with backoff on network errors).
Verify a deploy with the GitHub Actions API (`deploy.yml` runs).

## Working rules

1. One scope per session (one page or one system). Plan before coding.
2. Never invent facts about the business. Unknown facts are the literal
   string `[TODO: what is missing]` — never plausible-sounding filler.
3. Prefer static Astro components. React islands only for: quote form,
   project filter/lightbox. Use `client:visible`, never `client:load`
   unless above the fold and interactive.
4. Small, reviewable commits: `feat(home): hero section` style. Never
   commit a failing build.
5. Do not add dependencies without asking. No animation libraries beyond
   what the template ships.
6. Do not upgrade Astro or Tailwind majors; build on shipped versions.

## Brand (locked — do not reinterpret)

Palette v1.1:

- `--mp-ink: #0B1726` — text, dark bands
- `--mp-paper: #F7F5F0` — page background
- `--mp-red: #C21F3A` — datum red, the only accent
- `--mp-red-dark-bg: #DF4B57` — readable red on ink backgrounds only

Neutrals are ink at opacity (borders 12%, muted text ~65%, fills 4–6%) —
never introduce new hues or grey hexes.

### Theme mapping (shadcn variables, light-only site)

`--background` paper · `--foreground` ink · `--primary` red ·
`--primary-foreground` paper · `--card` #FFFFFF with 1px ink/12% border ·
`--muted` ink 6% · `--muted-foreground` ink 65% · `--border` ink 12% ·
`--ring` red · `--radius` 0.25rem (rectilinear, architectural).
Dark sections are a scoped `.band-ink` class (ink bg, paper text,
red → `--mp-red-dark-bg`), not a theme toggle. Remove the toggle.

### Type (as built)

- Display + body: **DM Sans**, self-hosted WOFF2, 4 weights (Regular,
  Medium, SemiBold + one more) in `src/styles/global.css` `@font-face`.
  Base font-size 106.25% (~17px), body line-height 1.65 (readable for
  older customers — a stated requirement).
- Utility mono for measurements, eyebrows, spec values: **system monospace**
  (`--font-mono`, no external font dependency).
- H1 weight 600 echoes the wordmark. `--radius: 0` — squared corners
  everywhere (cards, images, buttons, inputs). Shadows near-zero.

### Logo usage (hard rules from the logo pack README)

- Desktop header: `measuredplan-logo-header.svg`; ≤640px:
  `measuredplan-logo-small.svg`; dark bands: `measuredplan-logo-wordmark-paper.svg`.
- Wordmark never below 96px wide; below that use the mark tiles.
- Ruler lockup only at ≥300px (hero/footer scale).
- Never recolour the datum, stretch, or add effects.
- Clear space = cap height on all sides. Use the pack's favicon/head tags as-is.

## Design guardrails

The visual world is CAD linework: datum marks, dimension ticks, hairline
rules, title blocks. The signature device is the **ruler/datum motif** from
the logo — reuse it as section dividers and list markers, sparingly.

- Red budget: ~one red element per viewport. Red = action or datum, nothing else.
- Hairline ink borders (1px, 12%) instead of shadows; shadows near-zero.
- No gradients, glassmorphism, emoji, decorative blobs, or stock photography
  of people/buildings. Imagery = real drawing sheets on paper.
- Icons: lucide, 1.5px stroke, small, only where they carry meaning.
- Motion: at most one restrained hero reveal; hovers ≤150ms opacity/border
  shifts; respect `prefers-reduced-motion`.
- Generous whitespace; align everything to the grid — sloppy spacing reads
  as contractor-grade, which this brand explicitly is not.

## Copy rules

**American English** (the site had a deliberate Americanize pass). Plain,
specific, measured — state accuracy, scales, formats, turnaround; no
superlatives, no marketing filler. Buttons say what happens: "Request a
quote", not "Get started". Sentence case everywhere except the wordmark.

Hard content constraints (do not break):

- **Only normal hyphens** `-`. Never em/en dashes.
- Lead with **"Western North Carolina"** (based Asheville).
- **Avoid the word "survey"** — it is a licensed activity in NC. Use
  as-built / documentation / measurement / existing-conditions instead.
- Do **not** claim a blanket "fixed-fee"; prices are published *starting*
  prices, confirmed per scope.
- Never invent business facts — unknowns are the literal string `[TODO]`.
- Never recolour, redraw, distort, or stretch the logo or its datum.

## Red-square datum system (locked)

The red square from the logo is the one brand mark. **Every red square on
the site is the same size: `0.5rem`.**

- `.datum-tick` — 0.5rem red square, leading marker in lists/captions.
- `.title-dot` — the squared "period" ending a heading. Fixed `0.5rem`
  (NOT em-scaled — em-scaling made the big hero dot chunkier than the rest)
  with `margin-left: 0.15rem` for a steady period-like gap at every size.
  `SectionHeading`/`PageIntro`/`CTASection` strip a trailing "." from the
  title and render this span; the hero H1 adds it manually.
- `.eyebrow-rule` — a short red *bar* (not a square) marks an eyebrow, so a
  section's eyebrow and its title-end datum don't read as two identical dots.
- Red budget stays ~one red element per viewport; red = action or datum.

## Service cards (`ServiceCard.astro`)

Drawing-sheet blocks, not plain boxes: header = sheet number (`01`) + red
datum, then a **single-line** spec eyebrow (never wraps), then a `.dim-rule`
divider, title, summary, mono deliverables, and a bottom "View service"
that is pinned so CTAs align across a row. Hover: a red datum edge wipes in
across the top, the card lifts with `shadow-lg`, and title/bullets/CTA turn
red. Callers pass `index={i}` for the sheet number. Whole card is one
stretched link (`after:absolute after:inset-0` on the title `<a>`).

## Tap targets & images

- Keep interactive links ≥ ~34px tall. Breadcrumb links use negative-margin
  padding to grow the hit area without changing layout; service-detail
  bottom nav is full-width rows, not 17px inline text.
- Team photos live in `src/assets/team/*.webp` and are imported (Astro
  content-hashing) so cache-busting works — do not move them to `public/`.

## Verifying visually

Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`; import
Playwright from `/opt/node22/lib/node_modules/playwright/index.js` (default
import, then destructure `chromium`). Serve `dist/` with `http-server`.

## Definition of done (every session)

`npm run build` + `npx astro check` pass · no `[TODO]` silently resolved
with invented facts · screenshots at 390px and 1280px reviewed · committed
with a conventional message and pushed to `master`.
