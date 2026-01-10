<template>
  <div class="game">
    <h1>Game Board</h1>
    <div class="game-container">
      <div class="players-section">
        <h2>Players</h2>
        <div v-for="player in players" :key="player.id" class="player-card">
          <p>{{ player.name }}</p>
          <p>Health: {{ player.health }}</p>
        </div>
      </div>
      <div class="main-game-area">
        <div class="game-state" v-if="gameState">
          <p>Current Turn: {{ gameState.currentPlayer }}</p>
          <p>Round: {{ gameState.round }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Game',
  computed: {
    ...mapGetters('game', ['players', 'currentGame']),
    gameState() {
      return this.$store.state.game.gameState
    },
  },
}
</script>

<style scoped>
.game {
  padding: 2rem;
}

.game h1 {
  margin-bottom: 2rem;
  color: #333;
}

.game-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
}

.players-section {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

.players-section h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.25rem;
}

.player-card {
  padding: 1rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;
  border-left: 3px solid #667eea;
}

.player-card p {
  margin: 0.5rem 0;
  color: #333;
}

.main-game-area {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.game-state {
  text-align: center;
  padding: 2rem;
}

.game-state p {
  margin: 1rem 0;
  color: #333;
  font-size: 1.1rem;
}
</style>
