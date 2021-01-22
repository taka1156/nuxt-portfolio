<template>
  <div class="sns-icon">
    <base-link :route-to="sns.link" :is-target="true">
      <base-img :size="`lg`" :img-url="sns.img" :img-alt="`${sns.name}アイコン`" />
      {{ sns.name }}
    </base-link>
  </div>
</template>

<script>
import BaseLink from '@/components/atoms/BaseLink/BaseLink';
import BaseImg from '@/components/atoms/BaseImg/BaseImg';

export default {
  name: 'SnsIcon',
  components: {
    'base-link': BaseLink,
    'base-img': BaseImg
  },
  props: {
    sns: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-link--extend {
  display: block;
  margin: 0 auto;
}

.sns-icon {
  display: flex;
  width: 25%;
}
</style>
