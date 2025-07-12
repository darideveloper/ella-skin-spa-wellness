// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://ella-skin-spa-wellness.com',
  integrations: [react(), showTailwindcssBreakpoint(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en',
        es: 'es',
      },
    },
    changefreq: 'weekly',
    priority: 1,
    lastmod: new Date()
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  }
})