import { mount } from '@vue/test-utils';
import CardList from './CardList.vue';
import { dummyCards, dummyCardsLink } from '@/__testdata__/testdata.js';

// CardList
describe('CardList', () => {
  const cardList = propsData =>
    mount(CardList, {
      propsData: {
        ...propsData
      }
    });

  it('CardListの初期値(linkなし): cards', () => {
    const wrapper = cardList({ cards: dummyCards });
    // cards
    expect(wrapper.vm.$options.props.cards.required).toBe(true);
    expect(wrapper.vm.cards).toBe(dummyCards);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('CardListの初期値(linkあり): cards', () => {
    const wrapper = cardList({ cards: dummyCardsLink });
    // cards
    expect(wrapper.vm.$options.props.cards.required).toBe(true);
    expect(wrapper.vm.cards).toBe(dummyCardsLink);
    // aタグが表示されているか
    const aTag = wrapper.findAll('a');
    expect(aTag.at(0).text()).toBe('WebSite');
    expect(aTag.at(1).text()).toBe('GitHub');
    expect(wrapper.vm.cards).toBe(dummyCardsLink);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
