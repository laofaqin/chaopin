import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path:'/',
          redirect:'/Home'
        },
        {
          path: '/Home',
          name: 'Home',
          component: () => import('../views/Home')
        },
        {
          path: '/ProSort',
          name: 'ProSort',
          component: () => import('../views/ProSort')
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: () => import('../views/Cart')
        },
        {
          path: '/Mine',
          name: 'Mine',
          component: () => import('../views/Mine')
        }

      ]
    },
    {
      path:'/Try',
      name:'Try',
      component:()=>import('../views/Try')
    },
    {
      path:'/Search',
      name:'Search',
      component:()=>import('../views/Search')
    },
    {
      path:'/Cart',
      name:'Cart',
      component:()=>import('../views/Cart')
    }

  ]
})
