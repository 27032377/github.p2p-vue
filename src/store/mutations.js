import * as types from './types.js'

const mutations = {
  [types.CHANGE_LOADING] (state, payload) {
    state.loading = payload.bol
  },
  [types.PAGE_HEIGHT] (state, payload) {
    state.scrollHeight = payload.num
  },
  [types.MY_TOAST] (state, payload) {
    state.myToast = payload.obj
  },
  [types.TURN_FOOT] (state, payload) {
    state.footSwi = payload.bol
  }
}

export default mutations
