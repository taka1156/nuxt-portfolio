<template>
  <div class="Portfolio">
    <div class="container">
      <h1>Portfolio</h1>
      <card-list :cards="portfolios" />
    </div>
  </div>
</template>

<script>
import CardList from '@/components/Card/CardList';

export default {
  name: 'Portfolio',
  components: {
    'card-list': CardList,
  },
  async asyncData({ $axios }) {
    const MCMS_PORTFOLIO = 'https://taka_portfolio.microcms.io/api/v1/portfolio';
    const { contents } = await $axios.$get(MCMS_PORTFOLIO, {
      params: { fields: 'title,img,content1,content2,link' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS },
    });
    return { portfolios: contents };
  },
  data() {
    return {
      portfolios: [],
    };
  },
};
</script>

<style scoped></style>
