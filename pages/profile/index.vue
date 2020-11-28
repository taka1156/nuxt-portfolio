<template>
  <div class="Profile">
    <div class="container">
      <h1>Profile</h1>

      <div class="jumbotron">
        <img
          src="@/assets/img/prof.png"
          alt="プロフィール画像"
          class="profile__icon"
        />

        <proflie-list :profile="experiences" />

        <proflie-list :profile="wants" />

        <proflie-list :profile="tools" />

        <proflie-list :profile="exams" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileList from '@/components/organisms/ProfileList/ProflieList';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Profile',
  components: {
    'proflie-list': ProfileList,
  },
  mixins: [meta],
  data() {
    return {
      experiences: {
        title: '最近やっていること',
        values: ['JS(ES6)について学習。', 'FireBaseを利用した開発', 'Laravelの学習'],
      },
      wants: {
        title: 'これからやりたいこと',
        values: [
          'TypeScriptの学習',
          'Laravel+Vueでサービスを作る',
          'AWSなどインフラ周りの学習',
          'CSS/SASSの学習',
        ],
      },
      tools: {
        title: 'よく使うツール',
        values: ['Homebrew', 'Git', 'VScode', 'Docker', 'LaraDock', 'phpMyAdmin'],
      },
      exams: {
        title: '資格',
        values: [
          'ITパスポート',
          '情報セキュリティマネジメント',
          '基本情報技術者',
          '応用情報技術者',
        ],
      },
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
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
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

@media (min-width: 790px) {
  .jumbotron {
    width: 80%;
  }
}
</style>
