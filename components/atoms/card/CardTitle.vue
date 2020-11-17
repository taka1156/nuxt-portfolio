<template>
  <div>
    <h2 class="card-title">
      <!-- @slot カードタイトル -->
      <slot />
    </h2>
  </div>
</template>

<style scoped>
.card-title {
  font-size: 1.3em;
  line-height: 0em;
  text-align: center;
}
</style>
