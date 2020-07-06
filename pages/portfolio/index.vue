<template>
  <div class="Portfolio">
    <div class="container">
      <h1>Portfolio</h1>
      <card-list :api-info="apiInfo" />
    </div>
  </div>
</template>

<script>
import CardList from '@/components/Card/CardList';

export default {
  name: 'Skill',
  components: {
    'card-list': CardList,
  },
  data() {
    return {
      apiInfo: {
        url: 'https://taka_portfolio.microcms.io/api/v1/skill',
        fields: 'title,img,content1,content2',
      },
    };
  },
};
</script>

<style scoped></style>
