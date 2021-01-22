import { mount, RouterLinkStub } from '@vue/test-utils';
import NavList from './NavList.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

describe('NavList', () => {
  const navList = propsData =>
    mount(NavList, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        routes: dummyRoutes,
        ...propsData
      }
    });

  it('NavList初期値: isOpen, routes', () => {
    const wrapper = navList({ isOpen: false });
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
    // routes
    expect(wrapper.vm.$options.props.routes.required).toBe(true);
    expect(wrapper.vm.routes).toBe(dummyRoutes);
  });

  it('値がDOMに反映されているか', () => {
    const wrapper = navList({ isOpen: false });
    const aTag = wrapper.findComponent(RouterLinkStub);
    const imgTag = wrapper.find('img');

    expect(aTag.props().to).toBe(dummyRoutes[0].to);
    expect(aTag.text()).toBe(dummyRoutes[0].name);
    expect(imgTag.attributes().src).toBe(dummyRoutes[0].img);
  });

  it('isOpenがtrueの時に`.nav-list`が表示', () => {
    const wrapper = navList({ isOpen: true });
    expect(wrapper.find('.nav-list').element.style.display).not.toBe('none');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('isOpenがfalseの時に`.nav-list`が非表示', () => {
    const wrapper = navList({ isOpen: false });
    expect(wrapper.find('.nav-list').element.style.display).toBe('none');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('changeStateを実行した時、`change-state`のイベントが発生するか', () => {
    const wrapper = navList({ isOpen: true });
    wrapper.vm.changeState();
    expect(wrapper.emitted('change-state')).toBeTruthy();
  });
});
