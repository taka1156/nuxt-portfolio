import axios from 'axios';
const CONTENT_MAX = 20;

const api = 'https://taka_portfolio.microcms.io/api/v1';

const generateRouter = async MICRO_CMS => {
  const skills = axios
    .get(`${api}/skill`, {
      params: { fields: 'title,img,content2', limit: CONTENT_MAX },
      headers: { 'X-API-KEY': MICRO_CMS },
    })
    .then(({ data }) => {
      return data.contents.map(skill => {
        return skill;
      });
    });

  const portfolios = axios
    .get(`${api}/portfolio`, {
      params: { fields: 'title,img,content2,link', limit: CONTENT_MAX },
      headers: { 'X-API-KEY': MICRO_CMS },
    })
    .then(({ data }) => {
      return data.contents.map(portfolio => {
        return portfolio;
      });
    });

  return Promise.all([skills, portfolios]).then(values => {
    return [
      { route: '/skill/', payload: values[0] },
      { route: '/portfolio/', payload: values[1] },
    ];
  });
};

export { generateRouter };
