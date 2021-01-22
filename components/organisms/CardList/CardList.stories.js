import CardList from './CardList.vue';
import { dummyCards, dummyCardsLink } from '@/@/__testdata__/testdata.js';

export default {
  title: 'Organisms/CardList',
  component: CardList
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardList },
  template: '<card-list v-bind="$props" />'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardList },
  template: '<card-list v-bind="$props" />'
});

export const Default = Template1.bind({});
Default.args = { cards: dummyCards };

export const Link = Template2.bind({});
Link.args = { cards: dummyCardsLink };
