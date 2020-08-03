<template functional>
  <p class="card__text">
    {{ props.cardText }}
  </p>
</template>

<style scoped>
.card__text {
  display: block;
  height: 140px;
  width: 100%;
  margin: 0 auto;
  padding: 5px;
  text-align: left;
  word-wrap: break-word;
  box-sizing: border-box;
  border: 1px solid red;
}
</style>
