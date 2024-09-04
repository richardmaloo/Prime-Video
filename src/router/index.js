import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

export default router
