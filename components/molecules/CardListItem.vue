<template>
  <div>
    <article
      class="card__contents"
      :class="{ 'card__contents--clickable': cardInfo.link }"
      @click="jump(cardInfo)"
    >
      <card-title :card-title="cardInfo.title" />
      <figure>
        <card-img :card-img="fomatImg(cardInfo.img.url)" />
        <figcaption>
          <card-text :card-text="cardInfo.content1" />
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
    fomatImg(img) {
      if (img.indexOf('placehold') !== -1) {
        return img;
      }
      return `${img}?fit=fillmax&fill-color=gray&w=388&h=312`;
    },
    jump({ link }) {
      if (link != null) {
        location.href = link;
      }
    },
  },
};
</script>

<style scoped>
.card__contents {
  display: block;
  width: 100%;
  height: 100%;
  margin: 2vh auto;
}

.card__contents--clickable {
  cursor: pointer;
}
</style>
