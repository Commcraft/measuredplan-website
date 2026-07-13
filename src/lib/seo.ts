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
  // Publish the starting price where one exists, as a "from" offer. Google's
  // Offer validation requires `price` + `priceCurrency` directly on the Offer;
  // an hourly rate additionally carries a UnitPriceSpecification (unitCode HUR).
  const m = opts.fromFee?.match(/^From \$([\d,]+)(\/hr)?$/);
  if (m) {
    const price = m[1].replace(/,/g, "");
    data.offers = {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      url: `${SITE_URL}/services/${opts.slug}/`,
      ...(m[2]
        ? {
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price,
              priceCurrency: "USD",
              unitCode: "HUR",
              unitText: "hour",
            },
          }
        : {}),
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
