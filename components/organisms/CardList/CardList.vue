<template>
  <div>
    <div v-if="cards.length !== 0" class="card-list">
      <card-list-item
        v-for="card in cards"
        :key="card.name"
        :card="card"
        class="card-list__card"
      />
    </div>
  </div>
</template>

<script>
import CardListItem from '../../molecules/CardListItem/CardListItem';

export default {
  name: 'CardList',
  components: {
    CardListItem
  },
  props: {
    /**
     * カードリスト
     */
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}

.card-list__card {
  width: 25em;
  margin: 0 auto 2em;
}
</style>
