import { mount, createLocalVue } from '@vue/test-utils';
import { dummyImg } from '@/__testdata__/testdata.js';
import VueLazyLoad from 'vue-lazyload';
import BaseImgLazy from './BaseImgLazy.vue';

const localVue = createLocalVue();
localVue.use(VueLazyLoad);

describe('BaseImgLazy', () => {
  const baseImgLazy = propsData =>
    mount(BaseImgLazy, {
      localVue,
      propsData: {
        ...propsData,
        imgUrl: dummyImg.imgUrl,
        imgAlt: dummyImg.imgAlt
      }
    });

  it('値がDOMに反映されているか(size: sm)', () => {
    const wrapper = baseImgLazy({ size: 'sm' });
    const imgTag = wrapper.find('img');
    // expect(imgTag.attributes().src).toBe(dummyImg.imgUrl);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(size: lg)', () => {
    const wrapper = baseImgLazy({ size: 'lg' });
    const imgTag = wrapper.find('img');
    // expect(imgTag.attributes().src).toBe(dummyImg.imgUrl);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
