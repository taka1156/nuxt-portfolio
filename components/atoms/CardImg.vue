<template functional>
  <img v-lazy="props.cardImg" class="card__img" />
</template>

<style scoped>
.card__img {
  display: block;
  height: 50%;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  border: 5px double lightgray;
}

/* lazy-load */
img[lazy='loaded'] {
  animation: 1s anime-opacity both;
}
</style>
