require("dotenv").config();
const { MICRO_CMS } = process.env;

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Caveat|M+PLUS+Rounded+1c" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/layout.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
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
    MICRO_CMS
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
