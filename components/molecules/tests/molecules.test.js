import { mount, RouterLinkStub } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import NavList from '../NavList.vue';
import NavListItem from '../NavListItem.vue';

const dummyRouters = [
  { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
];

// NavBar
describe('NavBar', () => {
  const dummyText = 'ダミーテキスト';
  const navBar = mount(NavBar, {
    propsData: {
      isOpen: false,
      logoText: dummyText,
    },
  });

  it('NavBar初期値: isOpen, logoText', () => {
    // logoText
    expect(navBar.vm.$options.props.logoText.required).toBe(true);
    expect(navBar.vm.logoText).toBe(dummyText);
    // isOpen
    expect(navBar.vm.$options.props.isOpen.required).toBe(true);
    expect(navBar.vm.isOpen).toBe(false);
  });

  it('logoTextが反映されているか', () => {
    const navLogo = navBar.find('.nav__logo');
    expect(navLogo.text() === dummyText).toBe(true);
  });

  it('ナビゲーションバーを開く', () => {
    navBar.setProps({ isOpen: true });
    expect(navBar.vm.isOpen).toBe(true);
    expect(navBar.html()).toMatchSnapshot();
  });

  it('ナビゲーションバーを閉じる', () => {
    navBar.setProps({ isOpen: false });
    expect(navBar.vm.isOpen).toBe(false);
    expect(navBar.html()).toMatchSnapshot();
  });

  it('$emitでメソッド`change-state`が呼ばれた', () => {
    navBar.vm.$emit('change-state');
    expect(navBar.emitted('change-state')).toBeTruthy();
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
      navItem: dummyRouters[0],
    },
  });

  it('NavList初期値: navItem', () => {
    // logoText
    expect(navListItem.vm.$options.props.navItem.required).toBe(true);
    console.log(navListItem.vm.$options.props.navItem.default());
    expect(navListItem.vm.navItem).toBe(dummyRouters[0]);
  });

  it('値がDOMに反映されているか', () => {
    const aTag = navListItem.findComponent(RouterLinkStub);
    const imgTag = navListItem.find('img');

    expect(aTag.props().to === dummyRouters[0].to).toBe(true);
    expect(aTag.text() === dummyRouters[0].name).toBe(true);
    expect(imgTag.attributes().src === dummyRouters[0].img).toBe(true);
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
        routers: dummyRouters,
        ...propsData,
      },
    });
  };

  it('NavList初期値: isOpen, routers', () => {
    const wrapper = navList({ isOpen: false });
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
    // routers
    expect(wrapper.vm.$options.props.routers.required).toBe(true);
    console.log(wrapper.vm.$options.props.routers.default());
    expect(wrapper.vm.routers).toBe(dummyRouters);
  });

  it('値がDOMに反映されているか', () => {
    const wrapper = navList({ isOpen: false });
    const aTag = wrapper.findComponent(RouterLinkStub);
    const imgTag = wrapper.find('img');

    expect(aTag.props().to === dummyRouters[0].to).toBe(true);
    expect(aTag.text() === dummyRouters[0].name).toBe(true);
    expect(imgTag.attributes().src === dummyRouters[0].img).toBe(true);
  });

  it('isOpenがtrueの時に`.nav__list`が表示', () => {
    const wrapper = navList({ isOpen: true });
    expect(wrapper.find('.nav__list').element.style.display !== 'none').toBe(true);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('isOpenがfalseの時に`.nav__list`が非表示', () => {
    const wrapper = navList({ isOpen: false });
    expect(wrapper.find('.nav__list').element.style.display === 'none').toBe(true);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('$emitでメソッド`change-state`が呼ばれた', () => {
    const wrapper = navList({ isOpen: true });
    wrapper.vm.$emit('change-state');
    expect(wrapper.emitted('change-state')).toBeTruthy();
  });
});
