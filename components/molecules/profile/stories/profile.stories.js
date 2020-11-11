import { storiesOf } from '@storybook/vue';
import { array } from '@storybook/addon-knobs/vue';
import ProfileList from '../ProflieList.vue';

const DUMMEY = [
  'TypeScriptの学習',
  'Laravel+Vueでサービスを作る',
  'AWSなどインフラ周りの学習',
  'CSS/SASSの学習',
];

storiesOf('molecules/Profile/ProfileList', module).add(
  'default',
  () => ({
    components: { ProfileList },
    template: '<profile-list :list="arr" />',
    props: {
      arr: {
        type: Array,
        default: array('arr', DUMMEY),
      },
    },
  }),
  {
    info: {
      summary: 'プロフィールページのリスト表示',
    },
  }
);
