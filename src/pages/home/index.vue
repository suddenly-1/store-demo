<template>
  <div class="home">
    <home-header></home-header>
    <base-scroll @pull-down="pullDownUpdate" @pull-up="pullUpUpdate" ref="scroll" :recommendsData="recommends">
      <home-banner ref="updateBanner"></home-banner>
      <home-navbar></home-navbar>
      <home-recommend @recommends="updateRecommends" ref="updateRecommend"></home-recommend>
    </base-scroll>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeBanner from './banner'
import HomeNavbar from './navbar'
import HomeRecommend from './recommend'
import BaseScroll from 'base/scroll'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeBanner,
    BaseScroll,
    HomeNavbar,
    HomeRecommend
  },
  data () {
    return {
      recommends: []
    }
  },
  methods: {
    pullDownUpdate (end) {
      this.$refs.updateBanner.update().then(end)
    },
    updateRecommends (data) {
      this.recommends = data
    },
    pullUpUpdate (end) {
      this.$refs.updateRecommend.update().then(end)
    }
  }
}
</script>

<style lang="scss" scoped>
 .home{
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;
 }
</style>
