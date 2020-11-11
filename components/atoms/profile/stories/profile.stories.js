import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs/vue';
import ProfileListItem from '../ProfileListItem.vue';

storiesOf('Atoms/Profile/ProfileListItem', module).add(
  'default',
  () => ({
    components: { ProfileListItem },
    template: '<profile-list-item :profile-text="text">',
    props: {
      text: {
        type: String,
        default: text('text', 'text'),
      },
    },
  }),
  {
    info: {
      summary: 'プロフィールページのリスト表示の項目部分',
    },
  }
);
