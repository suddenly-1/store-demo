<template>
  <div class="home">
    <home-header></home-header>
    <home-banner></home-banner>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeBanner from './banner'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeBanner
  }
}
</script>

<style lang="scss" scoped>

</style>
