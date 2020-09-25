import { mount, RouterLinkStub } from '@vue/test-utils';
import PortfolioNavigation from '../PortfolioNavigation.vue';
import CardList from '../CardList.vue';

// BaseNav
describe('BaseNav', () => {
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

// BaseCard
describe('BaseCads', () => {
  const cardList = propsData => {
    return mount(CardList, {
      propsData: {
        ...propsData,
      },
    });
  };

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
