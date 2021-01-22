import CardListItem from './CardListItem.vue';
import { dummyCards, dummyCardsLink } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/CardListItem',
  component: CardListItem
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardListItem },
  template: '<card-list-item v-bind="$props" />'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardListItem },
  template: '<card-list-item v-bind="$props" />'
});

export const Default = Template1.bind({});
Default.args = { card: dummyCards[0] };

export const Link = Template2.bind({});
Link.args = { card: dummyCardsLink[0] };
