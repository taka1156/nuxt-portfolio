import { shallowMount } from '@vue/test-utils';
import { dummyImg } from '@/__testdata__/testdata.js';
import BaseCardImg from './BaseCardImg.vue';

describe('BaseCardImg', () => {
  const baseCardImg = propsData =>
    shallowMount(BaseCardImg, {
      propsData: {
        ...propsData,
        imgUrl: dummyImg.imgUrl,
        imgAlt: dummyImg.imgAlt,
      },
    });

  it('値がDOMに反映されているか(size: sm)', () => {
    const wrapper = baseCardImg({ size: 'sm' });
    const imgTag = wrapper.find('img');
    // v-lazyからsrcを取り出せない
    // expect(imgTag.attributes().src).toBe(dummyImg.img);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    expect(imgTag.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(size: lg)', () => {
    const wrapper = baseCardImg({ size: 'lg' });
    const imgTag = wrapper.find('img');
    // v-lazyからsrcを取り出せない
    // expect(imgTag.attributes().src).toBe(dummyImg.img);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    expect(imgTag.html()).toMatchSnapshot();
  });
});
