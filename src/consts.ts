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

// Contact form backend - free, static-host-friendly, no monthly cap, and no
// per-submission "activation" step.
//
// Web3Forms (https://web3forms.com): free and unlimited. One-time setup, ~30s:
// go to web3forms.com, enter info@measuredplan.com, copy the Access Key it
// shows, and paste it below. It works instantly - no confirmation email to
// click. Submissions are emailed straight to that address.
//
// Until a valid key is set, the form still works: it opens the visitor's mail
// app with the details filled in, so no message is ever lost.
export const CONTACT_FORM = {
  provider: "web3forms" as "web3forms" | "none",
  web3formsKey: "87d4bef3-51fe-46ed-b854-d634bee84edb",
} as const;
// A real Web3Forms key is a UUID (hex + hyphens). The placeholder fails this,
// so the form cleanly uses the email fallback until a key is pasted in.
export const CONTACT_FORM_CONFIGURED =
  CONTACT_FORM.provider === "web3forms" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    CONTACT_FORM.web3formsKey,
  );

// Track-record proof points, shown as a social-proof band on the home and
// contact pages. Real figures from the practice.
export const PROOF_STATS = [
  { value: "8", accent: "+", label: "Years in the field" },
  { value: "500", accent: "+", label: "Projects completed" },
  { value: "72", accent: "hr", label: "Average turnaround" },
] as const;

// Privacy-friendly analytics (Umami Cloud, Pro account). Open source, no
// cookies, no consent banner - GDPR-compliant by design, with no data sampling.
//
// Custom events emitted for the Pro dashboard (funnels, retention, event-data
// breakdowns): "Quote Started" (first form interaction), "Quote Submitted"
// (with method / property type / timeline / services), plus "WhatsApp Click"
// and "Call Click". Pageviews and UTM attribution are captured automatically.
export const ANALYTICS = {
  provider: "umami" as const,
  src: "https://cloud.umami.is/script.js",
  websiteId: "0fe27ea0-0005-4ee4-bff8-15bd27d7ffd8",
} as const;
// Analytics only load once a real UUID Website ID is set, so nothing is
// requested (and no console noise) until the account is connected.
export const ANALYTICS_ENABLED =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    ANALYTICS.websiteId,
  );

// Primary navigation (see site-brief §2).
export const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/projects/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const PRIMARY_CTA = {
  label: "Request a quote",
  href: "/contact/",
} as const;

// WhatsApp click-to-chat on the business phone number, with a short prefilled
// message. Used on the contact page, header and footer.
export const WHATSAPP = {
  href: `https://wa.me/${BUSINESS.phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi MeasuredPlan, I'd like to ask about a quote.",
  )}`,
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
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/measuredplan-logo-primary.svg`,
  image: `${SITE_URL}/og-cover.jpg`,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Western North Carolina" },
    { "@type": "City", name: "Asheville" },
    { "@type": "City", name: "Hendersonville" },
    { "@type": "City", name: "Waynesville" },
    { "@type": "City", name: "Brevard" },
  ],
  knowsAbout: [
    "As-built drawings",
    "Existing-conditions documentation",
    "Construction drawings",
    "Concept design",
    "CAD drafting",
    "3D laser scanning",
    "Scan-to-CAD",
    "ANSI Z765 square footage",
    "BOMA area measurement",
    "Lease exhibits",
    "HOA architectural review drawings",
  ],
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
