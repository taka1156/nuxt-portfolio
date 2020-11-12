import { storiesOf } from '@storybook/vue';
import { text, array } from '@storybook/addon-knobs/vue';
import PortfolioNavigation from '../PortfolioNavigation.vue';

const ROUTERS = [
  {
    name: 'nav-item',
    to: '/test1',
    img: 'http://placehold.jp/150x150.png',
  },
  {
    name: 'nav-item',
    to: '/test2',
    img: 'http://placehold.jp/150x150.png',
  },
  {
    name: 'nav-item',
    to: '/test3',
    img: 'http://placehold.jp/150x150.png',
  },
  {
    name: 'nav-item',
    to: '/test4',
    img: 'http://placehold.jp/150x150.png',
  },
];

storiesOf('Organisms/Nav/PortfolioNavigation', module).add(
  'default',
  () => ({
    components: { PortfolioNavigation },
    template: '<portfolio-navigation :logo-text="logoText" :routes="routes" />',
    props: {
      logoText: {
        type: String,
        default: text('text', 'text'),
      },
      routes: {
        type: Array,
        default: array('routers', ROUTERS),
      },
    },
  }),
  {
    info: {
      summary: 'ナビゲーションバーのロゴ表示',
    },
  }
);
