<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="form.password" type="password" id="password" required />
        </div>
        <button type="submit" :disabled="isLoading">{{ isLoading ? 'Logging in...' : 'Login' }}</button>
      </form>
      <p>Don't have an account? <router-link to="/register">Register</router-link></p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoading']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleLogin() {
      try {
        await this.login(this.form)
        this.$router.push('/')
      } catch (error) {
        alert('Login failed: ' + error.message)
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.login-form h1 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

button:hover:not(:disabled) {
  background-color: #764ba2;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

p {
  margin-top: 1rem;
  text-align: center;
  color: #666;
}

p a {
  color: #667eea;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline;
}
</style>
