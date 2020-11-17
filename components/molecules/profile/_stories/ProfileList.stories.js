import ProfileList from '../ProflieList.vue';
import { dummyProfiles } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/Profile/ProfileList',
  component: ProfileList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfileList },
  template: '<profile-list v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = { list: dummyProfiles };
