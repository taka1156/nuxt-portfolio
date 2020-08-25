<template>
  <div id="app">
    <nav-bar :logo-text="logoText" :routes="routes" />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/organisms/BaseNav';

export default {
  components: {
    'nav-bar': NavBar,
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
  text-decoration: none;
  text-align: center;
}
</style>
