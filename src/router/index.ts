import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
// const Portfolio = () => import('../views/Projects.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'projects',
  //   component: Projects
  // },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
