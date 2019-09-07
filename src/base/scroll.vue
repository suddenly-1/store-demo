<template>
  <div class="baseScroll">
    <swiper :options="swiperOptions" ref="swiper">
      <div class="scroll-pull-down" v-if="pullDown">
        <base-loading :text="loadingText" ref="loading"></base-loading>
      </div>
      <swiper-slide>
        <slot></slot>
      </swiper-slide>
      <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import BaseLoading from 'base/loading'
import {
  PULL_DOWN_HEIGHT,
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END
  // ,
  // PULL_UP_HEIGHT,
  // PULL_UP_TEXT_INIT,
  // PULL_UP_TEXT_START,
  // PULL_UP_TEXT_ING,
  // PULL_UP_TEXT_END
} from './config'

export default {
  name: 'BaseScroll',
  components: {
    BaseLoading
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    pullDown: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
        },
        observer: true,
        observeParents: true
      },
      loadingText: PULL_DOWN_TEXT_INIT,
      pullDownActive: false
    }
  },
  methods: {
    // const scroll = this.$refs.swiper.swiper.translate
    scroll () {
      const swiper = this.$refs.swiper.swiper
      //  下拉
      if (this.pullDownActive) {
        return
      }
      if (!this.pullDown) {
        return
      }
      if (swiper.translate > PULL_DOWN_HEIGHT) {
        this.$refs.loading.setText(PULL_DOWN_TEXT_START)
      } else {
        this.$refs.loading.setText(PULL_DOWN_TEXT_INIT)
      }
    },
    touchEnd () {
      if (this.pullDownActive) {
        return
      }
      const swiper = this.$refs.swiper.swiper
      if (swiper.translate >= PULL_DOWN_HEIGHT) {
        if (!this.pullDown) {
          return
        }
        //  下拉刷新中
        this.pullDownActive = true
        swiper.allowTouchMove = false// 禁止触摸
        swiper.setTransition(swiper.params.speed)
        swiper.setTranslate(PULL_DOWN_HEIGHT)
        swiper.params.virtualTranslate = true// 定住不给回弹
        this.$refs.loading.setText(PULL_DOWN_TEXT_ING)
        this.$emit('pull-down', this.pullDownEnd)
      }
    },
    //  下拉刷新结束
    pullDownEnd () {
      this.pullDownActive = false
      const swiper = this.$refs.swiper.swiper
      swiper.params.virtualTranslate = false // 解除定住不给回弹
      this.$refs.loading.setText(PULL_DOWN_TEXT_END)
      swiper.allowTouchMove = true // 解除禁止触摸
      swiper.setTransition(swiper.params.speed)
      swiper.setTranslate(0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

  .baseScroll{
    height: 100%;
    box-sizing: border-box;
    padding-bottom: $tabbar-height;
  }
  .swiper-container{
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    height: auto;
  }
  .scroll-pull-down{
    position: absolute;
    top: -80px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    // background-color: #999;
  }
</style>
