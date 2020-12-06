<template>
  <div>
    <div class="profile-list-item">
      <base-text>
        <!-- @slot プロフィールテキスト -->
        <slot />
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ProfoleListItem',
  components: {
    'base-text': BaseText,
  },
};
</script>

<style scoped>
/* css reset */
p {
  padding: 0;
  margin: 0;
}

/* css reset */

.profile-list-item {
  position: relative;
  width: 80%;
  padding-left: 40px;
  margin: 7px auto;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  color: dimgray;
  text-align: left;
  border: solid 1px dimgray;
}

.profile-list-item::before {
  position: absolute;
  top: 0%;
  left: 0;
  width: 30px;
  height: 30px;
  content: ' ';
  background: dimgray;
}

@media (min-width: 790px) {
  .profile-list-item {
    width: 90%;
    font-size: 23px;
  }
}
</style>
