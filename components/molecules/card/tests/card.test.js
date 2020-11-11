import { mount } from '@vue/test-utils';
import CardListItem from '../CardListItem.vue';

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
