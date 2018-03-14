import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    count: 0
  },
  getters: {
    num: state => state.count + 1
  }
})

export default store
