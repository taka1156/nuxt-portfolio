import { shallowMount } from '@vue/test-utils';
import BaseLogo from './BaseLogo.vue';
import { dummyLogo } from '@/__testdata__/testdata.js';

// NavLogo
describe('BaseLogo', () => {
  it('値がDOMに反映されているか', () => {
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
