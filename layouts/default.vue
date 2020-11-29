<template>
  <div id="app">
    <the-navigation :logo-text="logoText" :routes="routes" />
    <nuxt />
  </div>
</template>

<script>
import TheNavigation from '@/components/organisms/TheNavigation/TheNavigation';

export default {
  components: {
    'the-navigation': TheNavigation,
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
</style>
