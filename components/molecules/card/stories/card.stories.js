import { storiesOf } from '@storybook/vue';
import { select } from '@storybook/addon-knobs/vue';
import CardListItem from '../CardListItem.vue';
import { dummyCards, dummyCardsLink } from '@/testdata/testdata.js';

storiesOf('Molecules/Card/CardListItem', module).add(
  'default',
  () => ({
    components: { CardListItem },
    template: '<card-list-item :card-info="card" />',
    props: {
      card: {
        type: Object,
        default: select(
          'card',
          { default: dummyCards[3], clickable: dummyCardsLink[3] },
          dummyCards[3]
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
