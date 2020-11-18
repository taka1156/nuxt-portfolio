import BaseTitle from './BaseTitle.vue';

export default {
  title: 'Atoms/BaseTitle',
  component: BaseTitle,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTitle },
  template: '<base-title>Text</base-title>',
});

export const Default = Template.bind({});
