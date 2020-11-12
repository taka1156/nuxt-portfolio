<template>
  <div>
    <article class="card-list-item">
      <figure>
        <card-img
          :card-img="cardInfo.img.url"
          :img-alt="`${cardInfo.title}の画像`"
          :is-portfolio="cardInfo.link != null"
        />
        <div class="card-list-item__border" />
        <figcaption>
          <card-title>{{ cardInfo.title }}</card-title>
          <base-text class="base-text--card">{{ cardInfo.content2 }}</base-text>
        </figcaption>
      </figure>
      <base-btn v-if="cardInfo.link != null" @click="$emit('jump', cardInfo)">
        {{ isGithubRepo(cardInfo) ? 'GitHub' : 'WebSite' }}
      </base-btn>
    </article>
  </div>
</template>

<script>
import BaseText from '../../atoms/base/BaseText';
import BaseBtn from '../../atoms/base/BaseBtn';
import CardTitle from '../../atoms/card/CardTitle';
import CardImg from '../../atoms/card/CardImg';

export default {
  name: 'CardListItem',
  components: {
    'card-title': CardTitle,
    'card-img': CardImg,
    'base-text': BaseText,
    'base-btn': BaseBtn,
  },
  props: {
    cardInfo: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    isGithubRepo({ link }) {
      // githubがリンクに含まれてる、かつgithub.ioではないならリポジトリなので表示変更
      return `${link}`.includes('github') && !`${link}`.includes('github.io');
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

.card-list-item {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border: solid 0.6px rgb(211, 211, 211);
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}

.card-list-item__border {
  border-bottom: 1px dashed black;
}
</style>
