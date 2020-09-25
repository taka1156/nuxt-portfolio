<template functional>
  <p class="base-text" :class="data.staticClass || ''">
    <slot />
  </p>
</template>

<style scoped>
/* css reset */
p {
  margin: 0;
  padding: 0;
}

/* css reset */

.base-text {
  padding: 5px;
}

.base-text--card {
  display: block;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-word;
  box-sizing: border-box;
}

.base-text--nav {
  display: inline;
  color: white;
}
</style>
