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
/* css reset */
button {
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
