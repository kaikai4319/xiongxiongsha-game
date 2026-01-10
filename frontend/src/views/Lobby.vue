<template>
  <div class="lobby">
    <h1>Game Lobby</h1>
    <div class="lobby-controls">
      <button @click="createGame" class="btn btn-primary">Create Game</button>
      <button @click="refreshGames" class="btn btn-secondary">Refresh</button>
    </div>
    <div class="games-list">
      <div v-if="games.length === 0" class="empty-state">
        <p>No games available. Create one to get started!</p>
      </div>
      <div v-else class="game-item" v-for="game in games" :key="game.id">
        <h3>{{ game.name }}</h3>
        <p>Players: {{ game.playerCount }}/{{ game.maxPlayers }}</p>
        <button @click="joinGame(game.id)" class="btn btn-secondary">Join Game</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Lobby',
  computed: {
    ...mapGetters('game', ['games']),
  },
  methods: {
    ...mapActions('game', ['fetchGames', 'joinGame', 'createGame']),
    refreshGames() {
      this.fetchGames()
    },
  },
  mounted() {
    this.fetchGames()
  },
}
</script>

<style scoped>
.lobby {
  padding: 2rem;
}

.lobby h1 {
  margin-bottom: 2rem;
  color: #333;
}

.lobby-controls {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.btn-primary {
  background-color: #667eea;
  color: white;
}

.btn-secondary {
  background-color: #f0f0f0;
  color: #333;
}

.btn:hover {
  opacity: 0.9;
}

.games-list {
  display: grid;
  gap: 1rem;
}

.game-item {
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.game-item h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.game-item p {
  margin: 0 0 1rem 0;
  color: #666;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666;
}
</style>
