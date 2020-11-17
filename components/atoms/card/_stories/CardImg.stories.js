import CardImg from '../CardImg.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

export default {
  title: 'Atoms/Card/CardImg',
  component: CardImg,
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
  components: { CardImg },
  template: '<card-img v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = dummyImg;
