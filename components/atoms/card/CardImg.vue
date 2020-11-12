<template functional>
  <img
    v-lazy="props.cardImg"
    :alt="props.imgAlt"
    class="card-img"
    :class="[props.isPortfolio ? 'card-img--lg' : 'card-img--sm']"
  />
</template>

<style scoped>
.card-img {
  display: block;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
}

.card-img--sm {
  height: 50%;
  width: 50%;
}

.card-img--lg {
  height: 100%;
  width: 100%;
}
</style>
