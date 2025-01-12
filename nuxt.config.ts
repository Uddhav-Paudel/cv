// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module"],
  ssr:false,
  css:[
    '~/assets/variables.scss',
    '~/assets/styles/global.css',
  ],
  /* For Nuxt 3.9.0+ */
  features: {
    inlineStyles: false
  },
  app:{
    head:{
      title: 'Uddhav Paudel',
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/logo_white.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio Of Software Developer: Uddhav Paudel' }
      ],
    }
  },
  vuetify:{
    
    moduleOptions:{
      styles:{
        configFile:'/setting.scss'
      }
    },
    vuetifyOptions:{
      
      display:{
        mobileBreakpoint:'sm'
      },
      theme:{
        themes:{
          
          light:{
            
            colors:{
              background:'rgb(1, 21, 70)',
              surface:'rgb(1, 21, 70)',
            },
          }
        }
      },
      
    }
  }
})