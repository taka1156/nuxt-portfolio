import TheCopyright from './TheCopyright.vue';
import { dummyCopyrightUrl } from '__testdata__/testdata.js';

export default {
  title: 'Organisms/TheCopyright',
  component: TheCopyright
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheCopyright },
  template: '<the-copyright v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { copyrightUrl: dummyCopyrightUrl };
