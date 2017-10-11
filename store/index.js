import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      user: {
        isUserAuthenticated: false
      }
    },

    mutations: {
      setIsUserAuthenticated (state, isUserAuthenticated) {
        state.user.isUserAuthenticated = isUserAuthenticated
      }
    }
  })
}

export default store
