import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers (state, users) {
      Vue.set(state, 'users', users);
    }
  },
  actions: {
    loadUsers (context, users) {
      context.commit('setUsers', users);
    }
  },
  modules: {
  }
})
