<template>
  <div class="g-tabber">
     <router-link class="g-tabber-item" to="/home">
      <i class="iconfont iconshouye"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabber-item" to="/category">
      <i class="iconfont iconleimupinleifenleileibie"></i>
      <span class="tabber-tit">分类</span>
    </router-link>
    <router-link class="g-tabber-item" to="/cart">
      <i class="iconfont icongouwuche1"></i>
      <span class="tabber-tit">购物车</span>
    </router-link>
    <router-link class="g-tabber-item" to="/personal">
      <i class="iconfont icongerenzhongxin"></i>
      <span class="tabber-tit">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style  lang="scss" scoped>
  @import '~assets/scss/mixins';

  .router-link-active{
    color: $link-active-color;
  }

</style>
