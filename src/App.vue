<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <my-toast :show="myToastShow" :message="myToastMessage" :position="myToastPosition"></my-toast>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { mapState } from 'vuex'
import MyToast from './components/MyToast.vue'

export default {
  name: 'App',
  components: {
    MyToast
  },
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
      loading: state => state.loading,
      myToastShow: state => state.myToast.show,
      myToastMessage: state => state.myToast.message,
      myToastPosition: state => state.myToast.position
    })
  }
}
</script>

<style>
  @import "./assets/styles/index.css";
</style>
