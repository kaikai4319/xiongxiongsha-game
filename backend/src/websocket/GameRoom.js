class GameRoom {
  constructor(id, maxPlayers = 8) {
    this.id = id;
    this.maxPlayers = maxPlayers;
    this.players = [];
    this.gameState = null;
    this.isActive = false;
    this.createdAt = new Date();
  }

  addPlayer(player) {
    if (this.players.length >= this.maxPlayers) {
      throw new Error('Room is full');
    }
    this.players.push(player);
  }

  removePlayer(playerId) {
    this.players = this.players.filter(p => p.id !== playerId);
  }

  startGame() {
    if (this.players.length < 2) {
      throw new Error('Not enough players to start game');
    }
    this.isActive = true;
  }

  endGame() {
    this.isActive = false;
  }

  broadcast(message) {
    this.players.forEach(player => {
      if (player.ws && player.ws.readyState === 1) {
        player.ws.send(JSON.stringify(message));
      }
    });
  }
}

module.exports = GameRoom;
