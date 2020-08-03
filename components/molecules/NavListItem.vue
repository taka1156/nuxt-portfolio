<template>
  <div>
    <li class="nav__item" @click="$emit('change-state')">
      <nuxt-link :to="navItem.to" class="nav__link">
        <nav-img :nav-img="navItem.img" />
        <nav-text :nav-text="navItem.name" />
      </nuxt-link>
    </li>
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
.nav__item {
  display: block;
  font-size: 50px;
  text-align: left;
  color: white;
}

.nav__link {
  display: flex;
  width: 100%;
  text-decoration: none;
}
</style>
