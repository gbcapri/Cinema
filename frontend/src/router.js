import { createRouter, createWebHistory } from 'vue-router';
import Home from 'components/Home.vue';  // Exemplo de componente
import Movies from 'components/Movies.vue';  // Exemplo de outro componente

const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
