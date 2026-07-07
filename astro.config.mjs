// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
// The marketing site is fully static Astro with small inline scripts — no
// React islands — so no client framework is shipped.
export default defineConfig({
  site: "https://measuredplan.com",
  integrations: [mdx(), sitemap()],
  output: "static",
  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },
});
