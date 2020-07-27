<template functional>
  <nuxt-link :to="props.item.to" class="nav__link">
    <img :src="props.item.icon" class="nav__icon" />
    {{ props.item.name }}
  </nuxt-link>
</template>

<style scoped>
.nav__link {
  display: block;
  color: white;
  text-decoration: none;
}

.nav__icon {
  height: 50px;
  width: 50px;
}
</style>
