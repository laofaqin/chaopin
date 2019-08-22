import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'



Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/Home'
  	},
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
          component: () => import('../views/Mine'),
          children:[
            {
              path:'/MyOrder',
              name:'MyOrder',
              component:() => import('../views/MyOrder') 
            }
          ]
        }
      ]
    },
    {
      path:'/Try',
      name:'Try',
      component:()=>import('../views/Try')
    },
    {
      path:'/Tryy',
      name:'Tryy',
      component:()=>import('../views/Tryy')
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
    },
    {
    	path: '/login',
      name: 'login',
      component:() => import('../views/Login')
    },
    {
    	path: '/register',
      name: 'register',
      component:() => import('../views/Register')
    },
    {
      path:'/SportShoes',
      name:'SportShoes',
      component:()=>import('../views/SportShoes')
    },
    //这一块注释是 覃永发 临时放的,后期有用, 不要删.
    // {
    //   path:'/Bag',
    //   name:'Bag',
    //   component:()=>import('../views/Bag')
    // },
    // {
    //   path:'/Watch',
    //   name:'Watch',
    //   component:()=>import('../views/Watch')
    // },
    // {
    //   path:'/Beauty',
    //   name:'Beauty',
    //   component:()=>import('../views/Beauty')
    // },
    // {
    //   path:'/Clothes',
    //   name:'Clothes',
    //   component:()=>import('../views/Clothes')
    // }

  ]
})
