import { shallowMount } from '@vue/test-utils';
import NavIcon from '../NavIcon.vue';
import NavImg from '../NavImg.vue';
import NavLogo from '../NavLogo.vue';
import NavText from '../NavText.vue';

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
    const TOP = wrapper.find('.border__top');
    const MIDDLE = wrapper.find('.border__middle');
    const BOTTOM = wrapper.find('.border__bottom');
    expect(TOP.classes()).toContain('border__top--open');
    expect(MIDDLE.classes()).toContain('border__middle--fade');
    expect(BOTTOM.classes()).toContain('border__bottom--open');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('閉じる時(開くアイコン表示)', () => {
    const wrapper = navIcon({ isOpen: false });
    const TOP = wrapper.find('.border__top');
    const MIDDLE = wrapper.find('.border__middle');
    const BOTTOM = wrapper.find('.border__bottom');
    expect(TOP.classes()).toContain('border__top--close');
    expect(MIDDLE.classes()).not.toContain('border__middle--fade');
    expect(BOTTOM.classes()).toContain('border__bottom--close');
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
    expect(imgTag.attributes().src === dummyImg.img).toBe(true);
    expect(imgTag.attributes().alt === dummyImg.alt).toBe(true);
    expect(navImg.html()).toMatchSnapshot();
  });
});

// NavLogo
describe('NavLogo', () => {
  it('値がDOMに反映されているか', () => {
    const dummyLogo = 'ダミーロゴ';
    const navLogo = shallowMount(NavLogo, {
      propsData: {
        navLogo: dummyLogo,
      },
    });
    expect(navLogo.text() === dummyLogo).toBe(true);
    expect(navLogo.html()).toMatchSnapshot();
  });
});

// NavText
describe('NavText', () => {
  it('値がDOMに反映されているか', () => {
    const dummyText = 'ダミーテキスト';
    const navText = shallowMount(NavText, {
      propsData: {
        navText: dummyText,
      },
    });
    expect(navText.text() === dummyText).toBe(true);
    expect(navText.html()).toMatchSnapshot();
  });
});
