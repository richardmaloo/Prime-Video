import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Detail from '@/pages/Detail.vue'
import Movies from '@/pages/Movies.vue'
import TVShows from '@/pages/TVShows.vue'

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
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/tv-shows',
      name: 'TV Shows',
      component: TVShows
    }
  ]
})

export default router
