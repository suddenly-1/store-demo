<template>
  <!-- <transition name="particulars"> -->
    <div class="particulars">
      <div class="particulars-icon" @click="goBack">
        <i class="iconfont iconfanhui"></i>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'particulars',
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .particulars{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
    z-index: $product-z-index;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon{
      width: 100px;
      height: 100px;
      background-color: #f23030;
      opacity: 0.9;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfanhui{
        font-size: 30px;
        color: #fff;
      }
    }
  }
  // .particulars{
  //   &-enter,
  //   &-leave-to{
  //     transform: translateX(100%);
  //   }
  //   &-enter-active,
  //   &-leave-active{
  //     transition: all 0.3s;
  //   }
  // }
</style>
