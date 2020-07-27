<template>
  <div id="app">
    <nav-bar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/Nav/TheNav';

export default {
  components: {
    'nav-bar': NavBar,
  },
};
</script>

<style>
#app {
  text-decoration: none;
  text-align: center;
}
</style>
