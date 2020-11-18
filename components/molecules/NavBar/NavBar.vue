<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar__box">
        <base-logo>{{ logoText }}</base-logo>
        <base-btn :use-type="`none`" @btn-click="changeState">
          <nav-icon :is-open="isOpen" />
        </base-btn>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLogo from '../../atoms/BaseLogo/BaseLogo';
import NavIcon from '../../atoms/BaseNavIcon/BaseNavIcon';
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';

export default {
  name: 'NavBar',
  components: {
    'nav-icon': NavIcon,
    'base-logo': BaseLogo,
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
  background-color: rgba(12, 12, 12, 0.9);
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
