import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    scrollHeight: 667
  },
  getters: {},
  mutations,
  actions
})

export default store
