<template>
  <div>
    <nav>
      <nav-bar :logo-text="logoText" :is-open="isOpen" @change-state="changeState" />
      <nav-list :is-open="isOpen" :routers="routers" @change-state="changeState" />
    </nav>
  </div>
</template>

<script>
import NavBar from '../molecules/NavBar';
import NavList from '../molecules/NavList';

export default {
  name: 'BaseNav',
  components: {
    'nav-bar': NavBar,
    'nav-list': NavList,
  },
  data() {
    return {
      logoText: "Taka'sPortfolioSite",
      isOpen: false,
      routers: [
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
  methods: {
    changeState() {
      // ナビゲーションバーの開閉管理
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
