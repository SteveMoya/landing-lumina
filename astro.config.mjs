// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Sitio 100 % estático (SSG): Cloudflare Pages sirve `dist/` directamente,
// no se necesita adaptador. Si algún día se añade una API route (Cloudflare
// Functions), instalar y configurar @astrojs/cloudflare en ese momento.
export default defineConfig({
  site: 'https://lumina.stevemoya.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    checkOrigin: true,
  },
});
