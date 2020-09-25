import { mount, RouterLinkStub } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import NavList from '../NavList.vue';
import NavListItem from '../NavListItem.vue';
import CardList from '../CardList.vue';
import CardListItem from '../CardListItem.vue';

const dummyRoutes = [
  { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
];

const dummyCards = [
  {
    title: 'ダミータイトル',
    img: { url: 'http://placehold.jp/150x150.png' },
    content2: '詳細',
  },
  {
    title: 'ダミータイトル',
    img: { url: 'http://placehold.jp/150x150.png' },
    content2: '詳細',
  },
];

const dummyCardsLink = [
  {
    title: 'ダミータイトル',
    img: { url: 'http://placehold.jp/150x150.png' },
    content2: '詳細',
    link: 'https://taka1156.site',
  },
  {
    title: 'ダミータイトル',
    img: { url: 'http://placehold.jp/150x150.png' },
    content2: '詳細',
    link: 'https://github.com/taka1156/nuxt-portoflio',
  },
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

// CardListItem
describe('CardListItem', () => {
  const cardListItem = propsData => {
    return mount(CardListItem, {
      propsData: {
        ...propsData,
      },
    });
  };

  it('CardListItemの初期値(linkなし): dummyCards', () => {
    const wrapper = cardListItem({ cardInfo: dummyCards[0] });
    console.log(wrapper.vm.$options.props.cardInfo.default());
    expect(wrapper.vm.$options.props.cardInfo.required).toBe(true);
    // linkがない時はボタンがないことを確認
    const btnTag = wrapper.find('button');
    expect(btnTag.exists()).toBe(false);
    expect(wrapper.vm.cardInfo).toBe(dummyCards[0]);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('CardListItemの初期値(linkあり): dummyCardsLink', () => {
    const wrapper = cardListItem({ cardInfo: dummyCardsLink[0] });
    expect(wrapper.vm.$options.props.cardInfo.required).toBe(true);
    // linkがある時はボタンがあることを確認
    const btnTag = wrapper.find('button');
    expect(btnTag.text()).toBe('WebSite');
    expect(wrapper.vm.cardInfo).toBe(dummyCardsLink[0]);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('isGithubRepoメソッド: dummyCardsLink', () => {
    // 空だとエラーを吐くのでデータを入れる
    const wrapper = cardListItem({ cardInfo: dummyCardsLink[0] });
    // githubのリポジトリとデモサイトの時の比較
    expect(wrapper.vm.isGithubRepo(dummyCardsLink[0])).toBe(false);
    expect(wrapper.vm.isGithubRepo(dummyCardsLink[1])).toBe(true);
  });

  it('jumpメソッド', () => {
    // https://remarkablemark.org/blog/2018/11/17/mock-window-location/#update-for-jsdom-14
    delete window.location;
    window.location = { assign: jest.fn() };
    const wrapper = cardListItem({ cardInfo: dummyCardsLink[0] });
    wrapper.vm.jump(dummyCardsLink[0]);
    expect(window.location.assign).toBeCalledWith(dummyCardsLink[0].link);
  });
});

// CardList
describe('CardList', () => {
  const cardList = propsData => {
    return mount(CardList, {
      propsData: {
        ...propsData,
      },
    });
  };

  it('CardListの初期値(linkなし): dummyCards', () => {
    const wrapper = cardList({ cards: dummyCards });
    console.log(wrapper.vm.$options.props.cards.default());
    expect(wrapper.vm.$options.props.cards.required).toBe(true);
    expect(wrapper.vm.cards).toBe(dummyCards);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('CardListの初期値(linkあり): dummyCardsLink', () => {
    const wrapper = cardList({ cards: dummyCardsLink });
    const btnTag = wrapper.findAll('button');
    expect(wrapper.vm.$options.props.cards.required).toBe(true);
    expect(btnTag.at(0).text()).toBe('WebSite');
    expect(btnTag.at(1).text()).toBe('GitHub');
    expect(wrapper.vm.cards).toBe(dummyCardsLink);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
