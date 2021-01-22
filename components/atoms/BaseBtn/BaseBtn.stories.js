import BaseBtn from './BaseBtn.vue';

export default {
  title: 'Atoms/BaseBtn',
  component: BaseBtn,
  argTypes: {
    btnClick: { action: 'clicked' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseBtn },
  template: '<base-btn @btn-click="btnClick">Button</base-btn>'
});

export const Default = Template.bind({});
