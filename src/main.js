// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import store from '@/store'
// import pdf from './tool/pdf'
// import MPopup from './tool/popup'
// import MPikcer from './tool/picker'

Vue.use(Mint)
// Vue.use(pdf)
// Vue.use(MPopup)
// Vue.use(MPikcer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
