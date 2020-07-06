<template>
  <div class="Skill">
    <div class="container">
      <h1>Skill</h1>
      <card-list :cards="skills" />
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
  async asyncData({ $axios }) {
    const MCMS_SKILL = 'https://taka_portfolio.microcms.io/api/v1/skill';
    const OPTION = '?fields=title,img,content1,content2';
    const { contents } = await $axios.$get(MCMS_SKILL + OPTION, {
      headers: { 'X-API-KEY': process.env.MICRO_CMS },
    });
    return { skills: contents };
  },
  data() {
    return {
      skills: [],
    };
  },
};
</script>
