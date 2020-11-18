import { mount } from '@vue/test-utils';
import CardList from './CardList.vue';
import { dummyCards, dummyCardsLink } from '@/__testdata__/testdata.js';

// CardList
describe('CardList', () => {
  const cardList = propsData => {
    return mount(CardList, {
      propsData: {
        ...propsData,
      },
    });
  };

  it('jumpメソッド(引数あり)', () => {
    // https://remarkablemark.org/blog/2018/11/17/mock-window-location/#update-for-jsdom-14
    delete window.location;
    window.location = { assign: jest.fn() };
    const wrapper = cardList({ cards: dummyCardsLink });
    wrapper.vm.jump(dummyCardsLink[0]);
    expect(window.location.assign).toBeCalledWith(dummyCardsLink[0].link);
  });

  it('jumpメソッド(引数なし)', () => {
    // https://remarkablemark.org/blog/2018/11/17/mock-window-location/#update-for-jsdom-14
    delete window.location;
    window.location = { assign: jest.fn() };
    const wrapper = cardList({ cards: dummyCardsLink });
    wrapper.vm.jump();
    expect(window.location.assign).not.toBeCalledWith(dummyCardsLink[0].link);
  });

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
