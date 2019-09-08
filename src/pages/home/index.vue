<template>
  <div class="home">
    <home-header></home-header>
    <base-scroll @scroll-end="scrollEnd" @pull-down="pullDownUpdate" @pull-up="pullUpUpdate" ref="scroll" :recommendsData="recommends">
      <home-banner ref="updateBanner"></home-banner>
      <home-navbar></home-navbar>
      <home-recommend @recommends="updateRecommends" ref="updateRecommend"></home-recommend>
    </base-scroll>
    <base-backtop @backtop="backtop" :visible="visible"></base-backtop>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeBanner from './banner'
import HomeNavbar from './navbar'
import HomeRecommend from './recommend'
import BaseScroll from 'base/scroll'
import BaseBacktop from 'base/back-top'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeNavbar,
    HomeRecommend,
    BaseScroll,
    BaseBacktop
  },
  data () {
    return {
      recommends: [],
      visible: false
      // ,
      // headerVisible: true
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
    },
    backtop () {
      this.$refs.scroll.scrollToTop()
      this.visible = false
      // this.headerVisible = true
    },
    scrollEnd (translate, scroll) {
      this.visible = translate < 0 && (-translate) > scroll
      // if (translate < -200) {
      //   this.headerVisible = false
      // } else {
      //   this.headerVisible = true
      // }
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
