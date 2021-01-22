<template>
  <component
    :is="isInternalLink ? 'nuxt-link' : 'a'"
    :to="isInternalLink ? routeTo : false"
    :href="isInternalLink ? false : routeTo"
    tag="a"
    class="base-link--extend"
    v-bind="isTarget ? { target: '_blank', rel: 'noopener noreferrer' } : false"
  >
    <!-- @slot リンクのクリックに指定したいもの -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    /**
     * nuxt-linkの遷移先
     */
    routeTo: {
      type: [String, Object],
      required: true
    },
    isTarget: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInternalLink() {
      /**
       * ルーティングか、外部リンクどちらか判定する。
       */
      if (typeof this.routeTo === 'object') {
        return true;
      }
      return `${this.routeTo}`.indexOf('http') === -1;
    }
  }
};
</script>

<style scoped>
a,
.nuxt-link {
  text-decoration: none;
  cursor: pointer;
}
</style>
