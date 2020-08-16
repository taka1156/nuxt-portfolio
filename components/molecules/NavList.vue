<template>
  <div>
    <transition name="nav-fade">
      <div v-show="isOpen" class="nav__list">
        <ul>
          <nav-item
            v-for="(item, index) in routers"
            :key="index"
            class="nav__item"
            :nav-item="item"
            @change-state="$emit('change-state')"
          />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import NavListItem from './NavListItem';

export default {
  name: 'NavList',
  components: {
    'nav-item': NavListItem,
  },
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
};
</script>

<style scoped>
/* css reset */
ul {
  margin: 0px;
  padding: 0px;
}
/* css reset */

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
