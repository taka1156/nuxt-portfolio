import BaseText from './BaseText.vue';

export default {
  title: 'Atoms/BaseText',
  component: BaseText
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseText },
  template: '<base-text v-bind="$props">Text</base-text>'
});

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
};
