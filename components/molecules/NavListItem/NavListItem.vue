<template>
  <div class="nav-item" @click="changeState">
    <nuxt-link :to="navItem.to" class="nav-item__link">
      <base-img
        :size="`lg`"
        :img-url="navItem.img"
        :img-alt="`${navItem.name}の画像`"
      />
      <base-text :use-type="`nav`">{{ navItem.name }}</base-text>
    </nuxt-link>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'NavListItem',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText,
  },
  props: {
    /**
     * ナビゲーションの１項目分
     */
    navItem: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    changeState() {
      /**
       * ナビゲーション開閉の状態を変化させる
       * (NavListにイベント伝搬)
       * @event changeState
       */
      this.$emit('change-state');
    },
  },
};
</script>

<style scoped>
::v-deep .base-text--extend {
  display: inline;
  color: white;
}
.nav-item {
  display: block;
  font-size: 50px;
  text-align: left;
}

.nav-item__link {
  display: flex;
  width: 100%;
  text-decoration: none;
}
</style>
