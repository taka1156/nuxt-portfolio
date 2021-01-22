import { mount } from '@vue/test-utils';
import BaseText from './BaseText.vue';

describe('BaseText', () => {
  const dummyText = 'ダミーテキスト';
  const baseText = () =>
    mount(BaseText, {
      slots: {
        default: dummyText
      }
    });

  it('値がDOMに反映されているか', () => {
    const wrapper = baseText();
    expect(wrapper.text()).toBe(dummyText);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
