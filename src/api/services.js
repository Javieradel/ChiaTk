import http from '@/api'

export const stateService = {
  items: [],
  loading: false,
  filters: {},
}

export const mutationsService = {
  SET_ITEMS(state, payload) {
    state.items = payload
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_FILTERS(state, payload) {
    state.filters = { ...state.filters, ...payload }
  },
  SET_VALUE_STATE(state, { variable, payload }) {
    state[variable] = payload
  }
}

export const actionsService = {
  async getAll({ commit }, { path }) {
    commit('SET_LOADING', true)

    try {
      const response = await http.get(path)
      commit('SET_ITEMS', response.data.data)
      commit('SET_LOADING', false)

      return response
    } catch (error) {
      commit('SET_LOADING', false)

      return error.response
    }
  },
  async get({ commit }, { path, id }) {
    return await http.get(`${path}/${id}`)
  },
  async create({ commit }, { path, data }) {
    return await http.post(`${path}`, data)
  },
  async update({ commit }, { path, id, data }) {
    return await http.put(`${path}/${id}`, data)
  },
  async delete({ commit }, { path, id }) {
    return await http.delete(`${path}/${id}`)
  },

  async filters({ commit }, { path, params }) {
    return await http.get(path, { params })
  }
}

class DataService {
  getAll({ path }) {
    return http.get(path)
  }

  get({ path, id }) {
    return http.get(`${path}/${id}`)
  }

  create({ path, data }) {
    return http.post(`${path}`, data)
  }

  update({ path, id, data }) {
    return http.put(`${path}/${id}`, data)
  }

  delete({ path, id }) {
    return http.delete(`${path}/${id}`)
  }

  filters({ path, params }) {
    return http.get(path, {
      params
    })
  }
}

export default new DataService()
