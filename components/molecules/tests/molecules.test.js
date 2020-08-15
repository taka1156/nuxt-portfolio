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
    navBar.setProps({ isOpen: true });
    expect(navBar.vm.isOpen).toBe(true);
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
  const navList = mount(NavList, {
    stubs: {
      NuxtLink: RouterLinkStub,
      transition: false,
    },
    propsData: {
      isOpen: false,
      routers: dummyRouters,
    },
  });

  it('NavList初期値: isOpen, routers', () => {
    // isOpen
    expect(navList.vm.$options.props.isOpen.required).toBe(true);
    expect(navList.vm.isOpen).toBe(false);
    // routers
    expect(navList.vm.$options.props.routers.required).toBe(true);
    expect(navList.vm.routers).toBe(dummyRouters);
  });

  it('値がDOMに反映されているか', () => {
    const aTag = navList.findComponent(RouterLinkStub);
    const imgTag = navList.find('img');

    expect(aTag.props().to === dummyRouters[0].to).toBe(true);
    expect(aTag.text() === dummyRouters[0].name).toBe(true);
    expect(imgTag.attributes().src === dummyRouters[0].img).toBe(true);
  });

  it('isOpenがfalseの時に`.nav__list`が非表示', () => {
    navList.setProps({ isOpen: false });
    const disableNavList = navList.find('.nav__list');
    // style {'display', 'none'}が外れると未定義になる
    expect(disableNavList.attributes().display == null).toBe(true);
    // スナップショット
    expect(navList.html()).toMatchSnapshot();
  });

  it('isOpenがtrueの時に`.nav__list`が表示', () => {
    navList.setProps({ isOpen: true });
    const disableNavList = navList.find('.nav__list');
    expect(disableNavList.attributes().display !== 'none').toBe(true);
    // スナップショット
    expect(navList.html()).toMatchSnapshot();
  });

  it('$emitでメソッド`change-state`が呼ばれた', () => {
    navList.vm.$emit('change-state');
    expect(navList.emitted('change-state')).toBeTruthy();
  });

  it('クリックするとリストが閉じる', () => {
    // 初期状態を開く状態にする。
    navList.setProps({ isOpen: true });
    let disableNavList = navList.find('.nav__list');
    expect(disableNavList.attributes().display !== 'none').toBe(true);
    // クリックして閉じる
    navList.trigger('click');
    disableNavList = navList.find('.nav__list');
    expect(disableNavList.attributes().display == null).toBe(true);
  });
});
