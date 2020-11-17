<template>
  <div>
    <img :src="imgUrl" :alt="imgAlt" class="base-img" :class="`base-img--${size}`" />
  </div>
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
      required: true,
    },
    /**
     * 画像が表示できない時に使用する代替テキスト
     * (alt)
     */
    imgAlt: {
      type: String,
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
.base-img {
  display: block;
  padding: 3px;
}
.base-img--lg {
  height: 50px;
  width: 50px;
}

.base-img--sm {
  height: 20px;
  width: 20px;
}
</style>
