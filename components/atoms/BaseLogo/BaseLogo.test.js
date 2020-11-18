import { shallowMount } from '@vue/test-utils';
import BaseLogo from './BaseLogo.vue';

// NavLogo
describe('BaseLogo', () => {
  it('値がDOMに反映されているか', () => {
    const dummyLogo = 'ダミーロゴ';
    const baseLogo = shallowMount(BaseLogo, {
      slots: {
        default: dummyLogo,
      },
    });
    expect(baseLogo.text()).toBe(dummyLogo);
    // スナップショット
    expect(baseLogo.html()).toMatchSnapshot();
  });
});
