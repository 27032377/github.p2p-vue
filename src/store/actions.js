import * as types from './types.js'

const actions = {
  [types.CHANGE_LOADING] ({commit}, payload) {
    commit({
      type: types.CHANGE_LOADING,
      bol: payload.bol
    })
  },
  [types.PAGE_HEIGHT] ({commit}, payload) {
    commit({
      type: types.PAGE_HEIGHT,
      num: payload.num
    })
  }
}

export default actions
