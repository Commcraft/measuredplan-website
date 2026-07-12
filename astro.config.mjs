// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
// The marketing site is fully static Astro with small inline scripts — no
// React islands — so no client framework is shipped.
// Pages that are noindex must stay out of the sitemap, or Google Search
// Console flags "Submitted URL marked 'noindex'".
const NOINDEX_PATHS = ["/contact/thanks/", "/privacy/", "/terms/"];

export default defineConfig({
  site: "https://measuredplan.com",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((p) => page.endsWith(p)),
    }),
  ],
  output: "static",
  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },
});
