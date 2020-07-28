<template functional>
  <p class="card__text">
    {{ props.cardText }}
  </p>
</template>

<style scoped>
.card__text {
  width: 98%;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-word;
  border: solid 0.5px lightgray;
}
</style>
