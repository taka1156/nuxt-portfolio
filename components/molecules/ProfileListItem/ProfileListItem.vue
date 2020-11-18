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
  margin: 0;
  padding: 0;
}

/* css reset */

.profile-list-item {
  position: relative;
  margin: 7px auto;
  font-size: 14px;
  font-weight: bold;
  padding-left: 40px;
  line-height: 30px;
  text-align: left;
  width: 80%;
  color: dimgray;
  border: solid 1px dimgray;
}

.profile-list-item::before {
  content: ' ';
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  background: dimgray;
  top: 0%;
}

@media (min-width: 790px) {
  .profile-list-item {
    width: 75%;
    font-size: 25px;
  }
}
</style>
