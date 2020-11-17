import CardTitle from '../CardTitle.vue';

export default {
  title: 'Atoms/Card/CardTitle',
  component: CardTitle,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardTitle },
  template: '<card-title>Text</card-title>',
});

export const Default = Template.bind({});
