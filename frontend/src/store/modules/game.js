const state = {
  games: [],
  currentGame: null,
  players: [],
  gameState: null,
  isLoading: false,
}

const getters = {
  games: (state) => state.games,
  currentGame: (state) => state.currentGame,
  players: (state) => state.players,
}

const mutations = {
  setGames(state, games) {
    state.games = games
  },
  setCurrentGame(state, game) {
    state.currentGame = game
  },
  setPlayers(state, players) {
    state.players = players
  },
  setGameState(state, gameState) {
    state.gameState = gameState
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading
  },
}

const actions = {
  fetchGames({ commit }) {
    commit('setLoading', true)
    // Fetch games logic
    commit('setLoading', false)
  },

  joinGame({ commit }, gameId) {
    commit('setLoading', true)
    // Join game logic
    commit('setLoading', false)
  },

  createGame({ commit }) {
    commit('setLoading', true)
    // Create game logic
    commit('setLoading', false)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
