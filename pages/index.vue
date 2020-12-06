<template>
  <div>
    <div class="logo">
      <h1 class="logo__title">Welcome to Taka's Portfolio</h1>
      <div class="logo__line" />
      <div class="sns">
        <a href="https://github.com/taka1156" class="sns__link">
          <img src="@/assets/img/github.png" alt="GithubLogo" class="sns__icon" />
        </a>
        <a href="https://qiita.com/taka_1156" class="sns__link">
          <img src="@/assets/img/qiita.png" alt="QiitaLogo" class="sns__icon" />
        </a>
        <a href="https://twitter.com/taka_1156" class="sns__link">
          <img src="@/assets/img/twitter.png" alt="TwitterLogo" class="sns__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Home',
  mixins: [meta],
  head() {
    // metaタグの設定
    this.meta.title = 'Top';

    return {
      title: this.meta.title,
    };
  },
};
</script>

<style scoped>
.logo {
  width: 95%;
  margin: 35vh auto 0;
  text-align: center;
}

.logo__title {
  font-size: 40px;
}

.logo__line {
  width: 100%;
  margin-top: 10px;
  border: 1px solid black;
}

.sns {
  display: flex;
  justify-content: space-around;
  width: 85%;
  margin: 40px auto;
}

.sns__icon {
  width: 60px;
  height: 60px;
  background-color: gray;
  border: solid 1px gray;
  border-radius: 60px;
}

.sns__link {
  border-radius: 60px;
}
</style>
