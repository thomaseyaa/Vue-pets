import { createStore } from 'vuex'
import state from "./state"
import * as getters from "./getters"
import * as mutations from "./mutations"

export default createStore({
  state,
  getters,
  mutations,
  action: {},
  modules: {},
})
