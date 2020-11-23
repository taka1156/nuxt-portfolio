<template>
  <div>
    <transition name="nav-fade">
      <div v-show="isOpen" class="nav-list">
        <ul>
          <li v-for="(item, index) in routes" :key="`nav_${index}`">
            <nav-item :nav-item="item" @change-state="changeState" />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import NavListItem from '../NavListItem/NavListItem';

export default {
  name: 'NavList',
  components: {
    'nav-item': NavListItem,
  },
  props: {
    /**
     * ナビゲーションの開閉状態
     */
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    /**
     * ナビゲーションの項目が定義された配列
     */
    routes: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    changeState() {
      /**
       * ナビゲーション開閉の状態を変化させる
       * (閉じる)
       * @event changeState
       */
      this.$emit('change-state', false);
    },
  },
};
</script>

<style scoped>
/* css reset */
ul,
li {
  list-style-type: none;
}

/* css rest */

.nav-list {
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
