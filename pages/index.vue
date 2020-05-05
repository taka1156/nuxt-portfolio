<template>
  <div class="Splash">
    <div class="splash__bg">
      <div class="splash__logo">
        <div class="splash__title">Taka's&nbsp;Portfolio&nbsp;Site</div>
        <p class="splash__text">
          created&nbsp;by&nbsp;Taka
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  mounted() {
    const JUMP = setTimeout(() => {
      this.$router.push('/home');
      clearTimeout(JUMP);
    }, 1800);
  }
};
</script>

<style scoped>
.splash__bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  background-color: black;
  animation: anime-opacity 1.8s;
}

.splash__logo {
  padding-top: 40vh;
  position: 0 auto;
}

.splash__title,
.splash__text {
  color: white;
  font-family: 'Caveat', cursive;
  opacity: 0;
  animation: anime-opacity 1.8s;
}

.splash__title {
  font-size: 50px;
}

.splash__text {
  font-size: 2.5em;
}

@media (min-width: 790px) {
  .splash__title {
    font-size: 80px;
  }
}

@keyframes anime-opacity {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
