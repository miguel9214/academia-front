import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentCreate from '../views/StudentCreate.vue'
import StudentEdit from '../views/StudentEdit.vue'
import StudentView from '../views/StudentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/studentCreate',
    name: 'studentCreate',
    component: StudentCreate
  },
  ,
  {
    path: '/studentEdit',
    name: 'studentEdit',
    component: StudentEdit
  }
  ,
  {
    path: '/studentView',
    name: 'studentView',
    component: StudentView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
