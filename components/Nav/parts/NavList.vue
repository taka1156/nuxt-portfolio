<template>
  <div class="NavList">
    <transition name="nav-fade">
      <div v-show="isOpen" class="nav__list">
        <ul class="nav__items">
          <li
            v-for="(item, index) in routers"
            :key="index"
            class="nav__item"
            @click="changeState"
          >
            <nuxt-link :to="item.to" class="nav__link">
              <img :src="item.icon" class="nav__icon" />
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    routers: {
      type: Array,
      default: () => [],
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
.nav__list {
  display: flex;
  justify-content: center;
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
  list-style-type: none;
  padding: 0;
}

.nav__item {
  display: block;
  font-size: 50px;
  text-align: left;
  color: white;
}

.nav__link {
  display: block;
  color: white;
  text-decoration: none;
}

.nav__icon {
  height: 50px;
  width: 50px;
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
