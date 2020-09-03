import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Projects = () => import('../views/Projects.vue')
const Resume = () => import('../views/Resume.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
