<template>
  <div class="NaviBar">
    <nav v-show="!isSplashRoute">
      <div class="navbar">
        <div class="navbar__box">
          <a class="navbar__brand" href="/">Taka'sPortfolioSite</a>
          <div @click="changeState">
            <nav-icon :is-open="isOpen" />
          </div>
        </div>
      </div>

      <transition name="nav-fade">
        <div v-show="isOpen" class="nav__contents">
          <div class="nav__items">
            <ul class="nav__none">
              <li
                v-for="(item, index) in routers"
                :key="index"
                class="nav__item"
                @click="changeState"
              >
                <nuxt-link :to="item.to">
                  <img :src="item.icon" class="nav__icon" />
                  {{ item.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import NavIcon from './NavIcon';

export default {
  name: 'NaviBar',
  components: {
    'nav-icon': NavIcon,
  },
  data() {
    return {
      isOpen: false,
      routers: [
        {
          name: 'Home',
          to: '/home',
          icon: require('assets/img/ui/home.svg'),
        },
        {
          name: 'Porfile',
          to: '/porfile',
          icon: require('assets/img/ui/profile.svg'),
        },
        {
          name: 'Skill',
          to: '/skill',
          icon: require('assets/img/ui/skill.svg'),
        },
        {
          name: 'Portfolio',
          to: '/portfolio',
          icon: require('assets/img/ui/portfolio.svg'),
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

<style scoped>
/* ナビゲーションバー */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(12, 12, 12, 0.9);
  z-index: 2;
}

.navbar__box {
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  margin: 0.5em auto;
}

.navbar__brand {
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
}

/* ナビゲーションバー内容 */
.nav__contents {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: rgba(12, 12, 12, 0.9);
}

.nav__items {
  display: flex;
  justify-content: center;
}

.nav__none {
  /* ulのスタイル無効化 */
  list-style-type: none;
  padding: 0;
}

.nav__item {
  font-size: 50px;
  text-align: left;
}

.nav__icon {
  font-size: 50px;
}

a {
  display: block;
  text-decoration: none;
  color: white;
}

/* nav-contentsのアニメーション */
.nav-fade-enter,
.nav-fade-leave-to {
  opacity: 0;
}

.nav-fade-enter-to,
.nav-fade-leave {
  opacity: 1;
}

.nav-fade-enter-active,
.nav-fade-leave-active {
  transition: opacity 0.6s ease;
}
</style>
