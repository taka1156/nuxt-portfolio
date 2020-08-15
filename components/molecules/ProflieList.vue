<template>
  <div>
    <ul class="profilelist">
      <profile-list-item
        v-for="(item, index) in list"
        :key="index"
        :profile-text="item"
      ></profile-list-item>
    </ul>
  </div>
</template>

<script>
import ProfileListItem from '../atoms/ProfileListItem.vue';

export default {
  name: 'ProfileList',
  components: {
    'profile-list-item': ProfileListItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style scoped>
/* css reset */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
/* css rest */

.profilelist {
  margin: 1.25em auto 1.25em;
  width: 80%;
}

@media (min-width: 790px) {
  .profilelist {
    width: 60%;
  }
}
</style>
