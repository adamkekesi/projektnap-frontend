import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeacherView from '../views/TeacherView.vue'
import SearchView from '../views/SearchView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TeacherView 
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path:'/about',
      name:'about',
      component: AboutView
    }
    
  ]
})

export default router