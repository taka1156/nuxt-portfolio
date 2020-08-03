import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import 'normalize.css';

import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions'

// https://qiita.com/kamicop/items/887d9dc40facaa43eed7#26-backgrounds
addParameters({
  backgrounds: [
    { name: 'default', value: '#fff', default: true },
    { name: 'black', value: '#000' },
  ],
});

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('nuxt-link')(this.to)
    },
  },
  template: `<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>`,
});

Vue.use(VueLazyload);

// automatically import all files ending in *.stories.js
const req = require.context('../components/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(withKnobs);
addDecorator(withInfo);
