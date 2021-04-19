<template>
  <div>
    <div class="nav-item">
      <base-link :route-to="navItem.to">
        <base-img
          :size="`lg`"
          :img-url="navItem.img"
          :img-alt="`${navItem.name}の画像`"
        />
        <base-text>{{ navItem.name }}</base-text>
      </base-link>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';
import BaseLink from '../../atoms/BaseLink/BaseLink';

export default {
  name: 'NavListItem',
  components: {
    BaseImg,
    BaseText,
    BaseLink
  },
  props: {
    /**
     * ナビゲーションの１項目分
     */
    navItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  color: white;
}

::v-deep .base-link--extend {
  display: flex;
  width: 100%;
}

.nav-item {
  display: block;
  font-size: 50px;
  text-align: left;
}
</style>
