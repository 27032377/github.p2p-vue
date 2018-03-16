import * as types from './types.js'

const mutations = {
  [types.CHANGE_LOADING] (state, payload) {
    state.loading = payload.bol
  },
  [types.PAGE_HEIGHT] (state, payload) {
    state.scrollHeight = payload.num
  }
}

export default mutations
