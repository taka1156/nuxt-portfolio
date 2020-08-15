<template functional>
  <button class="btn" v-on="listeners">
    <slot />
  </button>
</template>

<style scoped>
/* css reset */
button {
  cursor: pointer;
  outline: none;
}
/* css reset */

.btn {
  display: block;
  font-size: 1em;
  width: 75%;
  margin: 10px auto;
  padding: 10px;
  background-color: white;
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
}

.btn:active,
.btn:hover,
.btn:focus {
  background-color: gray;
  color: white;
}
</style>
