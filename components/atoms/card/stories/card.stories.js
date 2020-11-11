import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import { text } from '@storybook/addon-knobs/vue';
import CardTitle from '../CardTitle.vue';
import CardImg from '../CardImg.vue';

storiesOf('Atoms/Card/CardTitle', module).add(
  'default',
  () => ({
    components: { CardTitle },
    template: '<card-title>Text</card-title>',
  }),
  {
    info: {
      summary: 'カードのタイトル',
    },
  }
);

storiesOf('Atoms/Card/CardImg', module).add(
  'default',
  () => ({
    components: { CardImg },
    template: '<card-img :card-img="path" :is-portfolio="isPortfolio" />',
    props: {
      path: {
        type: String,
        default: text('path', 'http://placehold.jp/150x150.png'),
      },
      isPortfolio: {
        type: Boolean,
        default: boolean('isPortfolio', false),
      },
    },
  }),
  {
    info: {
      summary: '画像',
    },
  }
);
