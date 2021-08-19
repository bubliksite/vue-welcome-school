import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    home
  }
})
