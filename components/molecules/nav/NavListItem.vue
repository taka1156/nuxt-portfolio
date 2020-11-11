<template>
  <div>
    <li class="nav-list-item" @click="$emit('change-state')">
      <nuxt-link :to="navItem.to" class="nav-list-item__link">
        <nav-img :nav-img="navItem.img" :img-alt="`${navItem.name}の画像`" />
        <base-text class="base-text--nav">{{ navItem.name }}</base-text>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
import NavImg from '../../atoms/nav/NavImg';
import BaseText from '../../atoms/base/BaseText';

export default {
  name: 'NavListItem',
  components: {
    'nav-img': NavImg,
    'base-text': BaseText,
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
.nav-list-item {
  display: block;
  font-size: 50px;
  text-align: left;
  color: white;
}

.nav-list-item__link {
  display: flex;
  width: 100%;
  text-decoration: none;
}
</style>
