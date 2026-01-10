import { createStore } from 'vuex'
import auth from './modules/auth'
import game from './modules/game'

export default createStore({
  modules: {
    auth,
    game,
  },
})
