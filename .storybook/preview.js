import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import 'normalize.css';
Vue.use(VueLazyload);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered'
}
