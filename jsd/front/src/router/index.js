import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Admin from '../pages/admin/Admin.vue';
import Products from '../pages/admin/Products.vue'
import Main from '../pages/Main.vue';
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {path: 'products', component: Products}
      ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router;