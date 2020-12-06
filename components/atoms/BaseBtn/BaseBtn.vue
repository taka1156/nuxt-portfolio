<template>
  <div>
    <button class="base-btn--extend" @click="btnClick">
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
}

/* css reset */
</style>
