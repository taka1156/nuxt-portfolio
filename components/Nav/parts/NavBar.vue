<template>
  <div class="NavBar">
    <div class="navbar">
      <div class="navbar__box">
        <a class="navbar__brand navbar__brand--nostyle" href="/">
          Taka'sPortfolioSite
        </a>
        <div @click="changeState">
          <nav-icon :is-open="isOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavIcon from './NavIcon';

export default {
  name: 'NavBar',
  components: {
    'nav-icon': NavIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    changeState() {
      // ナビゲーションバーの開閉管理
      this.$emit('change-state');
    },
  },
};
</script>

<style scoped>
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
  display: block;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
}
</style>
