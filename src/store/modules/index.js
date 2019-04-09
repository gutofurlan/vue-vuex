// condfiguracao do vuex
import Vue from 'vue'
import Vuex from 'vuex'

import Tasks from './tasks/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Tasks
    }
})