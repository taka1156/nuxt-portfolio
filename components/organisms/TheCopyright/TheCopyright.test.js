import { mount } from '@vue/test-utils';
import TheCopyright from './TheCopyright.vue';
import { dummyCopyrightUrl } from '@/__testdata__/testdata.js';

describe('TheNavigation', () => {
  const theCopyright = propsData =>
    mount(TheCopyright, {
      propsData: {
        ...propsData
      }
    });

  it('TheNavigation初期値: copyrightUrl', () => {
    const wrapper = theCopyright({ copyrightUrl: dummyCopyrightUrl });
    expect(wrapper.vm.$options.props.copyrightUrl.required).toBe(true);
    expect(wrapper.vm.copyrightUrl).toBe(dummyCopyrightUrl);
  });

  it('値がDOMに反映されているか', () => {
    const wrapper = theCopyright({ copyrightUrl: dummyCopyrightUrl });
    const aTag = wrapper.find('a');
    expect(aTag.attributes().href).toBe(dummyCopyrightUrl);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
