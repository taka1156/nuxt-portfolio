<template>
  <div class="CardLayout">
    <div class="cardlist">
      <div v-for="(cardInfo, index) in posts" :key="index" class="card">
        <card-layout :card-info="cardInfo" />
      </div>
    </div>
    <infinite-loading spinner="bubbles" @infinite="infiniteHandler">
      <span slot="no-more"></span>
    </infinite-loading>
  </div>
</template>

<script>
const POSTS_PER_PAGE = 10;
import CardLayout from './CardLayout';

export default {
  name: 'CardLayout',
  components: {
    'card-layout': CardLayout,
  },
  props: {
    apiInfo: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      page: 0,
      posts: [],
      isLoaded: false,
    };
  },
  computed: {
    pageIndex() {
      return this.page * POSTS_PER_PAGE;
    },
  },
  methods: {
    async infiniteHandler($state) {
      if (!this.isLoaded) {
        const OPTIONS = {
          fields: this.apiInfo.fields,
          limit: POSTS_PER_PAGE,
          offset: this.pageIndex,
        };
        // コンテンツの取得
        const { contents } = await this.$axios.$get(this.apiInfo.url, {
          params: { ...OPTIONS },
          headers: { 'X-API-KEY': process.env.MICRO_CMS },
        });
        // ページング
        if (contents.length > 0) {
          this.page++;
          this.posts.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoaded = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.cardlist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}

.card {
  width: 27rem;
  cursor: pointer;
  margin: 2em auto;
  border: solid 0.6px lightgray;
  border-radius: 1%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}
</style>
