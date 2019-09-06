<template>
  <div class="baseSlide">
    <swiper :options="swiperOptions">
      <slot></slot>
      <div v-if="pagination" class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
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
    }
  },
  data () {
    return {
      swiperOptions: {}
    }
  },
  methods: {
    init () {
      this.swiperOptions = {
        direction: this.direction,
        loop: this.loop,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        pagination: this.pagination ? {
          el: '.swiper-pagination'
        } : false
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
