<template>
  <!-- <transition name="header"> -->
    <div class="homeHeader">
      <base-header>
        <div slot="left">
          <i class="iconfont iconsaoyisao"></i>
        </div>
        <div slot="center">
          <div class="center">center</div>
        </div>
        <div slot="right">
          <i class="iconfont iconxiaoxi"></i>
        </div>
      </base-header>
    </div>
  <!-- </transition> -->
</template>

<script>
import BaseHeader from 'base/header'

export default {
  name: 'HomeHeader',
  components: {
    BaseHeader
  }
  // ,
  // props: {
  //   visible: {
  //     type: Boolean,
  //     default: true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .homeHeader{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: $navbar-height;
    z-index: $tabbar-z-index;
  }
  .iconfont{
    font-size: 24px;
    color: #fff;
  }
  // .header-enter,
  // .header-leave-to{
  //   opacity: 0
  // }
  // .header-enter-active,
  // .header-leave-active{
  //   transition: opacity .5s
  // }
</style>
