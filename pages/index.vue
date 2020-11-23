<template>
  <div class="Home">
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
export default {
  name: 'Home',
};
</script>

<style scoped>
.logo {
  text-align: center;
  margin-top: 30vh;
}

.logo__title {
  font-size: 40px;
}

.logo__line {
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: black;
  height: 2px;
  width: 100%;
}

.sns {
  width: 85%;
  display: flex;
  margin: 10vh auto;
  justify-content: space-around;
}

.sns__icon {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: solid 1px gray;
  background-color: gray;
}

.sns__link {
  border-radius: 60px;
}
</style>
