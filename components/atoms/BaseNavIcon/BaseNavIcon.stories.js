import BaseNavIcon from './BaseNavIcon.vue';

export default {
  title: 'Atoms/BaseNavIcon',
  component: BaseNavIcon,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseNavIcon },
  template: '<base-nav-icon v-bind="$props">text</base-nav-icon>'
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
