import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rss from "@astrojs/rss";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://webdevjosue.github.io",
  base: "/webdevjosue.github.io/", // If this is a project page
  integrations: [mdx(), rss(), sitemap()],
});
