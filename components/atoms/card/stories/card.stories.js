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
    template:
      '<card-img :card-img="cardImg" :is-portfolio="isPortfolio" img-alt="imgAlt" />',
    props: {
      cardImg: {
        type: String,
        default: text('cardImg', 'http://placehold.jp/150x150.png'),
      },
      imgAlt: {
        type: String,
        default: text('imgAlt', 'ダミーのalt'),
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
