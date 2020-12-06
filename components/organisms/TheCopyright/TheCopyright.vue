<template>
  <div>
    <div class="the-copyright">
      <base-text>
        &copy; 2019 taka1156 <br />使用素材、プライバシーポリシー等は
        <a :href="articleUrl" target="_blank">コチラ</a>
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'TheCopyright',
  components: {
    'base-text': BaseText,
  },
  data() {
    return {
      articleUrl: 'https://policy.taka1156.site/',
    };
  },
};
</script>

<style scoped>
::v-deep .base-text--extend,
a {
  color: white;
}

.the-copyright {
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: left;
  background-color: rgba(12, 12, 12, 0.9);
}
</style>
