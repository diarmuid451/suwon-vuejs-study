import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});
