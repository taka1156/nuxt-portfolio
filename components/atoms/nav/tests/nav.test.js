import { shallowMount } from '@vue/test-utils';
import NavIcon from '../NavIcon.vue';
import NavImg from '../NavImg.vue';
import NavLogo from '../NavLogo.vue';

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
    // スナップショット
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
    // スナップショット
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
    // スナップショット
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
    // スナップショット
    expect(navLogo.html()).toMatchSnapshot();
  });
});
