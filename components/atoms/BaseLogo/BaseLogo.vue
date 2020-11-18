<template>
  <div>
    <a class="nav-logo" href="/">
      <!-- @slot ナビゲーションバーの左側に入るテキストロゴ -->
      <slot />
    </a>
  </div>
</template>

<style scoped>
.nav-logo {
  display: block;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
}
</style>
