<template functional>
  <div class="border__group">
    <span
      class="border__top"
      :class="[props.isOpen ? 'border__top--open' : 'border__top--close']"
    ></span>
    <span
      class="border__middle"
      :class="{ 'border__middle--fade': props.isOpen }"
    ></span>
    <span
      class="border__bottom"
      :class="[props.isOpen ? 'border__bottom--open' : 'border__bottom--close']"
    ></span>
  </div>
</template>

<style scoped>
.border__group {
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

.border__top--close {
  transform: translateY(-10px);
}

.border__bottom--close {
  transform: translateY(10px);
}

.border__top--open {
  animation: top 0.6s ease;
  transform: rotate(-45deg);
}

.border__middle--fade {
  animation: middle 0.6s ease;
  opacity: 0;
}

.border__bottom--open {
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
