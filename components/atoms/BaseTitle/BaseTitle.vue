<template>
  <div>
    <h2 class="base-title">
      <!-- @slot タイトル -->
      <slot />
    </h2>
  </div>
</template>

<style scoped>
.base-title {
  font-size: 1.3em;
  line-height: 0em;
  text-align: center;
}
</style>
