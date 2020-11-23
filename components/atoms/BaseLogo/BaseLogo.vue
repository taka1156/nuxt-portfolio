<template>
  <div>
    <a class="base-logo" href="/">
      <!-- @slot ナビゲーションバーの左側に入るテキストロゴ -->
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseLogo',
};
</script>

<style scoped>
.base-logo {
  display: block;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
}
</style>
