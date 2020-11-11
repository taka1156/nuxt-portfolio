import { storiesOf } from '@storybook/vue';
import { select } from '@storybook/addon-knobs/vue';
import CardListItem from '../CardListItem.vue';

const POSTS1 = [
  {
    title: 'PHP',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '1~4ヶ月',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
  },
  {
    title: 'Laravel',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '2~3ヶ月',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
  },
  {
    title: 'JavaScript(ES6)',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '６ヶ月',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
  },
  {
    title: 'Vue.js',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: '8ヶ月',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
  },
];

const POSTS2 = [
  {
    title: 'ブログサイト',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Nuxt.js(Vue.js), axios, microCMS, BootStrap4, vue-infinite-loading',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
    link: 'https://takatechblog.netlify.app/',
  },
  {
    title: 'マークダウンエディター',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Vue.js, Electron, BootStrap4',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
    link: 'https://github.com/taka1156/markdown-editor',
  },
  {
    title: 'LineBot',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Express.js, axios, @line/bot-sdk , Vercel(Zeit Now)',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
    link: 'https://github.com/taka1156/line-bot',
  },
  {
    title: 'オーディオプレイヤー',
    img: { url: 'http://placehold.jp/150x150.png' },
    content1: 'Vue.js, Electron, JSMediaTags',
    content2:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
    link: 'https://github.com/taka1156/audio-player',
  },
];

storiesOf('molecules/Card/CardListItem', module).add(
  'default',
  () => ({
    components: { CardListItem },
    template: '<card-list-item :card-info="card" />',
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
