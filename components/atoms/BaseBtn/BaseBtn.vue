<template>
  <div>
    <button :class="`base-btn--${useType}`" @click="btnClick">
      <!-- @slot ボタンラベル -->
      <slot />
    </button>
  </div>
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
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
}

/* css reset */

.base-btn--card {
  display: block;
  width: 75%;
  padding: 10px;
  margin: 10px auto;
  font-size: 1em;
  color: gray;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
}

.base-btn--card:active,
.base-btn--card:hover,
.base-btn--card:focus {
  color: white;
  background-color: gray;
}
</style>
