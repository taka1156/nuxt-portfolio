import { firebase } from './FireBase.js';

export default () => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  firebase.analytics();
};
