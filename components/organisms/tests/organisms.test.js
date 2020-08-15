import { mount, RouterLinkStub } from '@vue/test-utils';
import BaseNav from '../BaseNav.vue';

// NavIcon
describe('BaseNav', () => {
  const baseNav = mount(BaseNav, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      isOpen: true,
    },
  });

  it('changeStateのテスト', () => {
    expect(baseNav.vm.$data.isOpen).toBe(false);
    baseNav.vm.changeState();
    expect(baseNav.vm.$data.isOpen).toBe(true);
  });
});
