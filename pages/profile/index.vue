<template>
  <div class="Profile">
    <div class="container">
      <h1>Profile</h1>

      <div class="jumbotron">
        <img class="profile__icon" src="@/assets/img/prof.png" />

        <section class="contents">
          <h2 class="contents__title">最近やっていること</h2>
          <proflie-list :list="experiences" />
        </section>

        <section class="contents">
          <h2 class="contents__title">これからやりたいこと</h2>
          <proflie-list :list="wants" />
        </section>

        <section class="contents">
          <h2 class="contents__title">よく使うツール</h2>
          <proflie-list :list="tools" />
        </section>

        <section class="contents">
          <h2 class="contents__title">資格</h2>
          <proflie-list :list="exams" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import meta from 'assets/js/mixin/meta.mixin.js';
import ProfileList from '@/components/molecules/ProflieList';

export default {
  name: 'Profile',
  components: {
    'proflie-list': ProfileList,
  },
  mixins: [meta],
  data() {
    return {
      experiences: [
        'JS(ES6)について学習。',
        'FireBaseを利用した開発',
        'Laravelの学習',
      ],
      wants: [
        'TypeScriptの学習',
        'Laravel+Vueでサービスを作る',
        'AWSなどインフラ周りの学習',
        'CSS/SASSの学習',
      ],
      tools: ['Homebrew', 'Git', 'VScode', 'Docker', 'LaraDock', 'phpMyAdmin'],
      exams: [
        'ITパスポート',
        '情報セキュリティマネジメント',
        '基本情報技術者',
        '応用情報技術者',
      ],
    };
  },
  head() {
    // metaタグの設定
    this.meta.title = 'Profile';
    this.meta.description = '最近行っていることや保有資格について紹介します。';
    this.meta.type = 'article';
    this.meta.url = `${this.baseURL}/profile`;
    this.meta.image = `${this.baseURL}/img/ogp/profile.png`;

    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.meta.type,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.meta.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.image,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* css reset */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
/* css rest */

.jumbotron {
  margin: 3rem auto;
  width: 90%;
  border-radius: 5px;
  border: 3px solid #d3d3d3;
  background-color: white;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}

.profile__icon {
  height: 20%;
  width: 20%;
  margin: 1.25em auto 1.25em;
}

.contents {
  margin: 0.5em auto 4em;
}

.contents__title {
  font-size: 1.5em;
}

@media (min-width: 790px) {
  .jumbotron {
    width: 80%;
  }
}
</style>
