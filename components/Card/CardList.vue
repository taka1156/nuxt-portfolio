<template>
  <div class="CardLayout">
    <div class="cardlist">
      <div v-for="(cardInfo, index) in cards" :key="index" class="card">
        <card-layout :card-info="cardInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import CardLayout from './CardLayout';

export default {
  name: 'CardLayout',
  components: {
    'card-layout': CardLayout,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
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
