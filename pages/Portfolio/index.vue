<template>
  <div class="Portfolio">
    <div class="container">
      <h1>Portfolio</h1>
      <card-list :cards="portfolios" />
    </div>
  </div>
</template>

<script>
import CardList from "@/components/Card/CardList";

export default {
  name: "Portfolio",
  components: {
    "card-list": CardList
  },
  data() {
    return {
      portfolios: []
    };
  },
  async asyncData({ $axios }) {
    const MICRO_CMS_PORTFOLIO = "https://taka_portfolio.microcms.io/api/v1/portfolio";
    const OPTION = "?fields=title,img,content1,content2,link";
    const { contents } = await $axios.$get(MICRO_CMS_PORTFOLIO + OPTION, {
      headers: { "X-API-KEY": process.env.MICRO_CMS }
    });
    return { portfolios: contents };
  }
};
</script>

<style scoped></style>
