# CLAUDE.md — MeasuredPlan website

Marketing site for MeasuredPlan, a premium **as-built documentation and
design-drafting practice** in Western North Carolina (as-built drawings, floor
plans, construction drawings, concept design, lease plans).
**Static Astro 5 site (Tailwind 4 + MDX), pure static output.** The original
shadcn/React/Radix UI stack was pruned as unused — do NOT re-add `react`,
`react-dom`, `@radix-ui/*`, `@astrojs/react`, `@astrojs/vercel`, or other UI
libs. Only `@astrojs/mdx` + `@astrojs/sitemap` integrations are active.

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
3. Pure static Astro components; interactivity is plain inline `<script>`
   (quote form, project filter, header, map, analytics). No React islands.
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
`--ring` ink · `--radius` **0** (rectilinear, architectural — squared corners).
Dark sections are a scoped `.band-ink` class (ink bg, paper text,
red → `--mp-red-dark-bg`), not a theme toggle. Remove the toggle.

### Type (as built)

- Display + body: **DM Sans**, self-hosted WOFF2, 4 weights in
  `src/styles/global.css` `@font-face`. Base font-size 106.25% (~17px), body
  line-height ~1.6 (readable for older customers — a stated requirement).
- Utility mono for measurements, eyebrows, spec values: **system monospace**
  (`--font-mono`, no external font dependency).
- Headings weight 600, tracking -0.025em, line-height ~1.08.
- `--radius: 0` — squared corners everywhere. Shadows near-zero.

**Type scale (locked — one value per role, never add near-duplicates):**

- H1, interior pages: **58px** (always via `PageIntro`); home hero larger.
  Never set a per-page H1 size.
- H2, section headings: **44px** (always via `SectionHeading`); small callout
  H2s use `text-2xl`/`3xl`.
- H3 / card titles: `text-lg` (~19px).
- **Body prose / section intros: `text-base` (17px) — the single body size.**
  Do NOT reintroduce `text-[1.05rem]`/18px (a 1px near-duplicate, unified out).
- Compact body / dense lists / card summaries: `text-[0.95rem]` (16px).
- Small helper text: `text-sm` (15px).
- Mono labels / eyebrows / captions: `text-xs` / `.eyebrow` (~13px).
- On phones (`@media max-width:767px`, rule in global.css) the smallest text
  (`text-xs`, `text-sm`, `.eyebrow`) is lifted ~1 step for older readers; body
  prose is already 16–19px so it is untouched.

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
- No gradients, glassmorphism, emoji, decorative blobs, or **stock** photography.
  Rich media is fine when it is **our own work** - real drawing sheets, floor
  plans, and 3D models/renders produced from as-built measures. Never generic
  stock imagery of people/buildings we didn't produce.
- Icons: lucide, 1.5px stroke, small, only where they carry meaning.
- Motion: restrained and on-brand - the hero reveal, the CAD registration-mark
  draw-in, and the hero **crossfade** (see below); hovers ≤150ms opacity/border
  shifts; respect `prefers-reduced-motion` everywhere.
- Generous but **balanced** whitespace — not empty space to fill. Section
  rhythm is `py-14 sm:py-18 lg:py-24` (in `Section.astro`); don't hand-set
  larger per-section padding. Two-column blocks with a short prose column use
  `lg:items-center` so the short side is balanced, not orphaned at the top.

## Layout, motion & systems (as built)

- **Section spacing + scroll-reveal are centralized in `Section.astro`.** Every
  `Section` wraps its content in a `data-reveal` (subtle fade-up on scroll,
  default on; pass `reveal={false}` to opt out). The reveal JS lives in
  `BaseHead.astro` (IntersectionObserver + geometry fallback + load safety),
  gated by `html.js` and `prefers-reduced-motion`, so no-JS / reduced-motion
  shows everything. Do NOT hand-add `data-reveal` to Section children.
- **Home hero = crossfade** (`index.astro`): `heroSlides` shows the deliverables
  for the **most-requested services, in priority order** - an as-built floor
  plan (service #1) leads, then a 3D model, then a design visualization. Lead
  with what visitors search for (accurate drawings), not a niche render; if the
  service ranking changes, re-order the frames to match. Frames stack in a
  fixed-aspect (`aspect-[1200/758]`) `object-cover` frame and crossfade via
  opacity classes with a subtle Ken Burns drift. First frame is
  eager/`fetchpriority="high"`, the rest lazy; the inline script only advances
  while the tab is visible and holds the first frame under
  `prefers-reduced-motion`. The image carries a plain drawing-sheet caption (no
  overlay marks on the image itself - a center datum read as a blemish).
- **Header = smart hybrid** (`SiteHeader.astro`): persistent/sticky on desktop
  (`>= lg`); hides on scroll-down / shows on scroll-up on mobile, paired with
  the sticky bottom **`MobileCtaBar`** (Get my quote + WhatsApp, hidden on
  `/contact`). Never stack two persistent bars on mobile. The **Services** nav
  item is a dropdown (desktop: CSS hover + focus-within panel listing every
  service; mobile: the services listed indented under Services) so services are
  reachable from any page, not only via the homepage route-finder.
- **`RouteFinder`** ("Choose your route"): the need-based service router is a
  shared component used on **both** the home page and the `/services` index (the
  natural "which do I need?" decision point, reachable from the Services tab).
  Edit routes/icons in `RouteFinder.astro` once - it feeds both pages.
- **`BackToTop`** (mobile only, `lg:hidden`): a subtle squared FAB, bottom-right,
  that fades in only after ~1.2 screens of scroll (so short pages never show it)
  and jumps to top (instant under reduced motion). It sits **above** the
  `MobileCtaBar` (`bottom-[84px]`), dropping to `bottom-5` on `/contact` where
  the bar is hidden - so the two never overlap.
- **Contact form is single-page** (NOT multi-step — a multi-step version was
  tried and reverted as slower). Web3Forms backend (`CONTACT_FORM` in consts)
  with a mailto fallback, honeypot, and localStorage draft recovery. On mobile
  the form column is `order-1` (leads) above the direct-contact aside.
- **Analytics = Umami** (`ANALYTICS.websiteId` in consts; script in BaseHead,
  gated on a valid UUID). Events: `window.umami?.track('Quote Started')` and
  `'Quote Submitted'` (non-PII props only — method / property-type / timeline /
  services); `data-umami-event="WhatsApp Click"|"Call Click"` attrs on those
  links. **Never send PII (name/email/phone/address) to analytics.**
- **Service-area map** (`ServiceArea.astro`): **light** CARTO Positron
  (`light_all`) basemap - labeled towns/roads so it reads clearly as a map -
  with a bold red core coverage circle + dashed extended circle and an Asheville
  datum marker. Leaflet is self-hosted in `public/vendor/`. (A dark basemap was
  tried and reverted: it didn't read as a map.)
- **Security:** a CSP `<meta>` in `BaseHead.astro` allows only self + Umami +
  Web3Forms + CARTO tiles (`'unsafe-inline'` needed for inline scripts/styles);
  frame-ancestors/HSTS must be set at the CDN (Cloudflare). `/.well-known/
  security.txt` present. If you add a third-party host, update the CSP.
- Leadership section on About is hidden behind `SHOW_LEADERSHIP` (about.astro).

## Copy rules

**American English** (the site had a deliberate Americanize pass). Plain,
specific, measured — state accuracy, scales, formats, turnaround; no
superlatives, no marketing filler. Primary CTA is **"Get my quote"**
(first-person, higher-converting — `PRIMARY_CTA` in consts); buttons say what
happens, never "Get started". Sentence case everywhere except the wordmark.
The contact page H1 keeps "Request a quote" for the search keyword.

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

- `.datum-tick` — 0.5rem red square, a **deliberate** leading marker (e.g.
  ProofStats stats), NOT a general bullet.
- `.title-dot` — the squared "period" ending a heading. Fixed **0.4rem**
  (NOT em-scaled) with a small `margin-left` for a steady period-like gap.
  `SectionHeading`/`PageIntro`/`CTASection` strip a trailing "." and render it;
  the hero H1 adds it manually.
- `.eyebrow-rule` — a short red *bar* (not a square) marks an eyebrow.
- **Restraint (important, enforced this build):** the red datum is NOT a
  repeated list bullet. Do not put a red square on every deliverable, card, or
  use-case (it dilutes the mark into decoration). Use a **neutral** marker
  (`h-1 w-1 bg-line-strong`) for list items and card markers; let red appear
  only on hover where useful. Reserve red for: eyebrow rules, heading
  title-dots, the primary CTA, ProofStats accents, and hover. ~one red element
  per viewport.

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
