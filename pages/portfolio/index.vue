<template>
  <div class="Portfolio">
    <div class="container">
      <h1>Portfolio</h1>
      <card-list :posts="posts" />
      <client-only>
        <infinite-loading spinner="bubbles" @infinite="infiniteHandler">
          <span slot="no-more"></span>
        </infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
const POSTS_PER_PAGE = 10;
import CardList from '@/components/organisms/BaseCard';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Skill',
  components: {
    'card-list': CardList,
  },
  mixins: [meta],
  data() {
    return {
      apiInfo: {
        url: 'https://taka_portfolio.microcms.io/api/v1/portfolio',
        fields: 'title,img,content2,link',
      },
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
  head() {
    // metaタグの設定
    this.meta.title = 'Portfolio';
    this.meta.description = '自分が作った作品やサービス、プログラムを紹介します。';
    this.meta.type = 'article';
    this.meta.url = `${this.baseURL}/portfolio`;
    this.meta.image = `${this.baseURL}/img/ogp/portfolio.png`;

    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.meta.type,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.meta.url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.image,
        },
      ],
    };
  },
};
</script>
