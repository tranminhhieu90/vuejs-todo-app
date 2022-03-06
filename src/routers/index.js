import { createRouter, createWebHistory } from "vue-router";
import Todo from '../components/Todos';
import Products from '../components/Product';
import About from '../components/About';
import Error from '../components/Error';

const routes = [
  { path: '/', component: Todo},
  { path: '/product', component: Products},
  { path: '/about', component: About},
  { path: '/:pathMatch(.*)*', component: Error}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router; 