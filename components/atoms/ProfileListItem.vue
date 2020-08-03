<template functional>
  <li class="profilelist__item">{{ props.profileText }}</li>
</template>

<style scoped>
.profilelist__item {
  position: relative;
  margin: 7px auto;
  font-size: 14px;
  font-weight: bold;
  padding-left: 40px;
  line-height: 30px;
  text-align: left;
  color: dimgray;
  border: solid 1px dimgray;
}

.profilelist__item:before {
  content: ' ';
  position: absolute;
  left: 0px;
  width: 30px;
  height: 30px;
  background: dimgray;
  top: 0%;
}

@media (min-width: 790px) {
  .profilelist__item {
    font-size: 25px;
  }
}
</style>
