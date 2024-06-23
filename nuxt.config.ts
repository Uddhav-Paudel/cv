// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module"],
  ssr:false,
  css:[
    '~/assets/variables.scss'
  ],
  /* For Nuxt 3.9.0+ */
  features: {
    inlineStyles: false
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
            }
          }
        }
      },
      
    }
  }
})