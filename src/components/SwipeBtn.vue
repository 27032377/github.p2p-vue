<template>
  <div class="swipe-btn">
    <button class="btn">登录</button>
  </div>
</template>
<script>

export default {
  name: 'SwipeBtn'
}
</script>
<style lang="less" scoped>
  .swipe-btn {
    position: absolute;
    width: 50%;
    left: 25%;
    bottom: 10%;
    z-index: 100;
    .btn {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #FF3333;
      border-radius: 10px;
      border: 4px solid;
      border-image: linear-gradient( red, blue) 1 1;
      color: #fff;
      font-family: YouYuan;
      font-size: 18px;
      letter-spacing: 8px;
    }
  }
</style>
