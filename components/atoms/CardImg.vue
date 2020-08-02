<template functional>
  <img v-lazy="props.cardImg" class="card__img" />
</template>

<style scoped>
/* css reset */
img {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* css reset */

.card__img {
  display: block;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

/* lazy-load */
img[lazy='loaded'] {
  animation: 1s anime-opacity both;
}
</style>
