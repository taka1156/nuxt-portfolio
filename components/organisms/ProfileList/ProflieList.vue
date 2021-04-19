<template>
  <div>
    <ul class="profile-list">
      <li v-for="item in profile.values" :key="item">
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
    ProfileListItem
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
  width: 90%;
  margin: 1.25em auto 1.25em;
}
</style>
