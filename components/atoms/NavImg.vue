<template functional>
  <img :src="props.navImg" :alt="`${props.imgAlt}`" class="nav-img" />
</template>

<style scoped>
.nav-img {
  display: block;
  margin: 5px;
  height: 50px;
  width: 50px;
}
</style>
