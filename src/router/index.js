import { createRouter, createWebHistory } from 'vue-router';
import WeatherView from '@/views/WeatherView.vue';

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: WeatherView,
  },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
