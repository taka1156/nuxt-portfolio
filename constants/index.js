const LOGO_TEXT = "Taka'sPortfolioSite";
const ROUTES = [
  {
    name: 'Top',
    to: '/',
    img: require('assets/img/ui/home.png')
  },
  {
    name: 'Profile',
    to: '/profile/',
    img: require('assets/img/ui/profile.png')
  },
  {
    name: 'Skill',
    to: '/skill/',
    img: require('assets/img/ui/skill.png')
  },
  {
    name: 'Portfolio',
    to: '/portfolio/',
    img: require('assets/img/ui/portfolio.png')
  }
];
const COPYRIGHT_URL = 'https://policy.taka1156.site/';

const SNS_ICONS = [
  {
    name: 'GitHub',
    img: require('@/assets/img/github-logo.png'),
    link: 'https://github.com/taka1156'
  },
  {
    name: 'Qiita',
    img: require('@/assets/img/qiita-logo.png'),
    link: 'https://qiita.com/taka_1156'
  },
  {
    name: 'Twitter',
    img: require('@/assets/img/twitter-logo.png'),
    link: 'https://twitter.com/taka_1156'
  },
  {
    name: 'Blog',
    img: require('@/assets/img/prof.png'),
    link: 'https://blog.taka1156.site'
  }
];

const PROFILE = {
  img: require('@/assets/img/prof.png'),
  introduce:
    'プログラミングは、大学1年から触り始めC、Java、Python3などを学びました。現在は、TypeScriptやPHP(+Laravel)について学習しています。'
};

const GITHUB_CONTRIBUTION_IMG = {
  imgUrl: 'https://ghchart.rshah.org/taka1156',
  imgAlt: "taka1156's Github chart"
};

const EXPERIENCES = {
  values: [
    'JS(ES6)について学習。',
    'TypeScriptの学習',
    'Laravelの学習',
    'CSS/SASSの学習'
  ]
};

const EXAMS = {
  title: '資格',
  values: [
    'ITパスポート',
    '情報セキュリティマネジメント',
    '基本情報技術者',
    '応用情報技術者'
  ]
};

export {
  LOGO_TEXT,
  ROUTES,
  COPYRIGHT_URL,
  SNS_ICONS,
  PROFILE,
  EXPERIENCES,
  EXAMS,
  GITHUB_CONTRIBUTION_IMG
};
