import NavBar from './NavBar.vue';
import { dummyLogo } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/NavBar',
  component: NavBar,
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
  components: { NavBar },
  template: '<nav-bar v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false, logoText: dummyLogo };
