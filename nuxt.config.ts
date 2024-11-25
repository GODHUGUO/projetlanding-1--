// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon'],
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' } // Charge GSAP côté client uniquement
  ]
})