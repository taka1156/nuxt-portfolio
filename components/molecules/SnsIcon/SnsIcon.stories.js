import SnsIcon from './SnsIcon.vue';
import { dummySnsIcons } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/SnsIcon',
  component: SnsIcon
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SnsIcon },
  template: '<sns-icon v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { sns: dummySnsIcons[0] };
