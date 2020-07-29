<template functional>
  <img v-lazy="props.cardImg" class="card__img" />
</template>

<style scoped>
.card__img {
  height: 80%;
  width: 100%;
  vertical-align: bottom;
}

/* lazy-load */
img[lazy='loaded'] {
  animation: 1s anime-opacity both;
}
</style>
