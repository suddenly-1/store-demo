<template>
  <div class="baseScroll">
    <swiper :options="swiperOptions" ref="swiper">
      <!-- 下拉刷新 -->
      <div class="scroll-pull-down" v-if="pullDown">
        <base-loading :text="loadingText" ref="loading"></base-loading>
      </div>
      <swiper-slide>
        <slot></slot>
      </swiper-slide>
      <!-- 上拉刷新 -->
      <div class="scroll-pull-up" v-if="pullUp">
        <base-loading :text="loadingTextUp" ref="loadingUp"></base-loading>
      </div>
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
  PULL_DOWN_TEXT_END,
  PULL_UP_HEIGHT,
  PULL_UP_TEXT_INIT,
  PULL_UP_TEXT_START,
  PULL_UP_TEXT_ING,
  PULL_UP_TEXT_END
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
    },
    pullUp: {
      type: Boolean,
      default: true
    },
    recommendsData: {
      type: [Object, Array]
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
      loadingTextUp: PULL_UP_TEXT_INIT,
      pullDownActive: false
    }
  },
  watch: {
    recommendsData () {
      this.update()
    }
  },
  methods: {
    scrollToTop () {
      this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, 300, false)
    },
    update () {
      this.$nextTick(() => {
        this.$refs.swiper && this.$refs.swiper.swiper.update()
        this.$refs.swiper.swiper.scrollbar.updateSize()
      })
    },

    scroll () {
      const swiper = this.$refs.swiper.swiper
      //  下拉
      if (this.pullDownActive) {
        return
      }
      if (swiper.translate > 0) {
        if (!this.pullDown) {
          return
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.loading.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.loading.setText(PULL_DOWN_TEXT_INIT)
        }
        //  上拉
      } else if (swiper.isEnd) {
        if (!this.pullUp) {
          return
        }
        const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'))
        if (isPullUp) {
          this.$refs.loadingUp.setText(PULL_UP_TEXT_START)
        } else {
          this.$refs.loadingUp.setText(PULL_UP_TEXT_INIT)
        }
      }
    },
    touchEnd () {
      this.$emit('scroll-end', this.$refs.swiper.swiper.translate, this.$refs.swiper.swiper.height)
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
        //  上拉刷新中
      } else if (swiper.isEnd) {
        const totalHeight = parseInt(swiper.$wrapperEl.css('height'))
        const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight
        if (isPullUp) {
          if (!this.pullUp) {
            return
          }
          this.pullDownActive = true
          swiper.allowTouchMove = false// 禁止触摸
          swiper.setTransition(swiper.params.speed)
          swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height))
          swiper.params.virtualTranslate = true// 定住不给回弹
          this.$refs.loading.setText(PULL_UP_TEXT_ING)
          this.$emit('pull-up', this.pullUpEnd)
        }
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
    },
    //  上拉刷新结束
    pullUpEnd () {
      this.pullDownActive = false
      const swiper = this.$refs.swiper.swiper
      swiper.params.virtualTranslate = false // 解除定住不给回弹
      this.$refs.loading.setText(PULL_UP_TEXT_END)
      swiper.allowTouchMove = true // 解除禁止触摸
      swiper.setTransition(swiper.params.speed)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

  .swiper-scrollbar{
    display: none;
  }
  .baseScroll{
    height: 100%;
    box-sizing: border-box;
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
    top: -30px;
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
