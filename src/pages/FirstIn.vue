<template>
  <div class="first-in">
    <mt-swipe :auto="0" :continuous="false">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item">
        <float-block @click.native="login"></float-block>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

import image03 from '@/assets/images/image/image03.jpg'
import image04 from '@/assets/images/image/image04.jpg'
import image05 from '@/assets/images/image/image05.jpg'
import image06 from '@/assets/images/image/image06.jpg'
import FloatBlock from '@/components/FloatBlock.vue'

export default {
  components: {
    Swipe,
    SwipeItem,
    FloatBlock
  },
  data () {
    return {
      imgList: [image03, image04, image05, image06]
    }
  },
  methods: {
    login () {
      window.sessionStorage.setItem('not_first', 'ok')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
  .first-in {
    width: 100%;
    height: 100%;
  }
</style>
