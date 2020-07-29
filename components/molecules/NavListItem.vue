<template>
  <div>
    <nuxt-link :to="navItem.to" class="nav__link">
      <nav-img :nav-img="navItem.img" />
      <nav-text :nav-text="navItem.name" />
    </nuxt-link>
  </div>
</template>

<script>
import NavImg from '../atoms/NavImg';
import NavText from '../atoms/NavText';

export default {
  name: 'NavListItem',
  components: {
    'nav-img': NavImg,
    'nav-text': NavText,
  },
  props: {
    navItem: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style scoped>
.nav__link {
  display: block;
  text-decoration: none;
}
</style>
