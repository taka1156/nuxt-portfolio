<template functional>
  <button class="btn" :class="data.class || ''" v-on="listeners">
    <slot />
  </button>
</template>

<style scoped>
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
.btn:hover {
  background-color: gray;
  color: white;
}
</style>
