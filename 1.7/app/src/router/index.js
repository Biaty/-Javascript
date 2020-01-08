import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // path: '/about/:id',
    path: '/about/:uname/id/:id',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',  
    component: () => import('../views/login.vue'),
  },
  {
    path: '/public/',  
    component: () => import('../views/public.vue'),
    children:[
      {
        path:'p1',   //不能加/
        component: () => import('../views/p1.vue'),
      },
      {
        path:'p2',  
        component: () => import('../views/p2.vue'),
      },
      {
        path:'',  // 如果进入/public/下 ,没有指定children 默认添加一个组件,可以在path上写
        component: () => import('../views/p3.vue'),
      }
    ]
  },

  {
    path: '/p4',  
    name:'p4',
    props:true,
    component: () => import('../views/p4.vue'),
  },
  {
    path: '/p6',  
    // redirect:'p4'
    // component: () => import('../views/p4.vue'),
    redirect:to=>{
      return "/p4"
    }
  },




  {
    path:'*',
    component:() => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // 当前环境的url
  routes
})

export default router
