import { mount } from '@vue/test-utils';
import BaseHeading1 from './BaseHeading1.vue';

describe('BaseImg', () => {
  const baseHeading1 = () =>
    mount(BaseHeading1, {
      slots: {
        default: 'ダミーの見出し'
      }
    });

  it('値がDOMに反映されているか', () => {
    const wrapper = baseHeading1();
    const hTag = wrapper.find('h1');
    expect(hTag.text()).toBe('ダミーの見出し');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
