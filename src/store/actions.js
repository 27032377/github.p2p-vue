import * as types from './types.js'

const actions = {
  [types.CHANGE_LOADING] ({commit}, payload) {
    commit({
      type: types.CHANGE_LOADING,
      bol: payload.bol
    })
  }
}

export default actions
