import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

// https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API
Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '220px',
    threshold: 1
  },
  filter: {
    webp(listener, options) {
      if (!options.supportWebp || !listener.src) {
        return;
      }
      listener.src += '?fm=webp';
    }
  }
});
