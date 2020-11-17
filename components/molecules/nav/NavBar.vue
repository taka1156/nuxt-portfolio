<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar__box">
        <nav-logo>{{ logoText }}</nav-logo>
        <base-btn :use-type="`none`" @btn-click="changeState">
          <nav-icon :is-open="isOpen" />
        </base-btn>
      </div>
    </div>
  </div>
</template>

<script>
import NavLogo from '../../atoms/nav/NavLogo';
import NavIcon from '../../atoms/nav/NavIcon';
import BaseBtn from '../../atoms/base/BaseBtn.vue';
export default {
  name: 'NavBar',
  components: {
    'nav-icon': NavIcon,
    'nav-logo': NavLogo,
    'base-btn': BaseBtn,
  },
  props: {
    /**
     * ロゴテキスト
     */
    logoText: {
      type: String,
      default: 'Please Setting Logo',
      required: true,
    },
    /**
     * ナビゲーションの開閉状態
     */
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    changeState() {
      /**
       * ナビゲーション開閉の状態を変化させる
       * (開く)
       * @event changeState
       */
      this.$emit('change-state', !this.isOpen);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(40, 167, 69, 0.9);
  z-index: 2;
}
.nav-bar__box {
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  margin: 0.5em auto;
}
</style>
