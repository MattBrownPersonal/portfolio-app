import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router

