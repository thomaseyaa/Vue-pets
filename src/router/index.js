import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import('../views/Dogs.vue')
  },
  {
    path: '/cats',
    name: 'Cats',
    component: () => import('../views/Cats.vue')
  },
  {
    path: '/pets/cat/:id',
    name: 'Cat',
    component: () => import('../views/Pet.vue')
  },
  {
    path: '/pets/dog/:id',
    name: 'Dog',
    component: () => import('../views/Pet.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
