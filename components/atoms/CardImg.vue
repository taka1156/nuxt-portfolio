<template functional>
  <img v-lazy="props.cardImg" class="card__img" />
</template>

<style scoped>
.card__img {
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

/* lazy-load */
img[lazy='loaded'] {
  animation: 1s anime-opacity both;
}
</style>
