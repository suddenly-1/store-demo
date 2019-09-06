<template>
  <div class="baseHeader">
    <div class="baseHeader-left">
      <slot name="left"></slot>
    </div>
    <div class="baseHeader-center">
      <slot name="center"></slot>
    </div>
    <div class="baseHeader-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

  .baseHeader{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: transparent;
    background-color: #aaa;
    &-left{
      margin: 0 10px;
    }
    &-right{
      margin: 0 10px;
    }
    &-center{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

</style>
