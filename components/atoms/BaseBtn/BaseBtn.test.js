import { shallowMount } from '@vue/test-utils';
import BaseBtn from './BaseBtn.vue';

describe('BaseBtn', () => {
  const dummyButtonText = 'ダミーボタンテキスト';
  const baseBtn = shallowMount(BaseBtn, {
    slots: {
      default: dummyButtonText,
    },
  });

  it('slotがDOMに反映されているか', () => {
    const btnTag = baseBtn.find('button');
    expect(btnTag.text()).toBe(dummyButtonText);
    expect(btnTag.html()).toMatchSnapshot();
  });

  it('btnClickを実行した時、`btn-click`のイベントが発生するか', () => {
    baseBtn.vm.btnClick();
    expect(baseBtn.emitted('btn-click')).toBeTruthy();
  });
});
