<template>
  <div>
    <article class="card-list-item">
      <figure>
        <base-img-lazy
          :img-url="card.img.url"
          :img-alt="`${card.title}の画像`"
          :size="`${card.link == null ? 'sm' : 'lg'}`"
        />
        <div class="card-list-item__border" />
        <figcaption class="card-list-item__caption">
          <base-title>{{ card.title }}</base-title>
          <base-text>{{ card.content2 }}</base-text>
        </figcaption>
      </figure>
      <base-link v-if="card.link != null" :route-to="card.link" :is-target="true">
        {{ isGithubRepo(card) ? 'GitHub' : 'WebSite' }}
      </base-link>
    </article>
  </div>
</template>

<script>
import BaseTitle from '../../atoms/BaseTitle/BaseTitle';
import BaseText from '../../atoms/BaseText/BaseText';
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseImgLazy from '../../atoms/BaseImgLazy/BaseImgLazy';

export default {
  name: 'CardListItem',
  components: {
    'base-title': BaseTitle,
    'base-text': BaseText,
    'base-link': BaseLink,
    'base-img-lazy': BaseImgLazy
  },
  props: {
    /**
     * カードリスト１つ分
     */
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    isGithubRepo({ link }) {
      /**
       * githubリポジトリかどうかを判定する処理
       */
      return `${link}`.includes('github') && !`${link}`.includes('github.io');
    }
  }
};
</script>

<style scoped>
/* css reset */
figure {
  padding: 0;
  margin: 0;
}

figcaption {
  padding: 0;
  margin: 0;
}

/* css reset */
::v-deep .base-text--extend {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-word;
}

::v-deep .base-link--extend {
  display: block;
  width: 75%;
  padding: 10px;
  margin: 10px auto;
  font-size: 1em;
  color: gray;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
}

::v-deep .base-link--extend:active,
::v-deep .base-link--extend:hover,
::v-deep .base-link--extend:focus {
  color: white;
  background-color: gray;
}

::v-deep .base-img--extend {
  padding: 3px;
  margin: 0 auto;
}

.card-list-item {
  width: 100%;
  height: 100%;
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
