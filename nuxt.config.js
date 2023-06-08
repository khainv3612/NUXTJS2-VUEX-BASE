export default {
  server: {
    port: process.env.LISTEN_PORT || 8000,
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VAMPS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' }
    ],
    script: [
      {
        hid: 'gtm',
        innerHTML: `window.dataLayer = window.dataLayer || [];`,
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/index.scss',
    '@/assets/scss/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    '@/plugins/fullwidth.js'
  ],

  // middleware route
  router: {
    middleware: [
      'i18n'
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt'
  ],

  i18n: {
    locales: ['en', 'vi', 'ja']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
    credentials: false
  },

  auth: {
    strategies: {
      local: {
        token: {
          maxAge: 31536000
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'data.access_token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/profile', method: 'get', propertyName: 'data' }
        }
      }
    },
    plugins: [
      '~/plugins/axios.js'
    ],
    redirect: {
      login: '/login',
      logout: false,
      callback: false,
      home: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  minify: {
    collapseWhitespace: false
  }
}
