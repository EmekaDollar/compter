import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/counter',
    name: 'counter',
    component: CounterView
  },
  // 404 catch
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
