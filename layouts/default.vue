<template>
  <div id="app">
    <portfolio-navigation :logo-text="logoText" :routes="routes" />
    <nuxt />
  </div>
</template>

<script>
import PortfolioNavigation from '@/components/organisms/nav/PortfolioNavigation';

export default {
  components: {
    'portfolio-navigation': PortfolioNavigation,
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
