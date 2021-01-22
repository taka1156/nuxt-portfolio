import SnsIcons from './SnsIcons.vue';
import { dummySnsIcons } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/SnsIcons',
  component: SnsIcons
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SnsIcons },
  template: '<sns-icons v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { snsIcons: dummySnsIcons };
