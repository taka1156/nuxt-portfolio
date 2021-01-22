import ProfileList from './ProflieList.vue';
import { dummyExams } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ProfileList',
  component: ProfileList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfileList },
  template: '<profile-list v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { profile: dummyExams };
