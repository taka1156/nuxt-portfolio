<template>
  <div>
    <base-heading1> Portfolio </base-heading1>
    <card-list :cards="posts" />
  </div>
</template>

<script>
import BaseHeading1 from '@/components/atoms/BaseHeading1/BaseHeading1';
import CardList from '@/components/organisms/CardList/CardList';
import meta from 'assets/js/mixin/meta.mixin.js';
const CONTENT_MAX = 20;

export default {
  name: 'Portfolio',
  components: {
    BaseHeading1,
    CardList
  },
  mixins: [meta],
  async asyncData({ $axios, payload }) {
    if (payload != null) {
      return { posts: payload };
    }
    const api = 'https://taka_portfolio.microcms.io/api/v1';
    const { contents } = await $axios.$get(`${api}/portfolio`, {
      params: { fields: 'title,img,content2,link', limit: CONTENT_MAX },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });
    return { posts: contents };
  },
  data() {
    return {
      posts: []
    };
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
          content: this.meta.type
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.meta.url
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.image
        },
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        }
      ]
    };
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 0 0 10px;
  border-bottom: 2.5px solid lightgray;
}
</style>
