<template>
  <div>
    <base-heading1> Profile </base-heading1>

    <section class="contents">
      <h2 class="contents__heading">自己紹介</h2>
      <profile-box :profile="profile" />
    </section>

    <section class="contents">
      <h2 class="contents__heading">githubの活動</h2>
      <contribution-box
        :img-url="contributionImg.imgUrl"
        :img-alt="contributionImg.imgAlt"
      />
    </section>

    <section class="contents">
      <h2 class="contents__heading">取得した資格</h2>
      <profile-list :profile="exams" />
    </section>

    <section class="contents">
      <h2 class="contents__heading">SNSやGitHub等</h2>
      <sns-icons :sns-icons="snsIcons" />
    </section>
  </div>
</template>

<script>
import BaseHeading1 from '@/components/atoms/BaseHeading1/BaseHeading1';
import ProfileBox from '@/components/organisms/ProfileBox/ProfileBox';
import ContributionBox from '@/components/organisms/ContributionBox/ContributionBox';
import ProfileList from '@/components/organisms/ProfileList/ProflieList';
import SnsIcons from '@/components/organisms/SnsIcons/SnsIcons';
import meta from 'assets/js/mixin/meta.mixin.js';
import {
  PROFILE,
  GITHUB_CONTRIBUTION_IMG,
  EXAMS,
  SNS_ICONS
} from '@/constants/index.js';

export default {
  name: 'Profile',
  components: {
    BaseHeading1,
    ProfileBox,
    ContributionBox,
    ProfileList,
    SnsIcons
  },
  mixins: [meta],
  data() {
    return {
      profile: PROFILE,
      contributionImg: GITHUB_CONTRIBUTION_IMG,
      exams: EXAMS,
      snsIcons: SNS_ICONS
    };
  },
  head() {
    // metaタグの設定
    this.meta.title = 'Profile';
    this.meta.description = '最近行っていることや保有資格について紹介します。';
    this.meta.type = 'article';
    this.meta.url = `${this.baseURL}/profile`;
    this.meta.image = `${this.baseURL}/img/ogp/profile.png`;

    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.meta.type
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.meta.url
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.image
        },
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        }
      ]
    };
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 0 0 10px;
  border-bottom: 2.5px solid lightgray;
}

.contents {
  margin: 1.25em auto 2em;
}

.contents__heading {
  font-size: 1.25em;
}
</style>
