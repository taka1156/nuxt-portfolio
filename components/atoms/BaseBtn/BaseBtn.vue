<template>
  <button class="base-btn" :class="`base-btn--${useType}`" @click="btnClick">
    <!-- @slot ボタンラベル -->
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    useType: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['none', 'card'].indexOf(value) !== -1;
      },
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
/* css reset */
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}

/* css reset */

.base-btn--card {
  display: block;
  font-size: 1em;
  width: 75%;
  margin: 10px auto;
  padding: 10px;
  background-color: white;
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
}

.base-btn--card:active,
.base-btn--card:hover,
.base-btn--card:focus {
  background-color: gray;
  color: white;
}
</style>
