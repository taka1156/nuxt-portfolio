<template>
  <div id="app">
    <header>
      <the-navigation :logo-text="logoText" :routes="routes" />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <the-copyright />
    </footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/organisms/TheNavigation/TheNavigation';
import TheCopyright from '@/components/organisms/TheCopyright/TheCopyright.vue';

export default {
  components: {
    'the-navigation': TheNavigation,
    'the-copyright': TheCopyright,
  },
  data() {
    return {
      logoText: "Taka'sPortfolioSite",
      routes: [
        {
          name: 'Top',
          to: '/',
          img: require('assets/img/ui/home.png'),
        },
        {
          name: 'Profile',
          to: '/profile',
          img: require('assets/img/ui/profile.png'),
        },
        {
          name: 'Skill',
          to: '/skill',
          img: require('assets/img/ui/skill.png'),
        },
        {
          name: 'Portfolio',
          to: '/portfolio',
          img: require('assets/img/ui/portfolio.png'),
        },
      ],
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  text-decoration: none;
}

/* css reset */

header,
footer {
  padding: 0;
  margin: 0;
}

/* css reset */

main {
  min-height: 65vh;
}
</style>
