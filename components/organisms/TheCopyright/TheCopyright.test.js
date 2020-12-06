import { mount } from '@vue/test-utils';
import TheCopyright from './TheCopyright.vue';

describe('TheNavigation', () => {
  const theCopyright = mount(TheCopyright);

  it('スナップショット', () => {
    expect(theCopyright.html()).toMatchSnapshot();
  });
});
