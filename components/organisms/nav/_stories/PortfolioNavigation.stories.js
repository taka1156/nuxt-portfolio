import PortfolioNavigation from '../PortfolioNavigation.vue';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/Nav/PortfolioNavigation',
  component: PortfolioNavigation,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PortfolioNavigation },
  template: '<portfolio-navigation v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = { logoText: dummyLogo, routes: dummyRoutes };
