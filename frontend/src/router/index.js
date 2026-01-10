import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby,
    meta: { requiresAuth: true },
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: Game,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
