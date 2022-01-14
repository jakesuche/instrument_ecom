
export default {
  ssr: false,
  // subdirectory: '/niconkart',
  subdirectory: '/',
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'Audiosensashon | Home ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/multikart/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ],
    script: [
      { src: 'https://checkout.stripe.com/checkout.js'}
    ]
  },

  router: {
    // base: '/nikoncart/'
    base:'/',
    middleware:'test'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4c3b', throttle: 200, height: '3px', css: true },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
    'swiper/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     { src: '~/plugins/plugin.js', ssr:false },
     { src: '~/plugins/localStorage.js', ssr:false },
     { src: '~/plugins/api.js', ssr:false },
     { src: '~/plugins/filter.js', ssr:false },

  ],

  buildModules: [
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    "nuxt-paystack"
    
  ],

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/api/niconkart/user/login', method: 'post', propertyName:'token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' }
  //       }
  //     }
  //   }
  // },
  
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL:'http://localhost:8045'
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  */

  server:{
    port:process.env.PORT || 8000
  },
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: { compact: true }
  }
}