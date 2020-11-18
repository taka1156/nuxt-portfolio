import { shallowMount } from '@vue/test-utils';
import BaseText from './BaseText.vue';

describe('BaseText', () => {
  const dummyText = 'ダミーテキスト';
  const baseText = propsData =>
    shallowMount(BaseText, {
      slots: {
        default: dummyText,
      },
      propsData: {
        ...propsData,
      },
    });

  it('値がDOMに反映されているか(useType: none)', () => {
    const wrapper = baseText({ useType: 'none' });
    expect(wrapper.text()).toBe(dummyText);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(useType: nav)', () => {
    const wrapper = baseText({ useType: 'nav' });
    expect(wrapper.text()).toBe(dummyText);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(useType: card)', () => {
    const wrapper = baseText({ useType: 'card' });
    expect(wrapper.text()).toBe(dummyText);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
