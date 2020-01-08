import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import beforEach from '../views/beforeEach.vue'

Vue.use(VueRouter)






const routes = [
  {
    path: '/',
    component:beforeEach
  },
  {
    path: '/b1',
    component: () => import('../views/b1.vue'),
    //记录从哪里进来
    beforeEnter: (to, from, next) => {
      if(from.fullpath === '/b2' && to.fullpath === '/b1'){
        next('/');
      }else{
        next();
      }
    }

  },
  {
    path: '/b2',
    component: () => import('../views/b2.vue')
  }
]

router.beforeEach((to,from,next)=>{
  if(from.fullpath === '/b1' && to.fullpath === '/b2'){
    next(false);
  }else{
    next();
  }


})




// const router = new VueRouter({
//   mode: 'history',
//   // base: process.env.BASE_URL,
//   routes
// })




export default router
