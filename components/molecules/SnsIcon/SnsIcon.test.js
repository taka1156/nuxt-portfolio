import { mount } from '@vue/test-utils';
import SnsIcon from './SnsIcon.vue';
import { dummySnsIcons } from '@/__testdata__/testdata.js';

describe('SnsIcon', () => {
  const navListItem = mount(SnsIcon, {
    propsData: {
      sns: dummySnsIcons[0]
    }
  });

  it('SnsIcon初期値: sns', () => {
    // sns
    expect(navListItem.vm.$options.props.sns.required).toBe(true);
    expect(navListItem.vm.sns).toBe(dummySnsIcons[0]);
  });

  it('値がDOMに反映されているか', () => {
    const aTag = navListItem.find('a');
    const imgTag = navListItem.find('img');

    expect(aTag.attributes().href).toBe(dummySnsIcons[0].link);
    expect(aTag.text()).toBe(dummySnsIcons[0].name);
    expect(imgTag.attributes().src).toBe(dummySnsIcons[0].img);
    // スナップショット
    expect(navListItem.html()).toMatchSnapshot();
  });
});
