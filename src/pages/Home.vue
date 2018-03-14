<template>
  <div class="home">
    <p>Home.vue</p>
    <span class="lessTest"> xxx </span>
    <mt-button type="danger" @click="routeTo">按钮mint</mt-button>
  </div>
</template>
<script>
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
  name: 'Home',
  components: {
    Button
  },
  methods: {
    routeTo () {
      this.$router.push('/my')
    }
  }
}
</script>
<style lang="less" scoped>
  .home {
    .lessTest {
      color: red;
    }
  }
</style>
