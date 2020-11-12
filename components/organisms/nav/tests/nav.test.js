import { mount, RouterLinkStub } from '@vue/test-utils';
import PortfolioNavigation from '../PortfolioNavigation.vue';

// PortfolioNavigation
describe('PortfolioNavigation', () => {
  const dummyLogo = 'ダミー';
  const dummyRoutes = [
    { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
  ];

  const baseNav = mount(PortfolioNavigation, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      logoText: dummyLogo,
      routes: dummyRoutes,
    },
  });

  it('NavBar初期値: logoText, routes', () => {
    // logoText
    expect(baseNav.vm.$options.props.logoText.required).toBe(true);
    expect(baseNav.vm.logoText).toBe(dummyLogo);
    // routes
    expect(baseNav.vm.$options.props.routes.required).toBe(true);
    console.log(baseNav.vm.$options.props.routes.default());
    expect(baseNav.vm.routes).toBe(dummyRoutes);
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
