<template>
  <div>
    <article class="contents" @click="jump(cardInfo.link ? cardInfo.link : '')">
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
  name: 'CardItem',
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
      return `${img}?fit=fillmax&fill-color=gray&w=388&h=312`;
    },
    jump(link) {
      if (link !== '') {
        location.href = link;
      }
    },
  },
};
</script>

<style scoped>
.contents {
  width: 100%;
  height: 100%;
  margin: 2vh auto;
}
</style>
