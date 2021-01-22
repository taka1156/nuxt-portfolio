<template>
  <div class="profile-box">
    <base-img :size="`free`" :img-url="profile.img" :img-alt="`プロフィール画像`" />
    <base-text>
      {{ profile.introduce }}
    </base-text>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-img--extend {
  display: block;
  width: 25%;
  height: 88%;
  padding: 0;
  margin: 10px;
}

::v-deep .base-text--extend {
  width: 75%;
  height: 90%;
  margin: auto 0 auto 0;
  font-size: 14px;
  line-height: normal;
  text-align: left;
  border-left: 0.5px dotted gray;
}

@media screen and (min-width: 768px) {
  ::v-deep .base-text--extend {
    font-size: 18px;
  }
}

.profile-box {
  display: flex;
  justify-content: center;
  width: 85%;
  height: 150px;
  padding: 0;
  margin: 0 auto;
  border: 0.5px solid gray;
  border-radius: 5px;
}
</style>
