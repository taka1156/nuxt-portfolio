<template>
  <div>
    <ul class="profile-list__list">
      <li v-for="(item, index) in profile.values" :key="index">
        <profile-list-item>{{ item }}</profile-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ProfileListItem from '../../molecules/ProfileListItem/ProfileListItem';

export default {
  name: 'ProfileList',
  components: {
    'profile-list-item': ProfileListItem
  },
  props: {
    /**
     * プロフィールオブジェクト
     */
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* css rest */

.profile-list {
  margin: 0.5em auto;
}

.profile-list__list {
  width: 90%;
  margin: 1.25em auto 1.25em;
}
</style>
