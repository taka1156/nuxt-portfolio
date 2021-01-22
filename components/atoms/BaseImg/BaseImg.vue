<template>
  <img
    :src="imgUrl"
    :alt="imgAlt"
    class="base-img--extend"
    :class="`base-img--${size}`"
  />
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
      required: true
    },
    /**
     * 画像が表示できない時に使用する代替テキスト
     * (alt)
     */
    imgAlt: {
      type: String,
      required: true
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
        return ['sm', 'lg', 'free'].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  padding: 3px;
}

.base-img--sm {
  width: 20px;
  height: 20px;
}

.base-img--lg {
  width: 50px;
  height: 50px;
}

.base-img--free {
  height: auto;
}
</style>
