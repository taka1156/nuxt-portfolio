/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
require('dotenv').config();
const { BASE_URL, MICRO_CMS } = process.env;

export default {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'TakasPortfolio',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - TakasPortfolio',
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
        content: 'https://taka1156.github.io/TakasPortfolioSite',
      },
      { 
        hid: 'og:title',
        property: 'og:title', 
        content: "Taka's Portfolio" 
      },
      { 
        hid: 'og:description',
        property: 'og:description', 
        content: 'Takaのポートフォリオです' 
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://github.com/identicons/tomotaka.png',
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
    link: [],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/layout.css', '@/assets/css/font.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/InfiniteLoading.js', mode: 'client' },
    { src: '~plugins/LazyLoad.js', mode: 'client' },
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
    MICRO_CMS,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
