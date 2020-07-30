<template>
  <div>
    <div v-if="cards.length !== 0" class="card-list">
      <card-item
        v-for="(cardInfo, index) in cards"
        :key="index"
        :card-info="cardInfo"
        class="card-list__card"
      ></card-item>
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
.card-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}

.card-list__card {
  width: 27em;
  margin: 2.6em auto;
}
</style>
