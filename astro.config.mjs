import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidmvg05.github.io',
  base: '/Vale-dos-Camelos/',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
});
