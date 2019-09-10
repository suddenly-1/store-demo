<template>
  <div class="homeHeader">
    <base-header>
      <div slot="left">
        <i class="iconfont iconsaoyisao"></i>
      </div>

      <div slot="center" class="slot-center" @click="goToSearch">
        <!-- <router-link to="search"> -->
          <i class="iconfont iconsousuo"></i>
          <div class="center-text">好货5折起</div>
        <!-- </router-link> -->
      </div>

      <div slot="right">
        <i class="iconfont iconxiaoxi"></i>
      </div>
    </base-header>
  </div>
</template>

<script>
import BaseHeader from 'base/header'

export default {
  name: 'HomeHeader',
  components: {
    BaseHeader
  },
  methods: {
    goToSearch () {
      this.$router.push('/search')
    }
  }
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
    background-color: $header-bgc-translucent;
  }
  .iconfont{
    font-size: 24px;
    color: #fff;
  }
  .slot-center{
    width: 100%;
    height:100%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    .iconsousuo{
      color: #bbb;
      font-size: 20px;
      display: inline-block;
      padding: 6px 5px 0 15px;
    }
    .center-text{
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 14px;
      color: #999;
      display: inline-block;
    }
  }
</style>
