<template>
  <div class="confirm" v-show="visible">
    <div class="confirm-wrapper">
      <div class="confirm-wrapper-text">确认清空吗？</div>
      <div class="confirm-wrapper-select">
        <div @click="no" class="confirm-wrapper-select-no">取消</div>
        <div @click="ok" class="confirm-wrapper-select-ok">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseConfirm',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    no () {
      this.visible = false
    },
    ok () {
      this.$emit('confirm-ok')
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .confirm{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: $search-z-index;
    display: flex;
    justify-content: center;
    align-items: center;
    &-wrapper{
      width: 90%;
      background-color: #fff;
      border-radius: 10px;
      &-text{
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 18px;
        color: #666;
        padding: 30px 0;
        border-bottom: 1px solid #ccc;
      }
      &-select{
        width: 100%;
        display: flex;
        justify-content: space-around;
        &-no,
        &-ok{
          width: 50%;
          text-align: center;
          font-size: 14px;
          color: #666;
          padding: 20px 0;
        }
        &-ok{
          color: #fff;
          background-color: #f23030;
          border-radius: 0 0 10px 0;
        }
      }
    }
  }
</style>
