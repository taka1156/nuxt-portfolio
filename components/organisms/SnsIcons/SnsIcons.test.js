import { shallowMount } from '@vue/test-utils';
import SnsIcons from './SnsIcons.vue';
import { dummySnsIcons } from '@/__testdata__/testdata.js';

describe('SnsIcons', () => {
  const snsIcons = propsData =>
    shallowMount(SnsIcons, {
      propsData: {
        ...propsData
      }
    });

  it('SnsIcons初期値: snsIcons', () => {
    const wrapper = snsIcons({ snsIcons: dummySnsIcons });
    // snsIcons
    expect(wrapper.vm.$options.props.snsIcons.required).toBe(true);
    expect(wrapper.vm.snsIcons).toBe(dummySnsIcons);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
