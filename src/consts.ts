// Global site data for MeasuredPlan.
// Import anywhere with the `@/consts` alias.
//
// Business facts that are not yet confirmed are the literal string
// `[TODO: ...]` so they are greppable before launch (see CLAUDE.md rule 2).

export const SITE_URL = "https://measuredplan.com";

export const SITE_TITLE = "MeasuredPlan";
export const SITE_TAGLINE = "Measured building surveys, drawn properly";
export const SITE_DESCRIPTION =
  "MeasuredPlan produces precise measured building surveys, floor plans, " +
  "as-built drawings and CAD documentation for architects, property owners " +
  "and real estate professionals across Western North Carolina.";

// Business details — replace [TODO] values before launch.
export const BUSINESS = {
  name: "MeasuredPlan",
  legalName: "[TODO: registered business name]",
  email: "info@measuredplan.com",
  phone: "(828) 215-4724",
  phoneHref: "+18282154724",
  hours: "Monday to Friday, 9am – 5pm",
  areaServed: "Serving Western North Carolina",
  location: "Asheville, NC",
  address: "[TODO: full mailing address]",
  companyNumber: "[TODO: business registration, if shown]",
  formats: ["PDF", "DWG", "IFC"],
} as const;

// Primary navigation (see site-brief §2).
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const PRIMARY_CTA = {
  label: "Request a quote",
  href: "/contact",
} as const;

// Footer service links (kept in sync with the services collection order).
export const FOOTER_SERVICES = [
  {
    label: "Measured building surveys",
    href: "/services/measured-building-surveys",
  },
  { label: "Lease & property plans", href: "/services/lease-plans" },
  { label: "CAD drafting", href: "/services/cad-drafting" },
  { label: "3D laser scanning", href: "/services/3d-scanning" },
  { label: "Area & square footage reports", href: "/services/area-reports" },
] as const;

export const FOOTER_COMPANY = [
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const SITE_METADATA = {
  title: {
    default: `${SITE_TITLE} — Measured Building Surveys · Asheville, NC`,
    template: `%s — ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "measured building survey",
    "as-built drawings",
    "floor plans",
    "CAD drafting",
    "lease exhibit",
    "space plans",
    "BOMA square footage",
    "3D laser scanning",
    "Asheville NC",
    "Western North Carolina",
  ],
  authors: [{ name: "MeasuredPlan" }],
  creator: "MeasuredPlan",
  publisher: "MeasuredPlan",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: `${SITE_TITLE} — Measured Building Surveys · Asheville, NC`,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MeasuredPlan — precise measured building surveys and CAD drawings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE} — Measured Building Surveys · Asheville, NC`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// Site-wide ProfessionalService JSON-LD (see site-brief §5).
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  areaServed: "Western North Carolina",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asheville",
    addressRegion: "NC",
    addressCountry: "US",
  },
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  priceRange: "$$",
};
