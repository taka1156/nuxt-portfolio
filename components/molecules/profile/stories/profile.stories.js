import { storiesOf } from '@storybook/vue';
import { array } from '@storybook/addon-knobs/vue';
import ProfileList from '../ProflieList.vue';
import { dummyProfile } from '@/testdata/testdata.js';

storiesOf('Molecules/Profile/ProfileList', module).add(
  'default',
  () => ({
    components: { ProfileList },
    template: '<profile-list :list="arr" />',
    props: {
      arr: {
        type: Array,
        default: array('arr', dummyProfile),
      },
    },
  }),
  {
    info: {
      summary: 'プロフィールページのリスト表示',
    },
  }
);
