
const state = () => {
    return {
      user: { },
      tokenUser: undefined
    }
  }
  
  // getters
  const getters = {
    fullName: (state) => {
      const { names, surnames } = state.user
      return `${names} ${surnames}`
    }
  }
  
  // actions
  const actions = {}
  
  // mutations
  const mutations = {
    SET_USER(state, payload) {
      state.user = payload
    },
    SAVE_TOKEN(state, token) {
      state.tokenUser = token
    }
  
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  