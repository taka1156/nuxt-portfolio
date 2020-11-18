import { shallowMount } from '@vue/test-utils';
import BaseTitle from './BaseTitle.vue';

describe('BaseTitle', () => {
  it('値がDOMに反映されているか', () => {
    const dummyTitle = 'ダミータイトル';
    const baseTitle = shallowMount(BaseTitle, {
      slots: {
        default: dummyTitle,
      },
    });
    const hTag = baseTitle.find('h2');
    expect(hTag.text()).toBe(dummyTitle);
    expect(baseTitle.html()).toMatchSnapshot();
  });
});
