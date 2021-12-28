import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "registrar" */'../views/Home.vue')
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.publica && !store.state.token) {
    next({ name: 'Login' });
  }

  next();
})

export default router
