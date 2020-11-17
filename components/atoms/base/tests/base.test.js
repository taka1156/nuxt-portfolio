import { shallowMount } from '@vue/test-utils';
import { dummyImg } from '@/__testdata__/testdata.js';
import BaseText from '../BaseText.vue';
import BaseImg from '../BaseImg.vue';
import BaseBtn from '../BaseBtn.vue';

// BaseBtn
describe('BaseBtn', () => {
  const dummyButtonText = 'ダミーボタンテキスト';
  const baseBtn = shallowMount(BaseBtn, {
    slots: {
      default: dummyButtonText,
    },
  });

  it('slotがDOMに反映されているか', () => {
    const btnTag = baseBtn.find('button');
    expect(btnTag.text()).toBe(dummyButtonText);
    expect(btnTag.html()).toMatchSnapshot();
  });

  it('btnClickを実行した時、`btn-click`のイベントが発生するか', () => {
    baseBtn.vm.btnClick();
    expect(baseBtn.emitted('btn-click')).toBeTruthy();
  });
});

// BaseImg
describe('BaseImg', () => {
  const baseImg = propsData =>
    shallowMount(BaseImg, {
      propsData: {
        ...propsData,
        imgUrl: dummyImg.imgUrl,
        imgAlt: dummyImg.imgAlt,
      },
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

// BaseText
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
