<template>
  <div>
    <nuxt-link :to="item.to" class="nav__link">
      <nav-img :img="item.img" />
      <nav-text :name="item.name" />
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
    item: {
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
  color: white;
  text-decoration: none;
}
</style>
