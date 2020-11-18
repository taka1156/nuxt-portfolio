<template>
  <div>
    <article class="card-list-item">
      <figure>
        <base-card-img
          :img-url="card.img.url"
          :img-alt="`${card.title}の画像`"
          :size="`${card.link == null ? 'sm' : 'lg'}`"
        />
        <div class="card-list-item__border" />
        <figcaption class="card-list-item__caption">
          <base-title>{{ card.title }}</base-title>
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
import BaseText from '../../atoms/BaseText/BaseText';
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import BaseTitle from '../../atoms/BaseTitle/BaseTitle';
import BaseCardImg from '../../atoms/BaseCardImg/BaseCardImg';

export default {
  name: 'CardListItem',
  components: {
    'base-title': BaseTitle,
    'base-text': BaseText,
    'base-btn': BaseBtn,
    'base-card-img': BaseCardImg,
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

.card-list-item__caption {
  padding: 10px;
}
</style>
