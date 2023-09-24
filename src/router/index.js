import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/myFootprints',
    name: 'myFootprints',
    component: () => import('../views/myFootprints.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;