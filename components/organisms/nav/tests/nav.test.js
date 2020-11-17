import { mount, RouterLinkStub } from '@vue/test-utils';
import PortfolioNavigation from '../PortfolioNavigation.vue';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

// PortfolioNavigation
describe('PortfolioNavigation', () => {
  const portfolioNavigation = mount(PortfolioNavigation, {
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
    expect(portfolioNavigation.vm.$options.props.logoText.required).toBe(true);
    expect(portfolioNavigation.vm.logoText).toBe(dummyLogo);
    // routes
    expect(portfolioNavigation.vm.$options.props.routes.required).toBe(true);
    console.log(portfolioNavigation.vm.$options.props.routes.default());
    expect(portfolioNavigation.vm.routes).toBe(dummyRoutes);
  });

  it('閉じた時のスナップショット', () => {
    expect(portfolioNavigation.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(portfolioNavigation.vm.$data.isOpen).toBe(false);
    portfolioNavigation.vm.changeState(true);
    expect(portfolioNavigation.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    expect(portfolioNavigation.html()).toMatchSnapshot();
  });
});
