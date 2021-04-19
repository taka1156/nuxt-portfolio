<template>
  <div id="app">
    <header>
      <the-navigation :logo-text="logoText" :routes="routes" />
    </header>
    <div class="container">
      <main>
        <nuxt />
      </main>
      <footer>
        <the-copyright :copyright-url="copyrightUrl" />
      </footer>
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/organisms/TheNavigation/TheNavigation';
import TheCopyright from '@/components/organisms/TheCopyright/TheCopyright';
import { LOGO_TEXT, ROUTES, COPYRIGHT_URL } from '@/constants/index.js';

export default {
  components: {
    TheNavigation,
    TheCopyright
  },
  data() {
    return {
      logoText: LOGO_TEXT,
      routes: ROUTES,
      copyrightUrl: COPYRIGHT_URL
    };
  }
};
</script>

<style>
#app {
  text-align: center;
}

/* css reset */

header,
footer {
  padding: 0;
  margin: 0;
}

/* css reset */

.container {
  margin: 70px auto 0;
}

main {
  min-height: 55vh;
  padding: 0;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  main {
    width: 90vw;
  }
}
</style>
