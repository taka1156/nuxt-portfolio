<template>
  <div class="CardLayout">
    <article class="contents" @click="jump(cardInfo.link ? cardInfo.link : '')">
      <h2 class="contents__title">{{ cardInfo.title }}</h2>
      <figure>
        <img :src="cardInfo.img.url" class="contents__img" />
        <figcaption>
          <p class="contents__text">
            {{ cardInfo.content1 }}
          </p>
          <p class="contents__text">
            {{ cardInfo.content2 }}
          </p>
        </figcaption>
      </figure>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CardLayout',
  props: {
    cardInfo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    jump(link) {
      if (link !== '') {
        location.href = link;
      }
    },
  },
};
</script>

<style scoped>
.contents {
  width: 100%;
  height: 100%;
  margin: 2vh auto;
}

.contents__title {
  font-size: 1.75em;
  line-height: 0em;
}

.contents__img {
  height: 55%;
  width: 98%;
  vertical-align: bottom;
  transition: opacity 0.3s ease;
}

.contents__text {
  width: 98%;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-word;
  border: solid 0.5px lightgray;
}
</style>
