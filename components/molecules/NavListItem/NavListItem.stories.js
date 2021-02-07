import NavListItem from './NavListItem.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/NavListItem',
  component: NavListItem,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavListItem },
  template: '<nav-list-item v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { navItem: dummyRoutes[0] };
