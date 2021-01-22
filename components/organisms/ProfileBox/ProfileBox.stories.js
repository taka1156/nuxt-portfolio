import ProfileBox from './ProfileBox.vue';
import { dummyProfile } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ProfileBox ',
  component: ProfileBox
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfileBox },
  template: '<profile-box  v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { profile: dummyProfile };
