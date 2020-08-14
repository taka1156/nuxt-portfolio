<template>
  <div>
    <article class="card__item">
      <figure>
        <card-img
          :card-img="cardInfo.img.url"
          :img-alt="`${cardInfo.title}の画像`"
        />
        <figcaption class="card__explain">
          <card-title :card-title="cardInfo.title" />
          <card-text :card-text="cardInfo.content2" />
        </figcaption>
      </figure>
      <card-button v-if="cardInfo.link != null" @click="jump(cardInfo)">
        {{ isGithubRepo(cardInfo) ? 'GitHub' : 'WebSite' }}
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
    isGithubRepo({ link }) {
      // githubがリンクに含まれていたらリポジトリなので表示変更
      if (`${link}`.indexOf('github.io') !== -1) {
        // github pagesを利用したサイト
        return false;
      } else if (`${link}`.indexOf('github') !== -1) {
        // github リポジトリ
        return true;
      } else {
        // webサイト
        return false;
      }
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
