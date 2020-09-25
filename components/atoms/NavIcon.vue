<template functional>
  <div class="nav-icon">
    <span
      class="nav-icon__top"
      :class="[props.isOpen ? 'nav-icon__top--open' : 'nav-icon__top--close']"
    ></span>
    <span
      class="nav-icon__middle"
      :class="{ 'nav-icon__middle--fade': props.isOpen }"
    ></span>
    <span
      class="nav-icon__bottom"
      :class="[props.isOpen ? 'nav-icon__bottom--open' : 'nav-icon__bottom--close']"
    ></span>
  </div>
</template>

<style scoped>
.nav-icon {
  position: relative;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

span {
  display: block;
  height: 2px;
  width: 70%;
  margin: auto;
  position: absolute;
  top: calc((100% - 4px) / 2);
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 1px;
}

.nav-icon__top--close {
  transform: translateY(-10px);
}

.nav-icon__bottom--close {
  transform: translateY(10px);
}

.nav-icon__top--open {
  animation: top 0.6s ease;
  transform: rotate(-45deg);
}

.nav-icon__middle--fade {
  animation: middle 0.6s ease;
  opacity: 0;
}

.nav-icon__bottom--open {
  animation: bottom 0.6s ease;
  transform: rotate(45deg);
}

@keyframes top {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
}

@keyframes middle {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes bottom {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-45deg);
  }
}
</style>
