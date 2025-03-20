import { createRouter, createWebHistory } from 'vue-router';
import Home from 'components/Home.vue'; 
import Movies from 'components/Movies.vue';  

const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
