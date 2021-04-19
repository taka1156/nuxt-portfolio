<template>
  <div class="contribution-box">
    <base-img :size="`free`" :img-url="imgUrl" :img-alt="imgAlt" />
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ContributionBox',
  components: {
    BaseImg
  },
  props: {
    /**
     * 画像のURL
     */
    imgUrl: {
      type: String,
      required: true
    },
    /**
     * 画像が表示できない時に使用する代替テキスト
     * (alt)
     */
    imgAlt: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-img--extend {
  width: 900px;
  object-fit: cover;
}

/* gh-chart */
.contribution-box {
  width: 85%;
  margin: 0 auto;
  overflow-x: scroll;
  border: 0.5px solid gray;
  border-radius: 5px;
}
</style>
