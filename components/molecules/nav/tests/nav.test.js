import { mount, RouterLinkStub } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import NavList from '../NavList.vue';
import NavListItem from '../NavListItem.vue';

const dummyRoutes = [
  { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
];

// NavBar
describe('NavBar', () => {
  const dummyText = 'ダミーテキスト';
  const navBar = propsData => {
    return mount(NavBar, {
      propsData: {
        logoText: dummyText,
        ...propsData,
      },
    });
  };

  it('NavBar初期値: isOpen, logoText', () => {
    const wrapper = navBar({ isOpen: false });
    // logoText
    expect(wrapper.vm.$options.props.logoText.required).toBe(true);
    expect(wrapper.vm.logoText).toBe(dummyText);
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('logoTextが反映されているか', () => {
    const wrapper = navBar({ isOpen: false });
    const navLogo = wrapper.find('.nav-logo');
    expect(navLogo.text()).toBe(dummyText);
  });

  it('ナビゲーションバーを開く', () => {
    const wrapper = navBar({ isOpen: true });
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ナビゲーションバーを閉じる', () => {
    const wrapper = navBar({ isOpen: false });
    expect(wrapper.vm.isOpen).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('$emitでメソッド`change-state`が呼ばれた', () => {
    const wrapper = navBar({ isOpen: false });
    wrapper.vm.$emit('change-state');
    expect(wrapper.emitted('change-state')).toBeTruthy();
  });
});

// NavListItem
describe('NavListItem', () => {
  const navListItem = mount(NavListItem, {
    // <nuxt-link>をRouterLinkStubで探せるようになる
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      navItem: dummyRoutes[0],
    },
  });

  it('NavList初期値: navItem', () => {
    // NavItme
    expect(navListItem.vm.$options.props.navItem.required).toBe(true);
    console.log(navListItem.vm.$options.props.navItem.default());
    expect(navListItem.vm.navItem).toBe(dummyRoutes[0]);
  });

  it('値がDOMに反映されているか', () => {
    const aTag = navListItem.findComponent(RouterLinkStub);
    const imgTag = navListItem.find('img');

    expect(aTag.props().to).toBe(dummyRoutes[0].to);
    expect(aTag.text()).toBe(dummyRoutes[0].name);
    expect(imgTag.attributes().src).toBe(dummyRoutes[0].img);
    // スナップショット
    expect(navListItem.html()).toMatchSnapshot();
  });

  it('$emitでメソッド`change-state`が呼ばれた', () => {
    navListItem.vm.$emit('change-state');
    expect(navListItem.emitted('change-state')).toBeTruthy();
  });
});

// NavList
describe('NavList', () => {
  const navList = propsData => {
    return mount(NavList, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        routes: dummyRoutes,
        ...propsData,
      },
    });
  };

  it('NavList初期値: isOpen, routes', () => {
    const wrapper = navList({ isOpen: false });
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
    // routes
    expect(wrapper.vm.$options.props.routes.required).toBe(true);
    console.log(wrapper.vm.$options.props.routes.default());
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

  it('$emitでメソッド`change-state`が呼ばれた', () => {
    const wrapper = navList({ isOpen: true });
    wrapper.vm.$emit('change-state');
    expect(wrapper.emitted('change-state')).toBeTruthy();
  });
});
