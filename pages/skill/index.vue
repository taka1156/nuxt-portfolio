<template>
  <div class="Skill">
    <div class="container">
      <h1>Skill</h1>
      <card-list :api-info="apiInfo" />
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
  data() {
    return {
      apiInfo: {
        url: 'https://taka_portfolio.microcms.io/api/v1/skill',
        fields: 'title,img,content1,content2,link',
      },
    };
  },
};
</script>
