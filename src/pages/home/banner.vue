<template>
    <div class="homeBanner">
      <div class="loading" v-if="!slides.length">
        <base-loading class="baseLoading"></base-loading>
      </div>
      <base-slide v-else :slides="slides">
        <swiper-slide v-for="(item, index) of slides" :key="index">
          <img class="img" :src="item.picUrl">
        </swiper-slide>
      </base-slide>
    </div>
</template>

<script>
import BaseLoading from 'base/loading'
import BaseSlide from 'base/slide'
import { getHomeApi } from 'api/home'

export default {
  name: 'HomeBanner',
  components: {
    BaseSlide,
    BaseLoading
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
    update () {
      return this.getSliders()
    },
    getSliders () {
      // getHomeSlide().then(data => {
      //   console.log(data)
      //   this.slides = data
      // })
      return getHomeApi().then(data => {
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
    padding-top: 50px;
    padding-bottom: 39.57%;
    .loading{
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 39.57%;
    }
    .baseLoading{
      position: absolute;
      top: 0;
      bottom: 0;
    }
  }
  .img{
    width: 100%;
  }
</style>
