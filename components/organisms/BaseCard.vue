<template>
  <div>
    <card-list :cards="posts" />
    <client-only>
      <infinite-loading spinner="bubbles" @infinite="infiniteHandler">
        <span slot="no-more"></span>
      </infinite-loading>
    </client-only>
  </div>
</template>

<script>
const POSTS_PER_PAGE = 10;
import CardList from '../molecules/CardList.vue';

export default {
  name: 'BaseCard',
  components: {
    'card-list': CardList,
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

<style scoped></style>
