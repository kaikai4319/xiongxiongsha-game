<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Xiongxiongsha Game</h1>
      <p>Join the ultimate multiplayer card game experience</p>
      <router-link to="/lobby" class="btn btn-primary">Play Now</router-link>
    </div>
    <div class="features">
      <div class="feature">
        <h3>Multiplayer</h3>
        <p>Play with up to 8 players in real-time matches</p>
      </div>
      <div class="feature">
        <h3>Strategic Gameplay</h3>
        <p>Use tactics and strategy to defeat your opponents</p>
      </div>
      <div class="feature">
        <h3>Live Multiplayer</h3>
        <p>Experience seamless real-time multiplayer action</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.btn-primary {
  background-color: #667eea;
  color: white;
}

.btn-primary:hover {
  background-color: #764ba2;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.feature h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature p {
  color: #666;
}
</style>
