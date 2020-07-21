export default {
  data() {
    return {
      baseURL: process.env.BASE_URL,
      // metaデータは継承先で定義
      meta: {
        title: '',
        description: '',
        type: '',
        url: '',
        image: '',
      },
    };
  },
};
