<template functional>
  <img :src="props.navImg" :alt="`${props.imgAlt}`" class="nav__icon" />
</template>

<style scoped>
.nav__icon {
  display: block;
  margin: 5px;
  height: 50px;
  width: 50px;
}
</style>
