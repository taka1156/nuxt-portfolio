import { mount, RouterLinkStub } from '@vue/test-utils';
import {
  dummyOutsideLink,
  dummyRouteStr,
  dummyRouteObj
} from '@/__testdata__/testdata.js';
import BaseLink from './BaseLink.vue';

describe('BaseLink', () => {
  const baseStubLink = propsData =>
    mount(BaseLink, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      slots: {
        default: 'リンクテキスト'
      },
      propsData: { ...propsData }
    });

  const baseLink = propsData =>
    mount(BaseLink, {
      slots: {
        default: 'リンクテキスト'
      },
      propsData: { ...propsData }
    });

  it('BaseLink初期値(OutSidelink): String', () => {
    const wrapper = baseLink(dummyOutsideLink);
    expect(wrapper.vm.routeTo).toBe(dummyOutsideLink.routeTo);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('BaseLink初期値(NuxtLink): String', () => {
    const wrapper = baseStubLink(dummyRouteStr);
    expect(wrapper.vm.routeTo).toBe(dummyRouteStr.routeTo);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('BaseLink初期値(NuxtLink): Object', () => {
    const wrapper = baseStubLink(dummyRouteObj);
    expect(wrapper.vm.routeTo).toBe(dummyRouteObj.routeTo);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('computed: isInternalLinkのテスト', () => {
    expect(BaseLink.computed.isInternalLink.call(dummyRouteStr)).toBe(true);
    expect(BaseLink.computed.isInternalLink.call(dummyRouteObj)).toBe(true);
    expect(BaseLink.computed.isInternalLink.call(dummyOutsideLink)).toBe(false);
  });
});
