// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      highlighter: 'shiki',
      wrapperStyle: true,
      theme: {
        default: 'material-theme-palenight',
      }
    }
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false // Set to false to match Cloudflare route matching rules: https://nuxt.com/deploy/cloudflare
    },
    experimental: {
      wasm: true,
    },
  },
})
