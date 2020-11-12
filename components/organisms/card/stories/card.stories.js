import { storiesOf } from '@storybook/vue';
import { select } from '@storybook/addon-knobs/vue';
import CardList from '../CardList.vue';
import { dummyCards, dummyCardsLink } from '@/testdata/testdata.js';

storiesOf('Organisms/Card/CardList', module).add(
  'default',
  () => ({
    components: { CardList },
    template: '<card-list :cards="posts" />',
    props: {
      posts: {
        type: Array,
        default: select(
          'posts',
          { default: dummyCards, clickable: dummyCardsLink },
          dummyCards
        ),
      },
    },
  }),
  {
    info: {
      summary: 'カードの一覧表示',
    },
  }
);
