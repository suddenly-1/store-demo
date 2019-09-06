<template>
  <div class="homeBanner">
    <base-slide v-if="slides.length">
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <img class="img" :src="item.picUrl">
      </swiper-slide>
    </base-slide>
  </div>
</template>

<script>
import BaseSlide from 'base/slide'
import { getHomeApi } from 'api/home'

export default {
  name: 'HomeBanner',
  components: {
    BaseSlide
  },
  data () {
    return {
      slides: []
    }
  },
  created () {
    this.getSliders()
  },
  methods: {
    getSliders () {
      // getHomeSlide().then(data => {
      //   console.log(data)
      //   this.slides = data
      // })
      getHomeApi().then(data => {
        this.slides = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .homeBanner{
    width: 100%;
    height: 0;
    padding-bottom: 39.57%;
  }
  .img{
    width: 100%;
  }
</style>
