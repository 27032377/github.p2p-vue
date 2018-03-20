<template>
  <div class="fix-til clearfix">
    <div class="icon">
      <slot name="bell"></slot>
    </div>
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'FixTil',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">
  .fix-til {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    text-align: center;
    background-color: #0000CC;
    color: #fff;
    font-size: 14px;
    height: .4rem;
    line-height: .4rem;
    .icon {
      position: absolute;
      z-index: 2;
      left: .1rem;
    }
  }
</style>
