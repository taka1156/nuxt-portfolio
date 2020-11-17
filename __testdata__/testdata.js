const MAX_NAV_DATA = 4;
const MAX_PROFILE_DATA = 4;
const MAX_CARD_DATA = 6;
const dummyImgUrl = 'http://placehold.jp/150x150.png';
const GITHUB_URL = 'https://github.com/taka1156/audio-player';
const WEBSITE_URL = 'https://takatechblog.netlify.app/';

// factory
const dummyFactory = (num, fn) => {
  return [...new Array(num)].map((_, i) => fn(i + 1));
};

// template
const dummyNavTemplate = () => ({
  name: 'ダミーナビゲーション',
  to: '/test1',
  img: dummyImgUrl,
});

const dummyCardTemplate = () => ({
  title: 'ダミーカード',
  img: { url: dummyImgUrl },
  content2:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
});

const dummyCardLinkTemplate = i => ({
  title: 'ダミーカード',
  img: { url: dummyImgUrl },
  content2:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
  link: i % 2 === 0 ? GITHUB_URL : WEBSITE_URL,
});

const dummyProfileTemplate = () => {
  return 'ダミープロフ';
};

const dummyImg = {
  imgUrl: dummyImgUrl,
  imgAlt: 'ダミーの画像',
};

const dummyRoutes = dummyFactory(MAX_NAV_DATA, () => dummyNavTemplate());

const dummyCards = dummyFactory(MAX_CARD_DATA, () => dummyCardTemplate());

const dummyCardsLink = dummyFactory(MAX_CARD_DATA, i => dummyCardLinkTemplate(i));

const dummyProfiles = dummyFactory(MAX_PROFILE_DATA, () => dummyProfileTemplate());

const dummyLogo = 'ダミーロゴ';

export {
  dummyImg,
  dummyLogo,
  dummyRoutes,
  dummyCards,
  dummyCardsLink,
  dummyProfiles,
};
