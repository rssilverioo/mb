

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>



<script setup>
// 
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  flex: 1;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #FF9900;
  background-color: white;
  color: #FF9900;
  transition : .5s;

  &:hover {
    background-color: #FF9900;
    color: white;
  }
  &.primary {
    background-color: #FF9900;
    color: white;

    &:hover {
      filter : brightness(110%);
    }
  }
}
</style>