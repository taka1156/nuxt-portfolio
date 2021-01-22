<template>
  <ul class="sns-icons">
    <li v-for="(sns, index) in snsIcons" :key="`sns_${index}`">
      <sns-icon :sns="sns" />
    </li>
  </ul>
</template>

<script>
import SnsIcon from '../../molecules/SnsIcon/SnsIcon';

export default {
  name: 'SnsIcons',
  components: {
    'sns-icon': SnsIcon
  },
  props: {
    snsIcons: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  padding: 0;
  margin: 0;
}

li {
  display: block;
}

/* css reset */

.sns-icons {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
}
</style>
