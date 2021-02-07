import { shallowMount } from '@vue/test-utils';
import ProfileBox from './ProfileBox.vue';
import { dummyProfile } from '@/__testdata__/testdata.js';

describe('ProfileBox', () => {
  const profileBox = propsData =>
    shallowMount(ProfileBox, {
      propsData: {
        ...propsData
      }
    });

  it('ProfileBox初期値: profile', () => {
    const wrapper = profileBox({ profile: dummyProfile });
    // profile
    expect(wrapper.vm.$options.props.profile.required).toBe(true);
    expect(wrapper.vm.profile).toBe(dummyProfile);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
