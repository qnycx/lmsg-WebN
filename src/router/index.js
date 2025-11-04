import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chatPage',
      component: () => import('@/views/ChatPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/Error404.vue'),
    },
  ],
})

export default router
