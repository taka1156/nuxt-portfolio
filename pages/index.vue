<template>
  <div>
    <div class="logo">
      <h1 class="logo__title">Welcome to Taka's Portfolio</h1>
      <div class="logo__line" />
    </div>
  </div>
</template>

<script>
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Home',
  mixins: [meta],
  head() {
    // metaタグの設定
    this.meta.title = 'Top';

    return {
      title: this.meta.title
    };
  }
};
</script>

<style scoped>
.logo {
  width: 95%;
  margin: 35vh auto 0;
  text-align: center;
}

.logo__title {
  font-size: 40px;
}

.logo__line {
  width: 100%;
  margin-top: 10px;
  border: 1px solid black;
}
</style>
