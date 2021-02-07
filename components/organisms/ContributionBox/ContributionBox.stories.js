import ContributionBox from './ContributionBox.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ContributionBox',
  component: ContributionBox
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ContributionBox },
  template: '<contribution-box v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = dummyImg;
