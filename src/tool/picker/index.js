import MPicker from './MPicker.vue'

let vm
export default {
  install (Vue, options) {
    if (!vm) {
      const PickerPlugin = Vue.extend(MPicker)
      vm = new PickerPlugin().$mount()
      document.body.appendChild(vm.$el)
    }
    Vue.prototype.$showPicker = () => {
      vm.showPicker()
    }
  }
}
