import { mount, RouterLinkStub } from '@vue/test-utils';
import BaseNav from '../BaseNav.vue';

// NavIcon
describe('BaseNav', () => {
  const dummyLogo = 'ダミー';
  const dummyRouters = [
    { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
  ];
  const baseNav = () => {
    return mount(BaseNav, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        logoText: dummyLogo,
        routers: dummyRouters,
      },
    });
  };

  it('NavBar初期値: logoText, routers', () => {
    const wrapper = baseNav();
    // logoText
    expect(wrapper.vm.$options.props.logoText.required).toBe(true);
    expect(wrapper.vm.logoText).toBe(dummyLogo);
    // routers
    expect(wrapper.vm.$options.props.routers.required).toBe(true);
    console.log(wrapper.vm.$options.props.routers.default());
    expect(wrapper.vm.routers).toBe(dummyRouters);
  });

  it('閉じた時のスナップショット', () => {
    const wrapper = baseNav();
    wrapper.setData({ isOpen: false });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    const wrapper = baseNav();
    expect(wrapper.vm.$data.isOpen).toBe(false);
    wrapper.vm.changeState();
    expect(wrapper.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    const wrapper = baseNav();
    wrapper.setData({ isOpen: true });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
