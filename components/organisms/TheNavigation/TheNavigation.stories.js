import TheNavigation from './TheNavigation.vue';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/TheNavigation',
  component: TheNavigation
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheNavigation },
  template: '<the-navigation v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { logoText: dummyLogo, routes: dummyRoutes };
