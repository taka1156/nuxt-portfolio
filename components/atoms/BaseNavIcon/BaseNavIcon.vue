<template>
  <div class="nav-icon">
    <button @click="btnClick">
      <span
        class="nav-icon__top"
        :class="[isOpen ? 'nav-icon__top--open' : 'nav-icon__top--close']"
      ></span>
      <span
        class="nav-icon__middle"
        :class="{ 'nav-icon__middle--fade': isOpen }"
      ></span>
      <span
        class="nav-icon__bottom"
        :class="[isOpen ? 'nav-icon__bottom--open' : 'nav-icon__bottom--close']"
      ></span>
    </button>
    <p class="nav-icon__text">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseNavIcon',
  props: {
    /**
     * ナビゲーションの開閉状態
     */
    isOpen: {
      type: Boolean,
      default: false,
      requred: true,
    },
  },
  methods: {
    btnClick() {
      /**
       * ボタンクリックイベント
       * @event btnClick
       * @type {event}
       */
      this.$emit('btn-click');
    },
  },
};
</script>

<style scoped>
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}

.nav-icon {
  position: relative;
  top: -5px;
  right: 0;
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

span {
  display: block;
  height: 2px;
  width: 70%;
  margin: auto;
  position: absolute;
  top: calc((100% - 2px) / 2);
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 1px;
}

.nav-icon__top--close {
  transform: translateY(-10px);
}

.nav-icon__bottom--close {
  transform: translateY(10px);
}

.nav-icon__top--open {
  animation: top 0.6s ease;
  transform: rotate(-45deg);
}

.nav-icon__middle--fade {
  animation: middle 0.6s ease;
  opacity: 0;
}

.nav-icon__bottom--open {
  animation: bottom 0.6s ease;
  transform: rotate(45deg);
}

.nav-icon__text {
  display: block;
  margin-top: 20px;
  color: white;
  font-size: 10px;
}

@keyframes top {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
}

@keyframes middle {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes bottom {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-45deg);
  }
}
</style>
