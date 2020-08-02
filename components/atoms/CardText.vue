<template functional>
  <p class="card__text">
    {{ props.cardText }}
  </p>
</template>

<style scoped>
/* css reset */
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* css reset */

.card__text {
  display: block;
  height: 200px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  text-align: left;
  word-wrap: break-word;
  box-sizing: border-box;
}
</style>
