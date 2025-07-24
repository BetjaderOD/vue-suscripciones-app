import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../pages/DashboardView.vue"),
    },
    {
      path: "/configuracion",
      name: "Configuracion",
      component: () => import("../pages/ConfiguracionView.vue"),
    },
    {
      path: "/",
      redirect: "/dashboard",
    },
  ],
});

export default router;
