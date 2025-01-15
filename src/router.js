import { createRouter, createWebHistory } from "vue-router";
import Home from './views/HomePage.vue';
import Informe from './views/InformePage.vue';
import Login from './views/LoginPage.vue';
import Register from './views/RegisterPage.vue';
import Dashboard from './views/DashboardPage.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/informe", component: Informe },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
