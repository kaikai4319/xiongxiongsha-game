import axios from 'axios'

const state = {
  token: localStorage.getItem('token') || null,
  user: null,
  isLoading: false,
}

const getters = {
  isLoggedIn: (state) => !!state.token,
  user: (state) => state.user,
}

const mutations = {
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  setUser(state, user) {
    state.user = user
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  clearAuth(state) {
    state.token = null
    state.user = null
    localStorage.removeItem('token')
  },
}

const actions = {
  async login({ commit }, { email, password }) {
    commit('setLoading', true)
    try {
      const response = await axios.post('/api/auth/login', { email, password })
      commit('setToken', response.data.token)
      commit('setUser', response.data.user)
      return response.data
    } catch (error) {
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async register({ commit }, { username, email, password }) {
    commit('setLoading', true)
    try {
      const response = await axios.post('/api/auth/register', { username, email, password })
      commit('setUser', response.data.user)
      return response.data
    } catch (error) {
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  logout({ commit }) {
    commit('clearAuth')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
