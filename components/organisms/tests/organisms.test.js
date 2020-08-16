import { mount, RouterLinkStub } from '@vue/test-utils';
import BaseNav from '../BaseNav.vue';
import BaseCard from '../BaseCard.vue';

// BaseNav
describe('BaseNav', () => {
  const dummyLogo = 'ダミー';
  const dummyRouters = [
    { name: 'Top', to: '/home', img: 'http://placehold.jp/150x150.png' },
  ];
  const baseNav = mount(BaseNav, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      logoText: dummyLogo,
      routers: dummyRouters,
    },
  });

  it('NavBar初期値: logoText, routers', () => {
    // logoText
    expect(baseNav.vm.$options.props.logoText.required).toBe(true);
    expect(baseNav.vm.logoText).toBe(dummyLogo);
    // routers
    expect(baseNav.vm.$options.props.routers.required).toBe(true);
    console.log(baseNav.vm.$options.props.routers.default());
    expect(baseNav.vm.routers).toBe(dummyRouters);
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

  const baseCard = propsData => {
    return mount(BaseCard, {
      propsData: {
        ...propsData,
      },
    });
  };

  it('CardListの初期値(linkなし): dummyCards', () => {
    const wrapper = baseCard({ posts: dummyCards });
    // default
    console.log(wrapper.vm.$options.props.posts.default());
    expect(wrapper.vm.$options.props.posts.required).toBe(true);
    expect(wrapper.vm.posts).toBe(dummyCards);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('CardListの初期値(linkあり): dummyCardsLink', () => {
    const wrapper = baseCard({ posts: dummyCardsLink });
    const btnTag = wrapper.findAll('button');
    expect(wrapper.vm.$options.props.posts.required).toBe(true);
    expect(btnTag.at(0).text() === 'WebSite').toBe(true);
    expect(btnTag.at(1).text() === 'GitHub').toBe(true);
    expect(wrapper.vm.posts).toBe(dummyCardsLink);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
