<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/lobby">Lobby</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <button @click="logout" v-if="isLoggedIn">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
#app {
  min-height: 100vh;
}

nav {
  padding: 1rem;
  background-color: #333;
}

nav a,
nav button {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
}

nav a:hover,
nav button:hover {
  color: #ccc;
}
</style>
