<template>
  <div>
    <nav>
      <nav-bar :logo-text="logoText" :is-open="isOpen" @change-state="changeState" />
      <nav-list :is-open="isOpen" :routes="routes" @change-state="changeState" />
    </nav>
  </div>
</template>

<script>
import NavBar from '../../molecules/NavBar/NavBar';
import NavList from '../../molecules/NavList/NavList';

export default {
  name: 'TheNavigation',
  components: {
    'nav-bar': NavBar,
    'nav-list': NavList
  },
  props: {
    /**
     * ロゴテキスト
     */
    logoText: {
      type: String,
      required: true
    },
    /**
     * ナビゲーションの項目が定義された配列
     */
    routes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeState(isOpen) {
      /**
       * ナビゲーションの開閉状態を変更
       */
      this.isOpen = isOpen;
    }
  }
};
</script>
