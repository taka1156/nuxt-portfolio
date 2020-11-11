import { storiesOf } from '@storybook/vue';
import { text, boolean } from '@storybook/addon-knobs/vue';
import NavIcon from '../NavIcon.vue';
import NavImg from '../NavImg.vue';
import NavLogo from '../NavLogo.vue';

storiesOf('Atoms/Nav/NavLogo', module).add(
  'default',
  () => ({
    components: { NavLogo },
    template: '<nav-logo>Text</nav-logo>',
    props: {
      text: {
        type: String,
        default: text('text', 'text'),
      },
    },
  }),
  {
    info: {
      summary: 'ナビゲーションバーのロゴ表示',
    },
  }
);

storiesOf('Atoms/Nav/NavIcon', module).add(
  'default',
  () => ({
    components: { NavIcon },
    template: '<nav-icon :is-open="isOpen" />',
    props: {
      isOpen: {
        type: Boolean,
        default: boolean('isOpen', false),
      },
    },
  }),
  {
    info: {
      summary: 'ナビゲーションの開閉のアイコン表示',
    },
  }
);

storiesOf('Atoms/Nav/NavImg', module).add(
  'default',
  () => ({
    components: { NavImg },
    template: '<nav-img :nav-img="path" />',
    props: {
      path: {
        type: String,
        default: text('path', 'http://placehold.jp/150x150.png'),
      },
    },
  }),
  {
    info: {
      summary: 'ナビゲーションの画像表示',
    },
  }
);
