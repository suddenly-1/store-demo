<template>
  <div class="searchHeader">
    <base-header>
    <div slot="left">
      <i @click="goBack" class="iconfont iconfanhui"></i>
    </div>
    <div slot="center" class="search-center">
      <i class="iconfont iconsousuo"></i>
      <input v-model="query" type="text" class="search-input" placeholder="好货5折起">
      <i class="iconfont iconguanbi" v-if="query" @click="clearQuery"></i>
    </div>
    </base-header>
  </div>
</template>

<script>
import BaseHeader from 'base/header'
import { throttle } from 'assets/js/util'

export default {
  name: 'SearchHeader',
  components: {
    BaseHeader
  },
  data () {
    return {
      query: ''
    }
  },
  watch: {
    query: throttle(function () {
      this.$emit('query', this.query)
    })
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    clearQuery () {
      this.query = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
  .searchHeader{
    width: 100%;
    height: $navbar-height;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
    .iconfanhui{
      color: #ccc;
      font-size: 24px;
    }
    .search-center{
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background-color: #f7f7f7;
      position: relative;
    }
    .iconsousuo{
      color: #bbb;
      font-size: 20px;
      display: inline-block;
      padding: 6px 5px 0 15px;
    }
    .search-input{
      width: 75%;
      position: absolute;
      left: 50px;
      top: 0;
      bottom: 0;
      margin: auto;
      font-size: 14px;
      color: #999;
      background-color: #f7f7f7;
    }
    .iconguanbi{
      position: absolute;
      right: 12px;
      top: 50%;
      bottom: 0;
      transform: translate(0, -55%);
      color: #bbb;
      font-size: 20px;
    }
  }
</style>
