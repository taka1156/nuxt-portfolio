import NavList from './NavList.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/NavList',
  component: NavList,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavList },
  template: '<nav-list v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false, routes: dummyRoutes };
