import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// Static output is the entire strategy: every page must be fully
// prerendered HTML so SEO and AI crawlers (GEO) see complete content
// without executing JavaScript.
export default defineConfig({
  site: "https://matchfluent.com",
  output: "hybrid",

  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],

  adapter: cloudflare()
});