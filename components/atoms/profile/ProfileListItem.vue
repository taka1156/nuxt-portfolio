<template functional>
  <li class="profile-list-item">{{ props.profileText }}</li>
</template>

<style scoped>
/* css reset */
li {
  list-style-type: none;
}

/* css reset */

.profile-list-item {
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

.profile-list-item::before {
  content: ' ';
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  background: dimgray;
  top: 0%;
}

@media (min-width: 790px) {
  .profile-list-item {
    font-size: 25px;
  }
}
</style>
