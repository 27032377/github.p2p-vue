<template>
  <div class="float-block" :style="blockStyle">{{title}}</div>
</template>
<script>
export default {
  name: 'FloatBlock',
  props: {
    position: {
      type: String,
      default: 'right-top'
    },
    title: {
      type: String,
      default: '跳过'
    }
  },
  computed: {
    blockStyle () {
      switch (this.position) {
        case 'left-top':
          return 'left: 10px; top: 10px;'
        case 'left-bottom':
          return 'left: 10px; bottom: 10px;'
        case 'right-bottom':
          return 'right: 10px; bottom: 10px;'
        default:
          return 'right: 10px; top: 10px;'
      }
    }
  }
}
</script>
<style lang="less">
  .float-block {
    position: absolute;
    z-index: 100;
    height: 20px;
    line-height: 20px;
    width: 15%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
