import { shallowMount } from '@vue/test-utils';
import ContributionBox from './ContributionBox.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

describe('contributionBox', () => {
  const contributionBox = propsData =>
    shallowMount(ContributionBox, {
      propsData: {
        ...propsData
      }
    });

  it('ContributionBox初期値: imgUrl, imgAlt', () => {
    const wrapper = contributionBox(dummyImg);
    // imgUrl
    expect(wrapper.vm.$options.props.imgUrl.required).toBe(true);
    expect(wrapper.vm.imgUrl).toBe(dummyImg.imgUrl);
    // imgAlt
    expect(wrapper.vm.$options.props.imgAlt.required).toBe(true);
    expect(wrapper.vm.imgAlt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
