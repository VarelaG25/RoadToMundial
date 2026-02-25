import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/home/HomePage.vue'
import Login from '@/views/login/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  // import.meta.env.BASE_URL leerá el 'base' que pusiste en vite.config.ts
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
