import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TanarView from '../views/TanarView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tanar',
      name: 'tanar',
      component: TanarView 
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }
  ]
})

export default router