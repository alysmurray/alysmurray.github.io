// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://alysmurray.com',
  base: process.env.BASE_PATH || '/',
  // Accept existing slashless links; Layout emits canonical URLs with trailing slashes.
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
