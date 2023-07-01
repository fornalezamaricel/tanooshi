import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppointmentView from '../views/AppointmentView.vue'
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
      path: '/lets-work',
      name: 'apointment',
      component:AppointmentView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
    
  ],
 scrollBehavior(){
  return{
    top:0,
    behavior:'smooth'
  }
 }
})

export default router
