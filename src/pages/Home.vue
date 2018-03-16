<template>
  <div class="home">
    <h2>Home.vue</h2>
    <span class="lessTest"> xxx </span>
    <mt-button type="danger" @click="routeTo">按钮mint</mt-button>
  </div>
</template>
<script>
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

export default {
  name: 'Home',
  components: {
    Button
  },
  activated () {},
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
