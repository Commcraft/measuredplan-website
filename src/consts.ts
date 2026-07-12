// Global site data for MeasuredPlan.
// Import anywhere with the `@/consts` alias.
//
// Business facts that are not yet confirmed are the literal string
// `[TODO: ...]` so they are greppable before launch (see CLAUDE.md rule 2).

export const SITE_URL = "https://measuredplan.com";

export const SITE_TITLE = "MeasuredPlan";
export const SITE_TAGLINE = "As-built documentation, drawn properly";
export const SITE_DESCRIPTION =
  "As-built drawings, construction drawings and concept design for architects, " +
  "contractors, developers, homebuilders and real estate across Western North Carolina.";

// Business details - replace [TODO] values before launch.
export const BUSINESS = {
  name: "MeasuredPlan",
  legalName: "[TODO: registered business name]",
  email: "info@measuredplan.com",
  phone: "(828) 998-7120",
  phoneHref: "+18289987120",
  hours: "Monday to Friday, 9am - 5pm",
  areaServed: "Serving Western North Carolina",
  location: "Asheville, NC",
  address: "[TODO: full mailing address]",
  companyNumber: "[TODO: business registration, if shown]",
  formats: ["PDF", "DWG", "IFC"],
} as const;

// Contact form backend - free, static-host-friendly, no monthly cap.
//
// Default: FormSubmit (https://formsubmit.co) - genuinely free, no account and
// no API key. Submissions are delivered to BUSINESS.email. One-time setup:
// after the site is live, submit the form once with your own details, then
// click the activation link FormSubmit emails to that address. Every
// submission after that lands straight in the inbox.
//
// Set provider to "none" to fall back to opening the visitor's email app
// (mailto), which keeps the contact route working with no backend at all.
export const CONTACT_FORM = {
  provider: "formsubmit" as "formsubmit" | "none",
} as const;
export const CONTACT_FORM_CONFIGURED = CONTACT_FORM.provider !== "none";

// Primary navigation (see site-brief §2).
export const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/projects/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
] as const;

export const PRIMARY_CTA = {
  label: "Request a quote",
  href: "/contact/",
} as const;

// Footer service links (kept in sync with the services collection order).
export const FOOTER_SERVICES = [
  {
    label: "As-built documentation & floor plans",
    href: "/services/measured-building-surveys/",
  },
  { label: "Construction drawings", href: "/services/construction-drawings/" },
  { label: "Concept design", href: "/services/concept-design/" },
  { label: "Lease & property plans", href: "/services/lease-plans/" },
  { label: "CAD drafting", href: "/services/cad-drafting/" },
  { label: "3D laser scanning", href: "/services/3d-scanning/" },
  { label: "Area & square footage reports", href: "/services/area-reports/" },
  { label: "HOA design & approval", href: "/services/hoa-design-approval/" },
] as const;

export const FOOTER_COMPANY = [
  { label: "Projects", href: "/projects/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
] as const;

export const SITE_METADATA = {
  title: {
    default: `${SITE_TITLE} - As-Built & Construction Drawings · Western North Carolina`,
    template: `%s - ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "MeasuredPlan" }],
  creator: "MeasuredPlan",
  publisher: "MeasuredPlan",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/measuredplan-favicon-32.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/measuredplan-apple-touch-180.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: `${SITE_TITLE} - As-Built & Construction Drawings · Western North Carolina`,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "MeasuredPlan - as-built drawings, construction drawings and CAD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE} - As-Built & Construction Drawings · Western North Carolina`,
    description: SITE_DESCRIPTION,
    images: ["/og-cover.jpg"],
  },
};

// Site-wide ProfessionalService JSON-LD (see site-brief §5).
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/measuredplan-logo-primary.svg`,
  image: `${SITE_URL}/og-cover.jpg`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Western North Carolina",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asheville",
    addressRegion: "NC",
    addressCountry: "US",
  },
  email: BUSINESS.email,
  telephone: "+1-828-998-7120",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "$$",
};
