<template functional>
  <button class="btn" :class="data.class || ''" v-on="listeners">
    <slot />
  </button>
</template>

<style scoped>
/* css reset */
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
}
/* css reset */

.btn {
  display: block;
  font-size: 1em;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  background-color: none;
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
}

.btn:active,
.btn:hover {
  background-color: gray;
  color: white;
}
</style>
