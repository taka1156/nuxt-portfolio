import { storiesOf } from '@storybook/vue';
import { text, boolean, array, object } from '@storybook/addon-knobs/vue';
import { action } from '@storybook/addon-actions';
import NavBar from '../NavBar.vue';
import NavList from '../NavList.vue';
import NavListItem from '../NavListItem.vue';
import { dummyLogo, dummyRoutes } from '@/testdata/testdata.js';

storiesOf('Molecules/Nav/NavBar', module).add(
  'default',
  () => ({
    components: { NavBar },
    template:
      '<nav-bar :logo-text="logoText" :is-open="isOpen" @change-state="changeState" />',
    props: {
      logoText: {
        type: String,
        default: text('text', dummyLogo),
      },
      isOpen: {
        type: Boolean,
        default: boolean('isOpen', false),
      },
    },
    methods: {
      changeState: action('change-state'),
    },
  }),
  {
    info: {
      summary: 'ナビゲーションバー',
    },
  }
);

storiesOf('Molecules/Nav/NavList', module).add(
  'default',
  () => ({
    components: { NavList },
    template:
      '<nav-list :is-open="isOpen" :routes="routes" @change-state="changeState" />',
    props: {
      isOpen: {
        type: Boolean,
        default: boolean('isOpen', false),
      },
      routes: {
        type: Array,
        default: array('routers', dummyRoutes),
      },
    },
    methods: {
      changeState: action('change-state'),
    },
  }),
  {
    info: {
      summary: 'ナビゲーションのリスト表示部分',
    },
  }
);

storiesOf('Molecules/Nav/NavListItem', module).add(
  'default',
  () => ({
    components: { NavListItem },
    template: '<nav-list-item :nav-item="item" />',
    props: {
      item: {
        type: Object,
        default: object('item', dummyRoutes[3]),
      },
    },
    methods: {
      changeState: action('change-state'),
    },
  }),
  {
    info: {
      summary: 'ナビゲーションのリストの項目部分',
    },
  }
);
