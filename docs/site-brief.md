# MeasuredPlan — Website Brief v1.0

Place this file at `docs/site-brief.md` in the repository.
It is the single source of truth for structure, content, and design direction.
`CLAUDE.md` (repo root) contains the working rules; this document contains the *what*.

---

## 0. Confirm before Session 1

Claude Code must never invent facts. Fill these in (or replace with `[TODO]` so
placeholders are traceable). Anything left as `[CONFIRM]` below is an assumption.

| Item | Current assumption | Your answer |
|---|---|---|
| Market / conventions | UK (Land Registry lease plans, British English) `[CONFIRM]` | |
| Services offered (v1) | Measured building surveys, lease plans, topographical surveys `[CONFIRM]`; 3D scanning + area reports optional | |
| Coverage area | `[TODO: city/region + travel radius]` | |
| Positioning | Premium independent practice (not a volume contractor) | |
| Team | `[TODO: solo surveyor or small team?]` | |
| Accreditations / insurance | `[TODO: e.g. RICS/CICES membership, PI insurance value]` | |
| Contact details | `[TODO: phone, email, registered address]` | |
| Pricing approach | Quote-based with indicative "from" fees `[CONFIRM]` | |
| Primary font | `[FONT_PRIMARY: winner of the font comparison board]` | |
| Hosting | Netlify (simplest forms path) `[CONFIRM — alternatives: Cloudflare Pages, Vercel]` | |

---

## 1. Positioning summary

MeasuredPlan produces precise measured survey drawings — floor plans, elevations,
sections, lease plans — for architects, property owners, and solicitors.
The site must read as a **premium professional practice**: the visual world of
CAD linework, datum marks, dimension strings, and title blocks. It must never
read as a generic SaaS landing page or a contractor directory listing.

Primary conversion goal: **quote requests** (form + phone).
Secondary: demonstrate drawing quality via sample plans.

---

## 2. Sitemap (v1)

```
/                                   Home
/services                           Services index
/services/measured-building-surveys   Floor plans, elevations, sections
/services/lease-plans                 Land Registry–compliant lease plans
/services/topographical-surveys       Topographical / land surveys
/services/3d-scanning                 [optional v1 — point cloud / scan-to-BIM]
/services/area-reports                [optional v1 — GIA/NIA/IPMS reports]
/projects                           Sample plans & recent work
/pricing                            How fees work + indicative fees
/about                              Practice, team, equipment, accreditations
/contact                            Quote request + direct contact
/privacy  /terms                    Legal
/404                                Not found
```

Phase 2 (do not build now): `/insights` blog for SEO, `/areas/[location]`
coverage pages, individual project detail pages.

Deleted from Mainline: login/signup pages, resource-allocation section,
dark/light mode toggle (site is light-only with ink-dark bands).

Navigation: `Services ▾ · Projects · Pricing · About` + primary button
`Request a quote` → `/contact`. Mobile: same items in sheet/drawer.

---

## 3. Per-page section structure

Sections marked **(Mainline)** adapt an existing template section; others are new.
Every page ends with the shared CTA band and footer.

### 3.1 Home `/`

1. **Header/nav (Mainline)** — `measuredplan-logo-header.svg` desktop,
   `measuredplan-logo-small.svg` ≤ 640px. Nav as above.
2. **Hero (Mainline, restyled)** — H1 + one-sentence subline + primary CTA
   "Request a quote" + secondary "View sample plans". Visual: a real drawing
   crop (plan sheet) on paper background — not an illustration, not a stock
   photo. Draft H1 options (flag as draft copy):
   - "Measured building surveys, drawn properly."
   - "Precise plans of what's actually there."
3. **Trust bar (Mainline logo marquee, repurposed)** — static row:
   accreditations, insurance, years, formats delivered (PDF · DWG · IFC).
   No scrolling marquee.
4. **Services grid (Mainline features section)** — 3–5 cards → service pages.
   Each: mono eyebrow (e.g. `1:50 · 1:100`), title, one line, deliverables hint.
5. **Deliverables strip (new)** — the differentiator: 2–3 annotated sample
   sheets shown large. Caption with scale, format, turnaround.
6. **Process (new)** — 4 steps: Enquiry → Site visit → Drawing → Delivery.
   Horizontal on desktop, stacked mobile. Numbered (a true sequence).
7. **Why MeasuredPlan (new)** — 4 compact proof points: accuracy spec,
   turnaround, insurance, file formats. Facts only, `[TODO]` where unknown.
8. **Featured projects (new)** — 2–3 entries from the projects collection.
9. **Testimonials (Mainline carousel, simplified)** — 2–3 static quotes,
   no autoplay. `[TODO: real quotes]`
10. **FAQ (Mainline accordion)** — top 5 from the FAQ collection.
11. **CTA band (shared)** — ink background (`.band-ink`), reversed logo rules
    apply, one line + quote button.
12. **Footer (Mainline, rebuilt)** — contact details, service links, coverage
    line, legal links, registration details. Dark ink; wordmark-paper logo.

### 3.2 Service page template `/services/[slug]`

Driven by the `services` content collection. Sections:

1. Breadcrumb + H1 + 2-sentence intro (who it's for, what they receive).
2. **What you receive** — deliverables list: drawing types, scales, formats.
3. **Sample sheets** — 2–4 drawing images, lightbox island (`client:visible`).
4. **Specification table** — accuracy, scales, output formats, survey method.
   Mono font for values.
5. **Use cases** — 3–4 short scenarios (planning application, lease, refurb).
6. **Process mini** — condensed 4-step strip.
7. **Fees** — indicative "from" fee + the 3 factors that move it + quote CTA.
8. **Service FAQ** — 3–5 collection entries filtered by service.
9. Related projects (same service tag), then shared CTA band + footer.

### 3.3 Services index `/services`

Intro paragraph + full card grid (same cards as home, plus optional services)
+ "not sure which survey you need?" panel linking to contact.

### 3.4 Projects `/projects`

Intro + filter by service type (island) + card grid. Each card: drawing
thumbnail, building type, location (approximate), scope line, deliverables.
Cards open a lightbox in v1 — no detail routes yet. Seed with 4–6 entries,
`[TODO]` images until real sheets are anonymised.

### 3.5 Pricing `/pricing`

1. How fees are calculated (floor area, building complexity, access, outputs).
2. **Indicative fee table (Mainline pricing table, adapted)** — one row/card
   per service with "from £`[TODO]`" and what's included. No toggle, no tiers.
3. What's always included (site visit, PDF+DWG, one revision `[CONFIRM]`).
4. FAQ subset (payment, VAT, turnaround) + CTA band.

### 3.6 About `/about`

Practice story (short, factual) · team `[TODO]` · equipment and method
(instrument brands if true, `[TODO]`) · accreditations & insurance ·
service standards (what "premium" means concretely) · CTA band.

### 3.7 Contact `/contact`

Two columns: direct contact (phone, email, hours, coverage) + **quote form**:
name, email, phone, property address/postcode, service (checkboxes),
property type (select), approx. floor area or storeys, deadline, notes,
optional file upload `[CONFIRM if wanted v1]`, honeypot anti-spam.
Success and error states written per the copy rules in `CLAUDE.md`.
Form backend: Netlify Forms if hosting on Netlify; otherwise an Astro
endpoint/action + Resend. Decide host before Session 5.

### 3.8 Legal + 404

`/privacy`, `/terms`: prose layout from MDX, `[TODO]` text.
404: mark logo, "This page isn't on the plan.", links home/services/contact.

---

## 4. Content model (Astro content collections)

```
src/content/
  services/      title, slug, order, eyebrow, intro, deliverables[],
                 spec{accuracy, scales[], formats[], method}, useCases[],
                 fromFee, feeFactors[], body (MDX)
  projects/      title, service[], buildingType, location, scopeLine,
                 deliverables[], images[], date, featured
  testimonials/  quote, name, role, company, service
  faqs/          question, answer, services[] (empty = global), order
```

Zod schemas required; seed every collection with entries whose unknown
fields are literal `[TODO]` strings so they are greppable before launch.

---

## 5. SEO & metadata

- Title pattern: `{Page} — MeasuredPlan` · home: `MeasuredPlan — Measured
  Building Surveys in [TODO: area]`.
- Unique meta description per page; canonical URLs; `@astrojs/sitemap` + robots.
- JSON-LD: `ProfessionalService` (site-wide: name, area served, contact) +
  `Service` per service page + `FAQPage` where FAQs render.
- OG image 1200×630 generated from the wordmark on paper with ruler motif.
- Favicon/app icons: use the head-tag block from the logo pack README verbatim.

---

## 6. Build plan for Claude Code

One session per row. Start each session with the prompt shown; end each with
build + check + commit (rules in `CLAUDE.md`).

| # | Scope | Starter prompt |
|---|---|---|
| 0 | Audit & plan (no code) | "Read CLAUDE.md and docs/site-brief.md fully. Audit the template: list every page, section component, and dependency, and map each to keep / adapt / delete per the brief. Output a written plan only — do not modify code." |
| 1 | Theme foundation | "Implement §Theme from CLAUDE.md: map brand tokens to the shadcn CSS variables, install fonts, set radius and borders, remove the dark-mode toggle, add the `.band-ink` scope, wire logo files and favicon head tags. Touch no page content." |
| 2 | IA + content collections | "Create the routes in site-brief §2 and the four content collections in §4 with zod schemas and seed entries. Delete Mainline pages/sections marked for removal. Placeholder pages may render only an H1." |
| 3 | Home | Use the per-page prompt template below with §3.1. |
| 4 | Service template + first service | Template + `measured-building-surveys`; then remaining services are content-only. |
| 5 | Contact + quote form | Includes backend wiring for the chosen host + spam honeypot + success/error states. |
| 6 | Projects | Grid, filter island, lightbox. |
| 7 | Pricing + About | Two smaller pages, one session. |
| 8 | SEO pass + legal + 404 | §5 in full. |
| 9 | QA | Run the checklist in §7; fix findings only. |

**Per-page prompt template:**
"Build `{route}` exactly per site-brief §{n}. Use only sections listed there,
in that order. Reuse existing components where the brief says (Mainline);
create new ones in `src/components/sections/`. All copy follows the copy rules
in CLAUDE.md; unknown facts stay as `[TODO]`. When done: `pnpm build`,
`pnpm astro check`, then show me a summary of files changed and a screenshot."

Review loop each session: view the page at 390px and 1280px, compare against
this brief, paste screenshots back to Claude Code with specific corrections.
One page per session; `/clear` between sessions.

---

## 7. QA checklist (Session 9)

- `pnpm build` and `pnpm astro check` pass with zero errors.
- Lighthouse (mobile): Performance ≥ 95, SEO ≥ 95, Accessibility ≥ 95.
- Zero `[TODO]` strings remaining (`grep -rn "\[TODO" src/`).
- All internal links resolve; form submits, errors, and succeeds correctly.
- Logo rules hold: wordmark never below 96px, mark used below that, ruler
  lockup only ≥ 300px, datum red never recoloured.
- Red budget respected: roughly one red element per viewport.
- Keyboard focus visible everywhere; `prefers-reduced-motion` respected.
- Screenshots at 390 / 768 / 1280 / 1680 widths reviewed for every page.
