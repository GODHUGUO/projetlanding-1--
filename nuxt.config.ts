// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' } // Charge GSAP côté client uniquement
  ],

  head:{
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Parkinsans:wght@300..800&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Sevillana&display=swap",

 
      },
    ],
  }                                    
})