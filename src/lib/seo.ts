import { SITE_URL, BUSINESS } from "../consts";

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  slug: string;
  fromFee?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Western North Carolina",
    },
    url: `${SITE_URL}/services/${opts.slug}/`,
  };
  // Publish the starting price where one exists, as a "from" offer.
  const m = opts.fromFee?.match(/^From \$([\d,]+)(\/hr)?$/);
  if (m) {
    data.offers = {
      "@type": "Offer",
      priceCurrency: "USD",
      url: `${SITE_URL}/services/${opts.slug}/`,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: m[1].replace(/,/g, ""),
        priceCurrency: "USD",
        ...(m[2] ? { unitText: "hour" } : {}),
      },
    };
  }
  return data;
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
