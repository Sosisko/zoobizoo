import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../pages/Services.vue')
    },
    {
      path: '/pets',
      name: 'pets',
      component: () => import('../pages/Pets.vue')
    },
    {
      path: '/advert',
      name: 'advert',
      component: () => import('../pages/Advert.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/Auth-user/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Auth-user/Login.vue')
    },
  
  ]
})

export default router
