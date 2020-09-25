import { shallowMount } from '@vue/test-utils';
import NavIcon from '../NavIcon.vue';
import NavImg from '../NavImg.vue';
import NavLogo from '../NavLogo.vue';
import NavText from '../NavText.vue';
import CardTitle from '../CardTitle.vue';
import CardImg from '../CardImg.vue';
import CardText from '../CardText.vue';
import CardButton from '../CardButton.vue';

// 備考: 全て関数型コンポーネント

// NavIcon
describe('NavIcon', () => {
  const navIcon = propsData => {
    return shallowMount(NavIcon, {
      propsData: {
        ...propsData,
      },
    });
  };

  it('開いた時(閉じるアイコン表示)', () => {
    const wrapper = navIcon({ isOpen: true });
    const TOP = wrapper.find('.nav-icon__top');
    const MIDDLE = wrapper.find('.nav-icon__middle');
    const BOTTOM = wrapper.find('.nav-icon__bottom');
    expect(TOP.classes()).toContain('nav-icon__top--open');
    expect(MIDDLE.classes()).toContain('nav-icon__middle--fade');
    expect(BOTTOM.classes()).toContain('nav-icon__bottom--open');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('閉じる時(開くアイコン表示)', () => {
    const wrapper = navIcon({ isOpen: false });
    const TOP = wrapper.find('.nav-icon__top');
    const MIDDLE = wrapper.find('.nav-icon__middle');
    const BOTTOM = wrapper.find('.nav-icon__bottom');
    expect(TOP.classes()).toContain('nav-icon__top--close');
    expect(MIDDLE.classes()).not.toContain('nav-icon__middle--fade');
    expect(BOTTOM.classes()).toContain('nav-icon__bottom--close');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

// NavImg
describe('NavImg', () => {
  it('値がDOMに反映されているか', () => {
    const dummyImg = {
      img: 'http://placehold.jp/150x150.png',
      alt: 'ダミー画像',
    };
    const navImg = shallowMount(NavImg, {
      propsData: {
        navImg: dummyImg.img,
        imgAlt: dummyImg.alt,
      },
    });
    const imgTag = navImg.find('img');
    expect(imgTag.attributes().src).toBe(dummyImg.img);
    expect(imgTag.attributes().alt).toBe(dummyImg.alt);
    expect(navImg.html()).toMatchSnapshot();
  });
});

// NavLogo
describe('NavLogo', () => {
  it('値がDOMに反映されているか', () => {
    const dummyLogo = 'ダミーロゴ';
    const navLogo = shallowMount(NavLogo, {
      slots: {
        default: dummyLogo,
      },
    });
    expect(navLogo.text()).toBe(dummyLogo);
    expect(navLogo.html()).toMatchSnapshot();
  });
});

// NavText
describe('NavText', () => {
  it('値がDOMに反映されているか', () => {
    const dummyText = 'ダミーテキスト';
    const navText = shallowMount(NavText, {
      slots: {
        default: dummyText,
      },
    });
    expect(navText.text()).toBe(dummyText);
    expect(navText.html()).toMatchSnapshot();
  });
});

describe('CardButton', () => {
  it('slotがDOMに反映されているか', () => {
    const dummyButtonText = 'ダミーボタンテキスト';
    const cardButton = shallowMount(CardButton, {
      slots: {
        default: dummyButtonText,
      },
    });
    const btnTag = cardButton.find('button');
    expect(btnTag.text()).toBe(dummyButtonText);
    expect(btnTag.html()).toMatchSnapshot();
  });
});

describe('CardImg', () => {
  it('値がDOMに反映されているか', () => {
    const dummyImg = {
      img: 'http://placehold.jp/150x150.png',
      alt: 'ダミー画像',
    };
    const navImg = shallowMount(CardImg, {
      propsData: {
        cardImg: dummyImg.img,
        imgAlt: dummyImg.alt,
      },
    });
    const imgTag = navImg.find('img');
    // v-lazyからsrcを取り出せない
    // expect(imgTag.attributes().src).toBe(dummyImg.img);
    expect(imgTag.attributes().alt).toBe(dummyImg.alt);
    expect(navImg.html()).toMatchSnapshot();
  });
});

describe('CardText', () => {
  it('値がDOMに反映されているか', () => {
    const dummyText = 'ダミーテキスト';
    const cardText = shallowMount(CardText, {
      slots: {
        default: dummyText,
      },
    });
    const pTag = cardText.find('p');
    expect(pTag.text()).toBe(dummyText);
    expect(pTag.html()).toMatchSnapshot();
  });
});

describe('CardTitle', () => {
  it('値がDOMに反映されているか', () => {
    const dummyTitle = 'ダミータイトル';
    const cardTitle = shallowMount(CardTitle, {
      slots: {
        default: dummyTitle,
      },
    });
    const hTag = cardTitle.find('h2');
    expect(hTag.text()).toBe(dummyTitle);
    expect(cardTitle.html()).toMatchSnapshot();
  });
});
