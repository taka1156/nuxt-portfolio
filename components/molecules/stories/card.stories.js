import { storiesOf } from '@storybook/vue';
import { select } from '@storybook/addon-knobs/vue';
import CardList from '../CardList.vue';
import CardListItem from '../CardListItem.vue';

const POSTS1 = [
  {
    title: 'PHP',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '1~4ヶ月',
    content2: 'VagrantでLAMPサーバーを構築して簡単な掲示板の作成を行いました。',
  },
  {
    title: 'Laravel',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '2~3ヶ月',
    content2:
      'laradockを用いて学習を行なっています。\n基礎的なところは、ある程度学習し終えたので現在は、Conohaでサーバーを借りて、Twitterのような簡易SNSを題材に作成しています。',
  },
  {
    title: 'JavaScript(ES6)',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '６ヶ月',
    content2:
      'Vue.jsやExpress.jsを扱うために基礎的なことを学習しました。\n最近は、Node.js、ES6関連を中心により深いところを学習しています。',
  },
  {
    title: 'Vue.js',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '8ヶ月',
    content2:
      'ポートフォリオサイトやElectronと併用して、デスクトップアプリを作成しています。\n現在は、Ionicを使って簡単なスマホアプリの作成にもチャレンジしています。',
  },
];

const POSTS2 = [
  {
    title: 'ブログサイト',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Nuxt.js(Vue.js), axios, microCMS, BootStrap4, vue-infinite-loading',
    content2:
      'JAMStackの構成に興味を持ちNuxtで初めて作成したブログサイトです。\nカテゴリやタグなどの基本的なブログをイメージして作りました。',
    link: 'https://takatechblog.netlify.app/',
  },
  {
    title: 'マークダウンエディター',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Vue.js, Electron, BootStrap4',
    content2:
      'electron-vueで作成したマークダウンエディターです。\nスライドモードも作成しました。',
    link: 'https://github.com/taka1156/markdown-editor',
  },
  {
    title: 'LineBot',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Express.js, axios, @line/bot-sdk , Vercel(Zeit Now)',
    content2:
      '特定の文を送られたときにQiita APIからタグ検索で記事を取得し、LGTMでソートして取得するようにしました。',
    link: 'https://github.com/taka1156/line-bot',
  },
  {
    title: 'オーディオプレイヤー',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Vue.js, Electron, JSMediaTags',
    content2:
      'ID3タグのアーティスト情報やアートワークを取り出して表示などを行なっています。\n曲の再生に関しては、JavaScriptのAudioクラスを使って制御しています。',
    link: 'https://github.com/taka1156/audio-player',
  },
];

storiesOf('molecules/Card/CardList', module).add(
  'default',
  () => ({
    components: { CardList },
    template: '<card-list :cards="posts" />',
    props: {
      posts: {
        type: Array,
        default: select('posts', { default: POSTS1, clickable: POSTS2 }, POSTS1),
      },
    },
  }),
  {
    info: {
      summary: 'カードの一覧表示',
    },
  }
);

storiesOf('molecules/Card/CardListItem', module).add(
  'default',
  () => ({
    components: { CardListItem },
    template: '<card-item :card-info="card" />',
    props: {
      card: {
        type: Object,
        default: select(
          'card',
          { default: POSTS1[3], clickable: POSTS2[3] },
          POSTS1[3]
        ),
      },
    },
  }),
  {
    info: {
      summary: 'カード型レイアウト',
    },
  }
);
