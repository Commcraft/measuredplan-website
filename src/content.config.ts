import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// ---- Services -------------------------------------------------------------
const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    optional: z.boolean().default(false),
    // Landing pages: real pages at /services/<slug>/ for SEO, but kept out of
    // the primary service grid / pricing / contact lists to avoid overlap.
    landingOnly: z.boolean().default(false),
    eyebrow: z.string(), // e.g. imperial scales
    summary: z.string(), // one line, used on cards
    intro: z.string(), // 1-2 sentences at top of the page
    seoTitle: z.string(),
    seoDescription: z.string(),
    forWho: z.array(z.string()),
    included: z.array(z.string()),
    typicalInputs: z.array(z.string()),
    deliverables: z.array(z.string()),
    spec: z.object({
      accuracy: z.string(),
      scales: z.array(z.string()),
      formats: z.array(z.string()),
      method: z.string(),
    }),
    useCases: z.array(z.object({ title: z.string(), body: z.string() })),
    fromFee: z.string(),
    feeFactors: z.array(z.string()),
    samples: z
      .array(
        z.object({
          variant: z.enum(["floorplan", "elevation", "leaseplan", "section"]),
          caption: z.string(),
          image: z.string().optional(), // real anonymized sheet, overrides SVG
        }),
      )
      .default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

// ---- Projects -------------------------------------------------------------
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    service: z.array(z.string()), // service slugs
    buildingType: z.string(),
    location: z.string(),
    scopeLine: z.string(),
    deliverables: z.array(z.string()),
    // Real, anonymized project image (title blocks / addresses removed).
    image: z.string().optional(),
    // Fallback drawing-style SVG when no real image is set.
    variant: z
      .enum(["floorplan", "elevation", "leaseplan", "section"])
      .default("floorplan"),
    date: z.string(),
    featured: z.boolean().default(false),
  }),
});

// ---- Testimonials ---------------------------------------------------------
const testimonials = defineCollection({
  loader: glob({
    base: "./src/content/testimonials",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    service: z.string().optional(),
    order: z.number(),
  }),
});

// ---- FAQs -----------------------------------------------------------------
const faqs = defineCollection({
  loader: glob({ base: "./src/content/faqs", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    services: z.array(z.string()).default([]), // empty = global
    order: z.number(),
  }),
});

export const collections = { services, projects, testimonials, faqs };
