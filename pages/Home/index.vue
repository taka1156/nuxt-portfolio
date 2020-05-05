<template>
  <div class="Home">
    <div class="logo">
      <h1 class="logo__title">Welcome to Taka's Portfolio</h1>
      <div class="logo__line" />
      <div class="other">
        <a href="https://github.com/taka1156" class="other__link">
          <img src="@/assets/img/github.png" value="github" class="other__icon" />
        </a>
        <a href="https://qiita.com/taka_1156" class="other__link">
          <img src="@/assets/img/qiita.png" value="Qiita" class="other__icon" />
        </a>
        <a href="https://mobile.twitter.com/taka_Program" class="other__link">
          <img src="@/assets/img/twitter.png" value="Twitter" class="other__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

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

.other {
  width: 85%;
  display: flex;
  margin: 10vh auto;
  justify-content: space-around;
}

.other__icon {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: solid 1px gray;
  background-color: gray;
}

.other__link {
  border-radius: 60px;
}
</style>
