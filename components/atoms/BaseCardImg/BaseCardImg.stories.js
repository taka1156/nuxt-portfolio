import BaseCardImg from './BaseCardImg.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

export default {
  title: 'Atoms/BaseCardImg',
  component: BaseCardImg,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'lg'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseCardImg },
  template: '<base-card-img v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = dummyImg;
