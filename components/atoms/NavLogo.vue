<template functional>
  <a class="nav__logo" href="/">
    <slot />
  </a>
</template>

<style scoped>
.nav__logo {
  display: block;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
}
</style>
