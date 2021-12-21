import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
