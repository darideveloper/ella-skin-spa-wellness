// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), showTailwindcssBreakpoint()],

  vite: {
    plugins: [tailwindcss()]
  }
});