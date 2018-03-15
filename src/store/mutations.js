import * as types from './types.js'

const mutations = {
  [types.CHANGE_LOADING] (state, payload) {
    state.loading = payload.bol
  }
}

export default mutations
