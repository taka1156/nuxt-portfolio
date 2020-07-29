<template>
  <div class="Portfolio">
    <div class="container">
      <h1>Portfolio</h1>
      <card-list :api-info="apiInfo" />
    </div>
  </div>
</template>

<script>
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
        fields: 'title,img,content1,content2,link',
      },
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
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title,
        },
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
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.image,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
