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
    'profile-list-item': ProfileListItem,
  },
  props: {
    /**
     * プロフィールオブジェクト
     */
    profile: {
      type: Object,
      default: () => {},
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
  margin: 0.5em auto 4em;
}

.profile-list__list {
  margin: 1.25em auto 1.25em;
  width: 80%;
}

@media (min-width: 790px) {
  .profile-list {
    width: 60%;
  }
}
</style>
