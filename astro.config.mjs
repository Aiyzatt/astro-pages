import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  base: "/astro-pages",
  site: "https://aiyzatt.github.io/astro-pages/",
  integrations: [preact()],
});