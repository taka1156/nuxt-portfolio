<template>
  <div class="TheNav">
    <nav v-show="!isSplashRoute">
      <nav-bar :is-open="isOpen" @change-state="changeState" />
      <nav-list :is-open="isOpen" :routers="routers" @change-state="changeState" />
    </nav>
  </div>
</template>

<script>
import NavBar from './parts/NavBar';
import NavList from './parts/NavList';

export default {
  name: 'TheNav',
  components: {
    'nav-bar': NavBar,
    'nav-list': NavList,
  },
  data() {
    return {
      isOpen: false,
      routers: [
        {
          name: 'Home',
          to: '/home',
          icon: require('assets/img/ui/home.png'),
        },
        {
          name: 'Profile',
          to: '/profile',
          icon: require('assets/img/ui/profile.png'),
        },
        {
          name: 'Skill',
          to: '/skill',
          icon: require('assets/img/ui/skill.png'),
        },
        {
          name: 'Portfolio',
          to: '/portfolio',
          icon: require('assets/img/ui/portfolio.png'),
        },
      ],
    };
  },
  computed: {
    isSplashRoute() {
      // スプラッシュページの時はナビゲーションバー非表示
      return this.$route.path === '/';
    },
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
