<template>
  <img v-lazy="imgUrl" :alt="imgAlt" class="card-img" :class="`card-img--${size}`" />
</template>

<script>
export default {
  name: 'BaseImg',
  props: {
    /**
     * 画像のURL
     */
    imgUrl: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * 画像が表示できない時に使用する代替テキスト
     * (alt)
     */
    imgAlt: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * 画像サイズ
     * @values sm, lg
     */
    size: {
      type: String,
      default: 'sm',
      required: true,
      validator: function (value) {
        return ['sm', 'lg'].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
.card-img {
  box-sizing: border-box;
  display: block;
  padding: 5px;
  margin: 0 auto;
}

.card-img--sm {
  width: 50%;
  height: 50%;
}

.card-img--lg {
  width: 100%;
  height: 100%;
}
</style>
