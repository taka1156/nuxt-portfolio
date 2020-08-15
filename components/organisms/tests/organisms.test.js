import { mount, RouterLinkStub } from '@vue/test-utils';
import BaseNav from '../BaseNav.vue';

// NavIcon
describe('BaseNav', () => {
  const dummyLogo = 'ダミー';
  const dummyRouters = [
    { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
  ];
  const baseNav = mount(BaseNav, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      routers: dummyRouters,
      logoText: dummyLogo,
    },
  });

  it('閉じた時のスナップショット', () => {
    expect(baseNav.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(baseNav.vm.$data.isOpen).toBe(false);
    baseNav.vm.changeState();
    expect(baseNav.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    expect(baseNav.html()).toMatchSnapshot();
  });
});
