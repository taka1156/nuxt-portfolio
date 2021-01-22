import BaseImg from './BaseImg.vue';
import { dummyImg } from '@/@/__testdata__/testdata.js';

export default {
  title: 'Atoms/BaseImg',
  component: BaseImg,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'lg']
      }
    }
  }
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImg },
  template: '<base-img v-bind="$props" />'
});

export const Default = Template1.bind({});
Default.args = dummyImg;
