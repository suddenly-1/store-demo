<template>
  <div class="home">
    <home-header></home-header>
    <base-scroll @pull-down="pullDownUpDate">
      <home-banner ref="updateBanner"></home-banner>
    </base-scroll>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeBanner from './banner'
import BaseScroll from 'base/scroll'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeBanner,
    BaseScroll
  },
  methods: {
    pullDownUpDate (end) {
      this.$refs.updateBanner.update().then(end)
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
