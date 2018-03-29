import MPopup from './MPopup.vue'

let vm
export default {
  install (Vue, options) {
    if (!vm) {
      const PopPlugin = Vue.extend(MPopup)
      vm = new PopPlugin().$mount()
      document.body.appendChild(vm.$el)
    }
    Vue.prototype.$popupShow = function (val) {
      vm.showPop(val)
    }
  }
}
