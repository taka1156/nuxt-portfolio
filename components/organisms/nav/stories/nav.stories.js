import { storiesOf } from '@storybook/vue';
import { text, array } from '@storybook/addon-knobs/vue';
import PortfolioNavigation from '../PortfolioNavigation.vue';
import { dummyLogo, dummyRoutes } from '@/testdata/testdata';

storiesOf('Organisms/Nav/PortfolioNavigation', module).add(
  'default',
  () => ({
    components: { PortfolioNavigation },
    template: '<portfolio-navigation :logo-text="logoText" :routes="routes" />',
    props: {
      logoText: {
        type: String,
        default: text('text', dummyLogo),
      },
      routes: {
        type: Array,
        default: array('routers', dummyRoutes),
      },
    },
  }),
  {
    info: {
      summary: 'ナビゲーションバーのロゴ表示',
    },
  }
);
