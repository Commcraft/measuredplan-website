import { getCollection } from "astro:content";

import { SITE_URL, BUSINESS } from "../consts";

// /llms.txt - a curated, factual site map for LLM answer engines
// (ChatGPT, Perplexity, Google AI Overviews, Claude, etc.). Emerging standard:
// https://llmstxt.org. Generated from live content so it stays accurate.
export async function GET() {
  const services = (await getCollection("services")).sort(
    (a, b) => a.data.order - b.data.order,
  );
  const core = services.filter((s) => !s.data.landingOnly);
  const landing = services.filter((s) => s.data.landingOnly);

  const priced = (fee: string) =>
    /^From \$/.test(fee)
      ? ` Starting at ${fee.replace(/^From /, "")}.`
      : fee === "Priced individually"
        ? " Priced individually."
        : "";

  const svcLine = (s: (typeof services)[number]) =>
    `- [${s.data.title}](${SITE_URL}/services/${s.id}/): ${s.data.summary}${priced(s.data.fromFee)}`;

  const body = `# MeasuredPlan

> MeasuredPlan is an as-built documentation and design drafting practice based in Asheville, NC and serving Western North Carolina. It produces as-built drawings, construction (permit-ready) drawings, concept design, floor plans, square-footage reports, lease exhibits, CAD drafting, 3D laser scanning and HOA architectural-review drawings for property owners, realtors, contractors, developers, homebuilders and architects.

## Key facts

- Practice type: as-built documentation and design drafting (NOT licensed land or boundary surveying).
- Location: Asheville, North Carolina. Service area: Western North Carolina (core: Greater Asheville; extended: Hendersonville, Waynesville, Brevard, Marion, Burnsville, Sylva and surrounding towns).
- Standards: measurements and drawings to ANSI Z765 (residential square footage), BOMA (commercial area), and local permitting requirements. Licensed land/boundary surveys are referred to a licensed North Carolina surveyor.
- Contact: ${BUSINESS.email}, ${BUSINESS.phone}. Hours: ${BUSINESS.hours}.
- Pricing: starting prices are published by service (see below); the final quote depends on floor area, complexity, access and outputs, confirmed before work begins. Rush turnaround available for a 25-35% surcharge.
- Deliverables: layered AutoCAD DWG, scaled PDF, IFC on request.

## Services

${core.map(svcLine).join("\n")}

## Specialized services

${landing.map(svcLine).join("\n")}

## Starting prices

- On-site measuring & existing-conditions documentation: from $295 (typical $295-$950+)
- As-built floor plans: from $395 (typical $395-$1,250)
- Permit-ready / construction drawings: from $795 (typical $795-$5,500+)
- Site plans / plot plans: from $295 (typical $295-$450)
- Sketch / PDF to CAD conversion: from $225 (typical $225-$750+)
- Commercial as-built & tenant improvement plans: from $950 (typical $950-$5,000+)
- CAD drafting support for contractors: from $75/hr (typical $75-$95/hr)
- Concept design: custom scope, priced per project
- HOA design & approval: custom scope, priced per project

## Pages

- [Services overview](${SITE_URL}/services/): all services with descriptions.
- [Pricing](${SITE_URL}/pricing/): published starting prices by service.
- [Projects](${SITE_URL}/projects/): sample as-built drawings and documentation.
- [About](${SITE_URL}/about/): the practice, leadership and service area.
- [FAQ](${SITE_URL}/faq/): common questions about as-built and design work.
- [Contact](${SITE_URL}/contact/): request a quote.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
