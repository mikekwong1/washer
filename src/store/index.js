import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenu: 1,
    },
    mutations: {
        showMenu(state, i) {
            state.isMenu = i
        },
    },
    actions: {},
    modules: {}
})