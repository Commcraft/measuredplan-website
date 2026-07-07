# CLAUDE.md — MeasuredPlan website

Marketing site for MeasuredPlan, a premium measured survey practice
(floor plans, elevations, lease plans, topographical surveys).
Static Astro site based on the free shadcnblocks **Mainline Astro template**
(Astro + shadcn/ui + Tailwind 4 + MDX + React islands).

**Read `docs/site-brief.md` before any structural or content work.**
It defines the sitemap, per-page sections, content model, and build order.
Do not add pages, sections, or features that are not in the brief — ask first.

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — production build (must pass before every commit)
- `pnpm astro check` — type/content checks (must pass before every commit)

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

### Type

- Display + body: `[FONT_PRIMARY]` (winner of the font board — set before
  Session 1; if Satoshi/Avenir, licensed files go in `src/assets/fonts/`).
- Utility mono for measurements, eyebrows, spec values: IBM Plex Mono.
- H1 uses weight 600 to echo the wordmark. Tracking tight and consistent.

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

British English `[CONFIRM]`. Plain, specific, measured — state accuracy,
scales, formats, turnaround; no superlatives, no marketing filler.
Buttons say what happens: "Request a quote", not "Get started".
Errors say what went wrong and how to fix it; no apologising.
Sentence case everywhere except the wordmark.

## Definition of done (every session)

`pnpm build` + `pnpm astro check` pass · matches the brief section list
exactly · no `[TODO]` silently resolved with invented facts · screenshots
at 390px and 1280px reviewed · committed with a conventional message.
