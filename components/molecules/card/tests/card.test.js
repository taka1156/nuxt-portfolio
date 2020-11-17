import { mount } from '@vue/test-utils';
import CardListItem from '../CardListItem.vue';
import { dummyCards, dummyCardsLink } from '@/__testdata__/testdata.js';

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
    const wrapper = cardListItem({ card: dummyCards[0] });
    console.log(wrapper.vm.$options.props.card.default());
    expect(wrapper.vm.$options.props.card.required).toBe(true);
    // linkがない時はボタンがないことを確認
    const btnTag = wrapper.find('button');
    expect(btnTag.exists()).toBe(false);
    expect(wrapper.vm.card).toBe(dummyCards[0]);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('CardListItemの初期値(linkあり): dummyCardsLink', () => {
    const wrapper = cardListItem({ card: dummyCardsLink[0] });
    expect(wrapper.vm.$options.props.card.required).toBe(true);
    // linkがある時はボタンがあることを確認
    const btnTag = wrapper.find('button');
    expect(btnTag.text()).toBe('WebSite');
    expect(wrapper.vm.card).toBe(dummyCardsLink[0]);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('isGithubRepoメソッド: dummyCardsLink', () => {
    // 空だとエラーを吐くのでデータを入れる
    const wrapper = cardListItem({ card: dummyCardsLink[0] });
    // githubのリポジトリとデモサイトの時の比較
    expect(wrapper.vm.isGithubRepo(dummyCardsLink[0])).toBe(false);
    expect(wrapper.vm.isGithubRepo(dummyCardsLink[1])).toBe(true);
  });
});
