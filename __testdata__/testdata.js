const MAX_NAV_DATA = 4;
const MAX_PROFILE_DATA = 4;
const MAX_ICONS_DATA = 4;
const MAX_CARD_DATA = 6;
const dummyImgUrl = 'http://placehold.jp/150x150.png';
const dummyUrl = 'http://placehold.jp';
const dummyCopyrightUrl = 'http://placehold.jp';
const GITHUB_URL = 'https://github.com/taka1156/audio-player';
const WEBSITE_URL = 'https://takatechblog.netlify.app/';

const dummyOutsideLink = { routeTo: dummyUrl };
const dummyRouteStr = { routeTo: '/' };
const dummyRouteObj = {
  routeTo: {
    name: 'sample-id',
    params: { id: 1 }
  }
};

// factory
const dummyFactory = (num, fn) => {
  return [...new Array(num)].map((_, i) => fn(i + 1));
};

// template
const dummyNavTemplate = i => ({
  name: `ダミー${i}`,
  to: '/test1',
  img: dummyImgUrl
});

const dummyCardTemplate = i => ({
  title: `ダミー${i}`,
  img: { url: dummyImgUrl },
  content2:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい'
});

const dummyCardLinkTemplate = i => ({
  title: `ダミー${i}`,
  img: { url: dummyImgUrl },
  content2:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい',
  link: i % 2 === 0 ? GITHUB_URL : WEBSITE_URL
});

const dummyExamsTemplate = i => {
  return `ダミー${i}`;
};

const dummySnsIconTemplate = i => ({
  name: `ダミー${i}`,
  img: dummyImgUrl,
  link: dummyUrl
});

const dummyImg = {
  imgUrl: dummyImgUrl,
  imgAlt: 'ダミーイメージ'
};

const dummyRoutes = dummyFactory(MAX_NAV_DATA, i => dummyNavTemplate(i));

const dummyCards = dummyFactory(MAX_CARD_DATA, i => dummyCardTemplate(i));

const dummyCardsLink = dummyFactory(MAX_CARD_DATA, i => dummyCardLinkTemplate(i));

const dummySnsIcons = dummyFactory(MAX_ICONS_DATA, i => dummySnsIconTemplate(i));

const dummyExams = {
  title: 'ダミー',
  values: dummyFactory(MAX_PROFILE_DATA, () => dummyExamsTemplate())
};

const dummyProfile = {
  img: dummyImgUrl,
  introduce:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
};

const dummyLogo = 'ダミー';

export {
  dummyOutsideLink,
  dummyRouteStr,
  dummyRouteObj,
  dummyImg,
  dummyLogo,
  dummyRoutes,
  dummyCards,
  dummyCardsLink,
  dummyProfile,
  dummyExams,
  dummySnsIcons,
  dummyCopyrightUrl
};
