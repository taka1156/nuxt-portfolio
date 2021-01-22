import { mount } from '@vue/test-utils';
import { dummyImg } from '@/__testdata__/testdata.js';
import BaseImg from './BaseImg.vue';

describe('BaseImg', () => {
  const baseImg = propsData =>
    mount(BaseImg, {
      propsData: {
        ...propsData,
        imgUrl: dummyImg.imgUrl,
        imgAlt: dummyImg.imgAlt
      }
    });

  it('値がDOMに反映されているか(size: sm)', () => {
    const wrapper = baseImg({ size: 'sm' });
    const imgTag = wrapper.find('img');
    expect(imgTag.attributes().src).toBe(dummyImg.imgUrl);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(size: lg)', () => {
    const wrapper = baseImg({ size: 'lg' });
    const imgTag = wrapper.find('img');
    expect(imgTag.attributes().src).toBe(dummyImg.imgUrl);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
