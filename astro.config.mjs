import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://clearcode.dev',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // A light theme that sits comfortably on the paper-coloured ground.
      theme: 'github-light',
      wrap: false,
    },
  },
});
