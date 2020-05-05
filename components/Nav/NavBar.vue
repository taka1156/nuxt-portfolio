<template>
  <div class="NaviBar">
    <nav v-show="!isSplashRoute">
      <div class="navbar">
        <div class="navbar__box">
          <a class="navbar__brand" href="/">Taka'sPortfolioSite</a>
          <div @click="changeState">
            <hamberger-icon :is-open="isOpen" />
          </div>
        </div>
      </div>

      <transition name="nav-fade">
        <div v-show="isOpen" class="nav__contents">
          <div class="nav__items">
            <ul class="nav__none">
              <li class="nav__item" @click="changeState">
                <nuxt-link to="/home">
                  <i class="material-icons">home</i>
                  Home
                </nuxt-link>
              </li>
              <li class="nav__item" @click="changeState">
                <nuxt-link to="/profile">
                  <i class="material-icons">account_box</i>
                  Profile
                </nuxt-link>
              </li>
              <li class="nav__item" @click="changeState">
                <nuxt-link to="/skill">
                  <i class="material-icons">edit</i>
                  Skill
                </nuxt-link>
              </li>
              <li class="nav__item" @click="changeState">
                <nuxt-link to="/portfolio">
                  <i class="material-icons">folder</i>
                  Portfolio
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
import HambergerIcon from "./HamburgerIcon";

export default {
  name: "NaviBar",
  components: {
    "hamberger-icon": HambergerIcon
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    isSplashRoute() {
      // スプラッシュページの時はナビゲーションバー非表示
      return this.$route.path === "/";
    }
  },
  methods: {
    changeState() {
      // ナビゲーションバーの開閉管理
      this.isOpen = !this.isOpen;
    }
  }
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

.navbar__icon {
  height: 100%;
  width: 100%;
}

.navbar__icon--open {
  animation: anime-open 0.2s linear;
}

.navbar__icon--close {
  animation: anime-close 0.2s linear;
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
  text-align: left;
}

.nav__item,
.material-icons {
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

@keyframes anime-open {
  to {
    transform: rotate(0deg);
  }

  from {
    transform: rotate(-90deg);
  }
}

@keyframes anime-close {
  to {
    transform: rotate(0deg);
  }

  from {
    transform: rotate(90deg);
  }
}
</style>
