import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/configuracion',
      name: 'Configuracion',
      component: () => import('../views/ConfiguracionView.vue'),
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
  ],
})

export default router
