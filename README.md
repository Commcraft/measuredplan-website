# MeasuredPlan — website

Marketing site for **MeasuredPlan**, a premium measured survey practice
(floor plans, elevations, sections, lease plans, topographical surveys).

Built as a fully static [Astro 5](https://astro.build) site with Tailwind 4.
The single source of truth for structure, content and design direction is
[`docs/site-brief.md`](docs/site-brief.md); working rules are in
[`CLAUDE.md`](CLAUDE.md).

## Stack

- **Astro 5** — static output, no client framework shipped
- **Tailwind CSS 4** — design tokens in `src/styles/global.css`
- **MDX + content collections** — `services`, `projects`, `testimonials`, `faqs`
- **DM Sans** (self-hosted) for display/body, system monospace for technical labels
- **Zero React islands** — interactivity (mobile nav, project filter, lightbox,
  FAQ accordions) is native HTML + small inline scripts

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build (must pass before every commit)
npx astro check    # type + content checks (must pass before every commit)
npm run lint       # eslint --fix
```

## Structure

```
src/
  components/      design-system components (Astro) — header, footer, cards,
                   plan visuals, spec tables, buttons, CTA band …
  content/         services / projects / testimonials / faqs collections
  layouts/         DefaultLayout (header + footer + SEO head)
  pages/           routes (see sitemap below)
  styles/global.css  locked palette → design tokens
  lib/seo.ts       JSON-LD helpers (ProfessionalService, Service, FAQPage)
public/
  brand/           MeasuredPlan datum mark (used unmodified)
  favicon/         favicons & app icons
  fonts/dm-sans/   self-hosted font files
```

### Routes

`/` · `/services` · `/services/[slug]` (5 services) · `/projects` ·
`/pricing` · `/about` · `/faq` · `/contact` · `/privacy` · `/terms` · `404`

## Brand

Palette v1.1 is locked — see `CLAUDE.md`. Warm paper canvas, ink text, a single
red used only as the datum/accent (logo, one primary CTA per viewport, active
markers, error states). No gradients, no stock imagery; visuals are original
CSS/SVG measured-plan linework.

## Before launch

Search for `[TODO` across `src/` and `public/` — every unconfirmed business
fact (contact details, coverage, fees, accreditations, insurance, legal text,
form backend, OG image) is a greppable placeholder. See the site brief §0.
