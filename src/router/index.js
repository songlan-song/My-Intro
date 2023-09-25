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
  {
    path: '/UKtour',
    name: 'UKtour',
    component: () => import('../views/UKtour.vue'),
  },
  {
    path: '/Spaintour',
    name: 'Spaintour',
    component: () => import('../views/Spaintour.vue'),
  },
  {
    path: '/Francetour',
    name: 'Francetour',
    component: () => import('../views/Francetour.vue'),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;