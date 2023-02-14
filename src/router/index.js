import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/projects.vue') 
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue') 
  },
  {
    path: '/modalTest',
    name: 'modalTest',
    component: () => import('../views/modalTest.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
