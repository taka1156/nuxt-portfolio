import BaseNavIcon from './BaseNavIcon.vue';

export default {
  title: 'Atoms/BaseNavIcon',
  component: BaseNavIcon,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseNavIcon },
  template: '<nav-nav-icon v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
