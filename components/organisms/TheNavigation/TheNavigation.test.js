import { mount, RouterLinkStub } from '@vue/test-utils';
import TheNavigation from './TheNavigation.vue';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

describe('TheNavigation', () => {
  const theNavigation = mount(TheNavigation, {
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
    expect(theNavigation.vm.$options.props.logoText.required).toBe(true);
    expect(theNavigation.vm.logoText).toBe(dummyLogo);
    // routes
    expect(theNavigation.vm.$options.props.routes.required).toBe(true);
    console.log(theNavigation.vm.$options.props.routes.default());
    expect(theNavigation.vm.routes).toBe(dummyRoutes);
  });

  it('閉じた時のスナップショット', () => {
    expect(theNavigation.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(theNavigation.vm.$data.isOpen).toBe(false);
    theNavigation.vm.changeState(true);
    expect(theNavigation.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    expect(theNavigation.html()).toMatchSnapshot();
  });
});
