<template>
  <div class="Profile">
    <div class="container">
      <h1>Profile</h1>

      <div class="jumbotron">
        <img class="profile-icon contents" src="@/assets/img/prof.png" />

        <section class="contents">
          <h2 class="contents__title">最近やっていること</h2>
          <div class="contents__box">
            <ul class="contents__list">
              <li>ConohaでLaravel環境を作って開発</li>
              <li>JavaScript(ES6)について学習。</li>
              <li>FireBaseを利用した開発</li>
              <li>Laravelの学習</li>
            </ul>
          </div>
        </section>

        <section class="contents">
          <h2 class="contents__title">これからやりたいこと</h2>
          <div class="contents__box">
            <ul class="contents__list">
              <li>TypeScriptの学習</li>
              <li>Vue + Ionicでアプリ作成</li>
              <li>SASSの学習</li>
            </ul>
          </div>
        </section>

        <section class="contents">
          <h2 class="contents__title">よく使うツール</h2>
          <div class="contents__box">
            <ul class="contents__list">
              <li>Homebrew</li>
              <li>Git</li>
              <li>VS code</li>
              <li>Docker(+ docker-compose)</li>
              <li>LaraDock</li>
              <li>phpMyAdmin</li>
            </ul>
          </div>
        </section>

        <section class="contents">
          <h2 class="contents__title">資格</h2>
          <div class="contents__box">
            <ul class="contents__list">
              <li>ITパスポート【2017/10】</li>
              <li>情報セキュリティマネジメント【2018/5】</li>
              <li>基本情報技術者【2018/11】</li>
              <li>応用情報技術者【2019/6】</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style scoped>
.jumbotron {
  margin: 3rem auto;
  width: 90%;
  border-radius: 5px;
  border: 3px solid #d3d3d3;
  background-color: white;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
}

.profile-icon {
  height: 25%;
  width: 25%;
}

.contents {
  margin: 1.25em auto 1.25em;
}

.contents__title {
  font-size: 1.75rem;
}

.contents__box {
  margin: 0 auto;
  width: 90%;
}

.contents__list {
  width: 85%;
  margin: 0 auto;
  text-align: left;
  list-style-type: none;
  padding: 0;
}

.contents__list li {
  border: solid 1px dimgray;
  position: relative;
  margin: 7px auto;
  font-size: 0.5em;
  font-weight: bold;
  padding-left: 40px;
  line-height: 30px;
  color: dimgray;
}

.contents__list li:before {
  content: ' ';
  position: absolute;
  left: 0px;
  width: 30px;
  height: 30px;
  background: dimgray;
  top: 0%;
}

@media (min-width: 790px) {
  .profile-icon {
    height: 20%;
    width: 20%;
  }

  .contents__box {
    width: 60%;
  }

  .jumbotron {
    width: 80%;
  }

  .contents__list li {
    font-size: 16px;
  }
}
</style>
