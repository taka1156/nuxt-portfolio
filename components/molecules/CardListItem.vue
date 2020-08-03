<template>
  <div>
    <article class="card__item">
      <figure>
        <card-img :card-img="cardInfo.img.url" />
        <figcaption class="card__explain">
          <card-title :card-title="cardInfo.title" />
          <card-text :card-text="cardInfo.content2" />
        </figcaption>
      </figure>
      <card-button v-if="cardInfo.link != null" @click="jump(cardInfo)">
        {{ isGihubLink(cardInfo) ? 'WebSite' : 'GitHub' }}
      </card-button>
    </article>
  </div>
</template>

<script>
import CardTitle from '../atoms/CardTitle';
import CardImg from '../atoms/CardImg';
import CardText from '../atoms/CardText';
import CardButton from '../atoms/CardButton';

export default {
  name: 'CardListItem',
  components: {
    'card-title': CardTitle,
    'card-img': CardImg,
    'card-text': CardText,
    'card-button': CardButton,
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
    isGihubLink({ link }) {
      // githubがリンクに含まれていたらリポジトリなので表示変更
      return `${link}`.indexOf('github') === -1;
    },
  },
};
</script>

<style scoped>
/* css reset */
figure {
  margin: 0;
  padding: 0;
}

figcaption {
  margin: 0;
  padding: 0;
}
/* css reset */

.card__item {
  height: 100%;
  width: 100%;
  border: solid 0.6px lightgray;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}
</style>
