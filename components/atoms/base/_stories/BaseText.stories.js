import BaseText from '../BaseText.vue';

export default {
  title: 'Atoms/Base/BaseText',
  component: BaseText,
  argTypes: {
    useType: {
      control: {
        type: 'inline-radio',
        options: ['none', 'nav', 'card'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseText },
  template: '<base-text v-bind="$props">Text</base-text>',
});

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
