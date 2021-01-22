<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar__box">
        <base-link :route-to="`/`">{{ logoText }}</base-link>
        <base-nav-icon :is-open="isOpen" @btn-click="changeState">
          {{ isOpen ? 'CLOSE' : 'NAVI' }}
        </base-nav-icon>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseNavIcon from '../../atoms/BaseNavIcon/BaseNavIcon';

export default {
  name: 'NavBar',
  components: {
    'base-nav-icon': BaseNavIcon,
    'base-link': BaseLink
  },
  props: {
    /**
     * ロゴテキスト
     */
    logoText: {
      type: String,
      required: true
    },
    /**
     * ナビゲーションの開閉状態
     */
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changeState() {
      /**
       * ナビゲーション開閉の状態を変化させる
       * (開く)
       * @event changeState
       */
      this.$emit('change-state', !this.isOpen);
    }
  }
};
</script>

<style scoped>
::v-deep .base-link--extend {
  display: block;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
  color: white;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  background-color: rgba(12, 12, 12, 0.9);
}

.nav-bar__box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 85%;
  margin: 0.5em auto;
}
</style>
