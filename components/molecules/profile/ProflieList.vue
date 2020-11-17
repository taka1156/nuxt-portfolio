<template>
  <div>
    <ul class="profile-list">
      <li v-for="(item, index) in list" :key="index">
        <profile-list-item>{{ item }}</profile-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ProfileListItem from '../../atoms/profile/ProfileListItem';

export default {
  name: 'ProfileList',
  components: {
    'profile-list-item': ProfileListItem,
  },
  props: {
    /**
     * プロフィールリスト
     */
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

.profile-list {
  margin: 1.25em auto 1.25em;
  width: 80%;
}

@media (min-width: 790px) {
  .profile-list {
    width: 60%;
  }
}
</style>
