import { storiesOf } from '@storybook/vue';
import BaseBtn from '../BaseBtn.vue';
import BaseText from '../BaseText.vue';

storiesOf('Atoms/Base/BaseBtn', module).add(
  'default',
  () => ({
    components: { BaseBtn },
    template: '<base-btn>Button</base-btn>',
  }),
  {
    info: {
      summary: 'ボタン',
    },
  }
);

storiesOf('Atoms/Base/BaseText', module)
  .add(
    'base-text--card',
    () => ({
      components: { BaseText },
      template: '<base-text class="base-text--card">Text</base-text>',
    }),
    {
      info: {
        summary: 'テキスト',
      },
    }
  )
  .add(
    'base-text--nav',
    () => ({
      components: { BaseText },
      template: '<base-text class="base-text--nav">Text</base-text>',
    }),
    {
      info: {
        summary: 'テキスト',
      },
    }
  );
