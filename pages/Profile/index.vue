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
              <li>VueやNuxtについて、作りながら学ぶ。</li>
              <li>JavaScript(ES6)について学習。</li>
              <li>electronでデスクトップアプリを作る</li>
              <li>laravelの学習</li>
            </ul>
          </div>
        </section>

        <section class="contents">
          <h2 class="contents__title">これからやりたいこと</h2>
          <div class="contents__box">
            <ul class="contents__list">
              <li>Express.jsの学習</li>
              <li>MEVNでサーバ環境構築。</li>
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
              <li>VScode</li>
              <li>docker(+ docker-compose)</li>
              <li>Laradock</li>
              <li>phpMyAdmin</li>
            </ul>
          </div>
        </section>

        <section class="contents">
          <h2 class="contents__title">資格一覧</h2>
          <table class="contents__box">
            <tbody v-for="(skill, index) in Skills" :key="index">
              <tr>
                <th class="table-title" colspan="2">{{ skill.name }}</th>
              </tr>
              <tr>
                <th width="30%">合格日</th>
                <th width="60%">{{ skill.contents }}</th>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      Skills: [
        {
          name: 'ITパスポート',
          contents: '2017年 10月'
        },
        {
          name: '情報セキュリティマネジメント',
          contents: '2018年 5月'
        },
        {
          name: '基本情報技術者試験',
          contents: '2018年 11月'
        },
        {
          name: '応用情報技術者試験',
          contents: '2019年  6月'
        }
      ]
    };
  }
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
  height: 30%;
  width: 30%;
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

@media (min-width: 790px) {
  .contents__box {
    width: 60%;
  }

  .jumbotron {
    width: 80%;
  }
}

.contents__list {
  text-align: left;
}

table {
  width: 97%;
  border-collapse: collapse;
}

.table-title {
  background-color: #d3d3d3;
}

tr,
th {
  border: solid 3px #d3d3d3;
}
</style>
