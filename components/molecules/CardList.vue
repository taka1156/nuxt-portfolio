<template>
  <div>
    <div v-if="cards.length !== 0" class="cardlist">
      <div v-for="(cardInfo, index) in cards" :key="index" class="card">
        <card-item :card-info="cardInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import CardListItem from '../molecules/CardListItem';

export default {
  name: 'CardList',
  components: {
    'card-item': CardListItem,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
      required: true,
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
  margin: 2em auto;
  border: solid 0.6px lightgray;
  border-radius: 1%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}
</style>
