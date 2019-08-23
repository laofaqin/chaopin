import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:'/Home',
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
          redirect:'/ShoeSort',
          component: () => import('../views/ProSort'),
          children:[
          	{
          		path:'/shoesort',
          		name:'shoesort',         		
 						component:()=>import('../views/ShoeSort')
          	},
          	{
          		path:'/bagsort',
          		name:'bagsort',
          		component:()=>import('../views/BagSort')
          	}
          ]
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
    // },
    {
      path:'/Setting',
      name:'Setting',
      component:() => import('../views/Setting')
    },
    {
      path:'/MyOrder',
      name:'MyOrder',
      component:() => import('../views/MyOrder') 
    },
    {
      path:'/AllOrder',
      name:'AllOrder',
      component:() => import('../views/AllOrder')
    },
    {
      path:'/Sent',
      name:'Sent',
      component:() => import('../views/Sent')
    },
    {
      path:'/GetPro',
      name:'GetPro',
      component:() => import('../views/GetPro')
    },
    {
      path:'/MyPrice',
      name:'MyPrice',
      component:() => import('../views/MyPrice')
    },
    {
      path:'/MyCollect',
      name:'MyCollect',
      component:() => import('../views/MyCollect')
    },
    {
      path:'/MyEstimate',
      name:'MyEstimate',
      component:() => import('../views/MyEstimate')
    },
    {
      path:'/MyAddress',
      name:'MyAddress',
      component:() => import('../views/MyAddress')
    },
    {
      path:'/NewAddress',
      name:'NewAddress',
      component:() => import('../views/NewAddress')
    },
    {
      path:'/MyCoupon',
      name:'MyCoupon',
      component:() => import('../views/MyCoupon')
    },
    {
      path:'/Service',
      name:'Service',
      component:() => import('../views/Service')
    },
    {
      path:'/MyInfo',
      name:'MyInfo',
      component:() => import('../views/MyInfo')
    },
    {
      path:'/About',
      name:'About',
      component:() => import('../views/About')
    },
    {
      path:'/Suggestion',
      name:'Suggestion',
      component:() => import('../views/Suggestion')
    },
    {
    	path: '/getword',
      name: 'getword',
      component:() => import('../views/GetWord')
    }
  ]
})
