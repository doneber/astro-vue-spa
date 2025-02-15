// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue({ appEntrypoint: '/src/pages/_app.ts' })],
  redirects: {
    "/hug/[...slug]":  {
      status: 301,
      destination: '/hug',
    },
  }
});