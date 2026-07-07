// Global site data for MeasuredPlan.
// Import anywhere with the `@/consts` alias.
//
// Business facts that are not yet confirmed are the literal string
// `[TODO: ...]` so they are greppable before launch (see CLAUDE.md rule 2).

export const SITE_URL = "https://measuredplan.com";

export const SITE_TITLE = "MeasuredPlan";
export const SITE_TAGLINE = "Measured building surveys, drawn properly";
export const SITE_DESCRIPTION =
  "MeasuredPlan produces precise measured survey drawings — floor plans, " +
  "elevations, sections and lease plans — for architects, property owners " +
  "and solicitors.";

// Business details — replace [TODO] values before launch.
export const BUSINESS = {
  name: "MeasuredPlan",
  legalName: "[TODO: registered company name]",
  email: "[TODO: hello@measuredplan.com]",
  phone: "[TODO: +44 telephone]",
  phoneHref: "[TODO: +44telephone]",
  hours: "Monday to Friday, 9am – 5pm",
  areaServed: "[TODO: coverage area + travel radius]",
  address: "[TODO: registered address]",
  companyNumber: "[TODO: company registration number]",
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
  { label: "Lease plans", href: "/services/lease-plans" },
  { label: "Topographical surveys", href: "/services/topographical-surveys" },
  { label: "3D scanning", href: "/services/3d-scanning" },
  { label: "Area reports", href: "/services/area-reports" },
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
    default: `${SITE_TITLE} — Measured building surveys & lease plans`,
    template: `%s — ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "measured building survey",
    "measured survey",
    "floor plans",
    "lease plans",
    "Land Registry lease plan",
    "topographical survey",
    "elevations and sections",
    "as-built drawings",
    "CAD floor plans",
    "measured plan",
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
    title: `${SITE_TITLE} — Measured building surveys & lease plans`,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MeasuredPlan — precise measured survey drawings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE} — Measured building surveys & lease plans`,
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
  areaServed: BUSINESS.areaServed,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  priceRange: "££",
};
