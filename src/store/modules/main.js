
const state = () => {
    return {
      user: { },
      tokenUser: undefined,
      loading: false,
      showModal: false,
      dataModal: { }
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
    SHOW_LOADER(state, payload){
      state.loading = !!payload
    },
    SHOW_MODAL(state, payload){
      payload.show ?
        state.dataModal = payload.data
        :
        // delete data
        state.dataModal = { }

      state.showModal = !!payload.show
    },
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
  