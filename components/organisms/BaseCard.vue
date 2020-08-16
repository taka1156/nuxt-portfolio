<template>
  <div>
    <card-list :cards="posts" />
  </div>
</template>

<script>
import CardList from '../molecules/CardList.vue';

export default {
  name: 'BaseCard',
  components: {
    'card-list': CardList,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style scoped></style>
