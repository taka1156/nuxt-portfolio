import { mount, RouterLinkStub } from '@vue/test-utils';
import BaseNav from '../BaseNav.vue';

// NavIcon
describe('BaseNav', () => {
  const dummyLogo = 'ダミー';
  const baseNav = mount(BaseNav, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      isOpen: true,
      logoText: dummyLogo,
    },
  });

  it('開いた時のスナップショット', () => {
    expect(baseNav.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(baseNav.vm.$data.isOpen).toBe(false);
    baseNav.vm.changeState();
    expect(baseNav.vm.$data.isOpen).toBe(true);
  });

  it('閉じた時のスナップショット', () => {
    expect(baseNav.html()).toMatchSnapshot();
  });
});
