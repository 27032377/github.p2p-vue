<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { mapState } from 'vuex'

export default {
  name: 'App',
  watch: {
    loading (bol) {
      if (bol) {
        Indicator.open('加载中...')
      } else {
        Indicator.close()
      }
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  }
}
</script>

<style>
  @import "./assets/styles/index.css";
</style>
