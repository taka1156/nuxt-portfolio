<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar__box">
        <nav-logo>{{ logoText }}</nav-logo>
        <div @click="$emit('change-state')">
          <nav-icon :is-open="isOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavIcon from '../atoms/NavIcon';
import NavLogo from '../atoms/NavLogo';

export default {
  name: 'NavBar',
  components: {
    'nav-icon': NavIcon,
    'nav-logo': NavLogo,
  },
  props: {
    logoText: {
      type: String,
      default: 'Please Setting Logo',
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(12, 12, 12, 0.9);
  z-index: 2;
}

.nav-bar__box {
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  margin: 0.5em auto;
}
</style>
