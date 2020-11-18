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
  display: block;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
}

.card-img--sm {
  height: 50%;
  width: 50%;
}

.card-img--lg {
  height: 100%;
  width: 100%;
}
</style>
