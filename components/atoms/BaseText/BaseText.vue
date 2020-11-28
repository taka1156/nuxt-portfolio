<template>
  <p class="base-text" :class="`base-text--${useType}`">
    <!-- @slot テキスト -->
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    useType: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['none', 'nav', 'card'].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
/* css reset */
p {
  padding: 0;
  margin: 0;
}

/* css reset */

.base-text--card {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-word;
}

.base-text--nav {
  display: inline;
  color: white;
}
</style>
