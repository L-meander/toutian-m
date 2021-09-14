import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'loginIndex',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'layoutIndex',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '/home',
        name: 'homeIndex',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa',
        name: 'qaIndex',
        component: () => import('@/views/qa/')
      },
      {
        path: '/vedio',
        name: 'vedioIndex',
        component: () => import('@/views/vedio/')
      },
      {
        path: '/user',
        name: 'userIndex',
        component: () => import('@/views/user/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
