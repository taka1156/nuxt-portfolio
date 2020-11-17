<template>
  <div>
    <article class="card-list-item">
      <figure>
        <card-img
          :img-url="card.img.url"
          :img-alt="`${card.title}の画像`"
          :size="`${card.link == null ? 'sm' : 'lg'}`"
        />
        <div class="card-list-item__border" />
        <figcaption>
          <card-title>{{ card.title }}</card-title>
          <base-text :use-type="`card`">{{ card.content2 }}</base-text>
        </figcaption>
      </figure>
      <base-btn
        v-if="card.link != null"
        :use-type="`card`"
        @btn-click="$emit('jump', card)"
      >
        {{ isGithubRepo(card) ? 'GitHub' : 'WebSite' }}
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
    /**
     * カードリスト１つ分
     */
    card: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    isGithubRepo({ link }) {
      /**
       * githubリポジトリかどうかを判定する処理
       */
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
