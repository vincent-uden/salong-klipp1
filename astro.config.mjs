// @ts-check
import { defineConfig } from "astro/config";

import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    }
  }),
  integrations: [tailwind()],
  redirects: {
    "/behandlingar": "/",
    "/behandlingar.html": "/",
  }
});
