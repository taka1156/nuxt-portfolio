import { generateRouter } from './utils/routes/index.js';
require('dotenv').config();
const { BASE_URL, MICRO_CMS } = process.env;

export default {
  target: 'static',
  sitemap: {
    trailingSlash: true,
    path: '/sitemap.xml',
    hostname: 'https://www.taka1156.site',
    routes() {
      return generateRouter(MICRO_CMS);
    }
  },
  router: {
    trailingSlash: true,
    middleware: 'redirect'
  },
  generate: {
    fallback: true,
    routes() {
      return generateRouter(MICRO_CMS);
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Taka'sPortfolio",
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: "%s - Taka'sPortfolioSite",
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Taka's Portfolio"
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.taka1156.site'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Taka's Portfolio Site"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'taka1156のポートフォリオです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${BASE_URL}/img/ogp/logo.jpg`
      },
      // web閲覧時の説明文
      {
        hid: 'description',
        name: 'description',
        content: 'taka1156のポートフォリオです。'
      },
      // Twitter Card
      {
        name: ' twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: '@taka_Program'
      }
    ],
    link: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'gray' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', '@/assets/css/layout.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/GoogleAnalytics.js', mode: 'client' },
    { src: '~plugins/LazyLoad.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /**
   *  env
   */
  env: {
    BASE_URL,
    MICRO_CMS
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    extend: function (config) {
      config.node = {
        fs: 'empty'
      };
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ];
      }
    }
  }
};
