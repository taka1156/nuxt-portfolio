<template>
  <div>
    <div v-if="cards.length !== 0" class="card-list">
      <card-list-item
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        class="card-list__card"
        @jump="jump"
      />
    </div>
  </div>
</template>

<script>
import CardListItem from '../../molecules/card/CardListItem';

export default {
  name: 'CardList',
  components: {
    'card-list-item': CardListItem,
  },
  props: {
    /**
     * カードリスト
     */
    cards: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    /**
     * 制作物関連サイトに移動
     * (githubやwebサイトのリンク先)
     */
    jump(card = null) {
      if (card == null || card.link == null) {
        return;
      }
      location.assign(card.link);
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
  width: 28em;
  margin: 0 auto 2em;
}
</style>
