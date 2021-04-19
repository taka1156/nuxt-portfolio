<template>
  <div>
    <div class="top">
      <base-heading1> Welcome to Taka's Portfolio </base-heading1>
    </div>
  </div>
</template>

<script>
import BaseHeading1 from '@/components/atoms/BaseHeading1/BaseHeading1';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Top',
  components: {
    BaseHeading1
  },
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
::v-deep .base-heading1--extend {
  font-size: 40px;
  border-bottom: 2.5px solid lightgray;
}

.top {
  width: 95%;
  margin: 40vh auto 0;
  text-align: center;
}
</style>
