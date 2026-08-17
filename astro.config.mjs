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
    build: {
      // Los scripts pequeños (<4KB) se inlinean por defecto y la CSP 'self' los
      // bloquea → contenido invisible. Forzamos scripts externos siempre.
      assetsInlineLimit: 0,
    },
  },
  security: {
    checkOrigin: true,
  },
});
