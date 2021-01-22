<template>
  <p class="base-text--extend">
    <!-- @slot テキスト -->
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseText'
};
</script>

<style scoped>
/* css reset */
p {
  padding: 0;
  margin: 0;
}

/* css reset */
</style>
