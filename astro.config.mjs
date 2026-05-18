import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cloudstrife7.github.io',
  base: '/ms2-boba',
  integrations: [tailwind()],
  build: {
    format: 'file', // generates tour.html not tour/index.html — preserves existing URLs
  },
});
