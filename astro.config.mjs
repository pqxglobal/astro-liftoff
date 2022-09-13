import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-liftoff-j4tlvif7b-pqxglobal.vercel.app/",
  integrations: [tailwind(), sitemap()],
});
