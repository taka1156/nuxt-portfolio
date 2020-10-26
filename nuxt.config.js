import axios from 'axios';
require('dotenv').config();
const { BASE_URL, MICRO_CMS } = process.env;
const CONTENT_MAX = 20;
const api = 'https://taka_portfolio.microcms.io/api/v1';

export default {
  mode: 'universal',
  target: 'static',
  generate: {
    fallback: true,
    routes() {
      const skills = axios
        .get(`${api}/skill`, {
          params: { fields: 'title,img,content2', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS },
        })
        .then(({ data }) => {
          return data.contents.map(skill => {
            return skill;
          });
        });

      const portfolios = axios
        .get(`${api}/portfolio`, {
          params: { fields: 'title,img,content2,link', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS },
        })
        .then(({ data }) => {
          return data.contents.map(portfolio => {
            return portfolio;
          });
        });

      return Promise.all([skills, portfolios]).then(values => {
        return [
          { route: '/skill', payload: values[0] },
          { route: '/portfolio', payload: values[1] },
        ];
      });
    },
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'TakasPortfolio',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - TakasPortfolio',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Taka's Portfolio",
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.taka1156.site',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Taka's Portfolio",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Takaのポートフォリオです',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${BASE_URL}/img/ogp/logo.jpg`,
      },
      // Twitter Card
      {
        name: ' twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@taka_Program',
      },
    ],
    link: [],
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
    extend: function (config) {
      config.node = {
        fs: 'empty',
      };
    },
  },
};
