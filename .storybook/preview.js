import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import 'normalize.css';
import { action } from '@storybook/addon-actions';

Vue.use(VueLazyload);
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to);
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered'
}
