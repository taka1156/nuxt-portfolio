import { shallowMount } from '@vue/test-utils';
import CardTitle from '../CardTitle.vue';
import CardImg from '../CardImg.vue';

describe('CardImg', () => {
  it('値がDOMに反映されているか', () => {
    const dummyImg = {
      img: 'http://placehold.jp/150x150.png',
      alt: 'ダミー画像',
    };
    const navImg = shallowMount(CardImg, {
      propsData: {
        imgUrl: dummyImg.img,
        imgAlt: dummyImg.alt,
        size: 'lg', //ナビゲーションはlgで固定
      },
    });
    const imgTag = navImg.find('img');
    // v-lazyからsrcを取り出せない
    // expect(imgTag.attributes().src).toBe(dummyImg.img);
    expect(imgTag.attributes().alt).toBe(dummyImg.alt);
    expect(navImg.html()).toMatchSnapshot();
  });
});

describe('CardTitle', () => {
  it('値がDOMに反映されているか', () => {
    const dummyTitle = 'ダミータイトル';
    const cardTitle = shallowMount(CardTitle, {
      slots: {
        default: dummyTitle,
      },
    });
    const hTag = cardTitle.find('h2');
    expect(hTag.text()).toBe(dummyTitle);
    expect(cardTitle.html()).toMatchSnapshot();
  });
});
