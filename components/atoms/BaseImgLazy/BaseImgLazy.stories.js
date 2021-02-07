import BaseImgLazy from './BaseImgLazy.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

export default {
  title: 'Atoms/BaseImgLazy',
  component: BaseImgLazy,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'lg', 'free']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImgLazy },
  template: '<base-img-lazy v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { ...dummyImg };
