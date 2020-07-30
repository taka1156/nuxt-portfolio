<template>
  <div>
    <article
      class="card__item"
      :class="{ 'card__item--clickable': cardInfo.link }"
      @click="jump(cardInfo)"
    >
      <card-title :card-title="cardInfo.title" />
      <figure>
        <card-img :card-img="cardInfo.img.url" />
        <figcaption>
          <card-text :card-text="cardInfo.content2" />
        </figcaption>
      </figure>
    </article>
  </div>
</template>

<script>
import CardTitle from '../atoms/CardTitle';
import CardImg from '../atoms/CardImg';
import CardText from '../atoms/CardText';

export default {
  name: 'CardListItem',
  components: {
    'card-title': CardTitle,
    'card-img': CardImg,
    'card-text': CardText,
  },
  props: {
    cardInfo: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    jump({ link }) {
      if (link != null) {
        location.href = link;
      }
    },
  },
};
</script>

<style scoped>
.card__item {
  height: 100%;
  width: 100%;
  border: solid 0.6px lightgray;
  border-radius: 1%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}

.card__item--clickable {
  cursor: pointer;
}
</style>
