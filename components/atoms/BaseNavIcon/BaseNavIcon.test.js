import { shallowMount } from '@vue/test-utils';
import NavIcon from './BaseNavIcon.vue';

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
