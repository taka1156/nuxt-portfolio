import { storiesOf } from '@storybook/vue';
import { text, boolean, array, object } from '@storybook/addon-knobs/vue';
import { action } from '@storybook/addon-actions';
import NavBar from '../NavBar.vue';
import NavList from '../NavList.vue';
import NavListItem from '../NavListItem.vue';

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

storiesOf('molecules/Nav/NavBar', module).add(
  'default',
  () => ({
    components: { NavBar },
    template:
      '<nav-bar :logo-text="logoText" :is-open="isOpen" @change-state="changeState" />',
    props: {
      logoText: {
        type: String,
        default: text('text', 'logoText'),
      },
      isOpen: {
        type: Boolean,
        default: boolean('isOpen', false),
      },
    },
  }),
  {
    info: {
      summary: 'ナビゲーションバー',
    },
  }
);

storiesOf('molecules/Nav/NavList', module).add(
  'default',
  () => ({
    components: { NavList },
    template:
      '<nav-list :is-open="isOpen" :routers="routers" @change-state="changeState" />',
    props: {
      isOpen: {
        type: Boolean,
        default: boolean('isOpen', false),
      },
      routers: {
        type: Array,
        default: array('routers', ROUTERS),
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

storiesOf('molecules/Nav/NavListItem', module).add(
  'default',
  () => ({
    components: { NavListItem },
    template: '<nav-item :nav-item="item" />',
    props: {
      item: {
        type: Object,
        default: object('item', ROUTERS[3]),
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
