<template>
  <div>
    <nav>
      <nav-bar :logo-text="logoText" :is-open="isOpen" @change-state="changeState" />
      <nav-list :is-open="isOpen" :routers="routers" @change-state="changeState" />
    </nav>
  </div>
</template>

<script>
import NavBar from '../molecules/NavBar';
import NavList from '../molecules/NavList';

export default {
  name: 'BaseNav',
  components: {
    'nav-bar': NavBar,
    'nav-list': NavList,
  },
  props: {
    logoText: {
      type: String,
      default: 'Please Setting Title',
      required: true,
    },
    routers: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    changeState() {
      // ナビゲーションバーの開閉管理
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
