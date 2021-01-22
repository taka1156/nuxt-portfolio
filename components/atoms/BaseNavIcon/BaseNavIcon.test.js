import { mount } from '@vue/test-utils';
import BaseNavIcon from './BaseNavIcon.vue';

// NavIcon
describe('BaseNavIcon', () => {
  const baseNavIcon = propsData =>
    mount(BaseNavIcon, {
      slots: {
        default: 'NAVI'
      },
      propsData: {
        ...propsData
      }
    });

  it('開いた時(閉じるアイコン表示)', () => {
    const wrapper = baseNavIcon({ isOpen: true });
    const TOP = wrapper.find('.base-nav-icon__top');
    const MIDDLE = wrapper.find('.base-nav-icon__middle');
    const BOTTOM = wrapper.find('.base-nav-icon__bottom');
    expect(TOP.classes()).toContain('base-nav-icon__top--open');
    expect(MIDDLE.classes()).toContain('base-nav-icon__middle--fade');
    expect(BOTTOM.classes()).toContain('base-nav-icon__bottom--open');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('閉じる時(開くアイコン表示)', () => {
    const wrapper = baseNavIcon({ isOpen: false });
    const TOP = wrapper.find('.base-nav-icon__top');
    const MIDDLE = wrapper.find('.base-nav-icon__middle');
    const BOTTOM = wrapper.find('.base-nav-icon__bottom');
    expect(TOP.classes()).toContain('base-nav-icon__top--close');
    expect(MIDDLE.classes()).not.toContain('base-nav-icon__middle--fade');
    expect(BOTTOM.classes()).toContain('base-nav-icon__bottom--close');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('btnClickを実行した時、`btn-click`のイベントが発生するか', () => {
    const wrapper = baseNavIcon({ isOpen: false });
    wrapper.vm.btnClick();
    expect(wrapper.emitted('btn-click')).toBeTruthy();
  });
});
