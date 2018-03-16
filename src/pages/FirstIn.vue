<template>
  <div class="first-in">
    <div class="test01"></div>
    <mt-swipe>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

export default {
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
<style lang="less" scoped>
  .first-in {
    width: 100%;
    height: 100%;
    .test01{
      width: 75px;
      height: 75px;
      background: red;
    }
  }
</style>
