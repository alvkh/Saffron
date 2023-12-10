// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style.css',
       'primevue/resources/themes/arya-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
      ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build:{
    transpile:['primevue']
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head:{
      title : "هلدینگ تالار سرخ"
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  
  
  

})
