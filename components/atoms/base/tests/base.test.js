import { shallowMount } from '@vue/test-utils';
import BaseText from '../BaseText.vue';
import BaseBtn from '../BaseBtn.vue';

// BaseText
describe('BaseText', () => {
  it('値がDOMに反映されているか', () => {
    const dummyText = 'ダミーテキスト';
    const baseText = shallowMount(BaseText, {
      slots: {
        default: dummyText,
      },
    });
    expect(baseText.text()).toBe(dummyText);
    expect(baseText.html()).toMatchSnapshot();
  });
});

// BaseBtn
describe('BaseBtn', () => {
  it('slotがDOMに反映されているか', () => {
    const dummyButtonText = 'ダミーボタンテキスト';
    const cardButton = shallowMount(BaseBtn, {
      slots: {
        default: dummyButtonText,
      },
    });
    const btnTag = cardButton.find('button');
    expect(btnTag.text()).toBe(dummyButtonText);
    expect(btnTag.html()).toMatchSnapshot();
  });
});
