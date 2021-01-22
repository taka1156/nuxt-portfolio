<template>
  <div>
    <section class="profile-list">
      <base-title>{{ profile.title }}</base-title>
      <ul class="profile-list__list">
        <li v-for="(item, index) in profile.values" :key="index">
          <profile-list-item>{{ item }}</profile-list-item>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import BaseTitle from '../../atoms/BaseTitle/BaseTitle';
import ProfileListItem from '../../molecules/ProfileListItem/ProfileListItem';

export default {
  name: 'ProfileList',
  components: {
    'base-title': BaseTitle,
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
