<template>
  <swiper :options="swiperOptions" ref="swiper" :key="keySwiper">
    <slot></slot>
    <div v-if="pagination" class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'slide',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return [
          'horizontal',
          'vertical'
        ].indexOf(value) > -1
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator (value) {
        return value > 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    slides: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {},
      keySwiper: Math.random()
    }
  },
  watch: {
    slides (arr) {
      if (arr.length === 0) {
        return
      }
      this.swiperOptions.loop = arr.length <= 1 ? false : this.loop
      this.keySwiper = Math.random()
    }
  },
  methods: {
    init () {
      this.swiperOptions = {
        watchOverflow: true,
        slidesPerView: 1,
        direction: this.direction,
        loop: this.slides.length <= 1 ? false : this.loop,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
