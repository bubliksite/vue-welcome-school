import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import home from './modules/home'
import video from './modules/video'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    home,
    video
  }
})
