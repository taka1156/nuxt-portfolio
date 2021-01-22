<template>
  <div class="base-nav-icon base-nav-icon--extend">
    <button @click="btnClick">
      <span
        class="base-nav-icon__border base-nav-icon__top"
        :class="[isOpen ? 'base-nav-icon__top--open' : 'base-nav-icon__top--close']"
      ></span>
      <span
        class="base-nav-icon__border base-nav-icon__middle"
        :class="{ 'base-nav-icon__middle--fade': isOpen }"
      ></span>
      <span
        class="base-nav-icon__border base-nav-icon__bottom"
        :class="[
          isOpen ? 'base-nav-icon__bottom--open' : 'base-nav-icon__bottom--close'
        ]"
      ></span>
      <span class="base-nav-icon__text">
        <slot />
      </span>
    </button>
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
      requred: true
    }
  },
  methods: {
    btnClick() {
      /**
       * ボタンクリックイベント
       * @event btnClick
       * @type {event}
       */
      this.$emit('btn-click');
    }
  }
};
</script>

<style scoped>
button {
  width: 50px;
  height: 55px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border: none;
}

.base-nav-icon {
  position: relative;
  top: -5px;
  right: 0;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
}

.base-nav-icon__border {
  position: absolute;
  top: calc((100% - 2px) / 2);
  right: 0;
  left: 0;
  display: block;
  width: 70%;
  height: 2px;
  margin: auto;
  background-color: #fff;
  border-radius: 1px;
}

.base-nav-icon__top--close {
  transform: translateY(-10px);
}

.base-nav-icon__bottom--close {
  transform: translateY(10px);
}

.base-nav-icon__top--open {
  transform: rotate(-45deg);
  animation: top 0.6s ease;
}

.base-nav-icon__middle--fade {
  opacity: 0;
  animation: middle 0.6s ease;
}

.base-nav-icon__bottom--open {
  transform: rotate(45deg);
  animation: bottom 0.6s ease;
}

.base-nav-icon__text {
  display: block;
  width: 50px;
  height: 10px;
  margin: 30px auto 0 auto;
  font-size: 10px;
  color: white;
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
