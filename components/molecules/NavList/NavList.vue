<template>
  <div>
    <transition name="nav-fade">
      <div v-show="isOpen" class="nav-list">
        <ul>
          <li
            v-for="(item, index) in routes"
            :key="`nav_${index}`"
            @click="changeState"
          >
            <nav-list-item :nav-item="item" @change-state="changeState" />
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
    'nav-list-item': NavListItem
  },
  props: {
    /**
     * ナビゲーションの開閉状態
     */
    isOpen: {
      type: Boolean,
      required: true
    },
    /**
     * ナビゲーションの項目が定義された配列
     */
    routes: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeState() {
      /**
       * ナビゲーション開閉の状態を変化させる
       * (閉じる)
       * @event changeState
       */
      this.$emit('change-state', false);
    }
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  list-style-type: none;
}

/* css reset */
.nav-list {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
