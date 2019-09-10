<template>
  <transition name="backtop">
    <div
      class="backtop"
      v-show="visible"
      @click="backToTop"
    >
      <i class="iconfont iconfanhuidingbu"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BaseBacktop',
  // data () {
  //   return {
  //     visible: false
  //   }
  // },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backToTop () {
      this.$emit('backtop')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .backtop{
    z-index: $backtop-z-index;
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6)
  }
  .iconfont{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 50px;
    color: #fff;
  }
  .backtop-enter,
  .backtop-leave-to{
    opacity: 0
  }
  .backtop-enter-active,
  .backtop-leave-active{
    transition: opacity 1s
  }
</style>
