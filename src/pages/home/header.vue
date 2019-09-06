<template>
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
</template>

<script>
import BaseHeader from 'base/header'

export default {
  name: 'HomeHeader',
  components: {
    BaseHeader
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .homeHeader{
    width: 100%;
    height: $navbar-height;
  }
  .iconfont{
    font-size: 24px;
    color: #fff;
  }
</style>
