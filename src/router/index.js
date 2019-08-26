import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'



Vue.use(Router)

const router =  new Router({
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
          component: () => import('../views/Home'),
          meta:{
            title:'首页'
          }
        },
        {
          path: '/ProSort',
          name: 'ProSort',
          redirect:'/ShoeSort',
          component: () => import('../views/ProSort'),
          meta:{
            title:'产品分类'
          },
          children:[
          	{
          		path:'/shoesort',
          		name:'shoesort',         		
               component:()=>import('../views/ShoeSort'),
               meta:{
                title:'运动鞋'
              },
          	},
          	{
          		path:'/bagsort',
          		name:'bagsort',
              component:()=>import('../views/BagSort'),
              meta:{
                title:'箱包'
              },
          	}
          ]
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: () => import('../views/Cart'),
          meta:{
            title:'购物车'
          }
        },
        {
          path: '/Mine',
          name: 'Mine',
          component: () => import('../views/Mine'),
          meta:{
            title:'我的'
          }
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
      component:()=>import('../views/Search'),
      meta:{
        title:'搜索'
      }
    },
    // {
    //   path:'/Cart',
    //   name:'Cart',
    //   component:()=>import('../views/Cart')
    // },
    {
    	path: '/login',
      name: 'login',
      component:() => import('../views/Login'),
      meta:{
        title:'登陆'
      }
    },
    {
    	path: '/register',
      name: 'register',
      component:() => import('../views/Register'),
      meta:{
        title:'注册'
      }
    },
    {
      path:'/SportShoes',
      name:'SportShoes',
      component:()=>import('../views/SportShoes'),
      meta:{
        title:'运动鞋'
      }
    },
    //这一块注释是 覃永发 临时放的,后期有用, 不要删.
    {
      path:'/Bag',
      name:'Bag',
      component:()=>import('../views/Bag')
    },
    {
      path:'/Watch',
      name:'Watch',
      component:()=>import('../views/Watch')
    },
    {
      path:'/Beauty',
      name:'Beauty',
      component:()=>import('../views/Beauty')
    },
    {
      path:'/Clothes',
      name:'Clothes',
      component:()=>import('../views/Clothes')
    },
    {
      path:'/Setting',
      name:'Setting',
      component:() => import('../views/Setting'),
      meta:{
        title:'设置'
      }
    },
    {
      path:'/MyOrder',
      name:'MyOrder',
      component:() => import('../views/MyOrder'),
      meta:{
        title:'我的订单'
      } 
    },
    {
      path:'/AllOrder',
      name:'AllOrder',
      component:() => import('../views/AllOrder'),
      meta:{
        title:'我的订单'
      }
    },
    {
      path:'/Sent',
      name:'Sent',
      component:() => import('../views/Sent'),
      meta:{
        title:'我的订单'
      }
    },
    {
      path:'/GetPro',
      name:'GetPro',
      component:() => import('../views/GetPro'),
      meta:{
        title:'我的订单'
      }
    },
    {
      path:'/MyPrice',
      name:'MyPrice',
      component:() => import('../views/MyPrice'),
      meta:{
        title:'我的砍价'
      }
    },
    {
      path:'/MyCollect',
      name:'MyCollect',
      component:() => import('../views/MyCollect'),
      meta:{
        title:'我的收藏'
      }
    },
    {
      path:'/MyEstimate',
      name:'MyEstimate',
      component:() => import('../views/MyEstimate'),
      meta:{
        title:'我的评价'
      }
    },
    {
      path:'/MyAddress',
      name:'MyAddress',
      component:() => import('../views/MyAddress'),
      meta:{
        title:'我的地址'
      }
    },
    {
      path:'/NewAddress',
      name:'NewAddress',
      component:() => import('../views/NewAddress'),
      meta:{
        title:'新增地址'
      }
    },
    {
      path:'/MyCoupon',
      name:'MyCoupon',
      component:() => import('../views/MyCoupon'),
      meta:{
        title:'优惠券'
      }
    },
    {
      path:'/Service',
      name:'Service',
      component:() => import('../views/Service'),
      meta:{
        title:'联系客服'
      }
    },
    {
      path:'/MyInfo',
      name:'MyInfo',
      component:() => import('../views/MyInfo'),
      meta:{
        title:'个人信息'
      }
    },
    {
      path:'/About',
      name:'About',
      component:() => import('../views/About'),
      meta:{
        title:'关于我们'
      }
    },
    {
      path:'/Suggestion',
      name:'Suggestion',
      component:() => import('../views/Suggestion'),
      meta:{
        title:'投诉建议'
      }
    },
    {
    	path: '/getword',
      name: 'getword',
      component:() => import('../views/GetWord'),
      meta:{
        title:'找回密码'
      }
    },
    {
    	path: '/GetCut',
      name: 'GetCut',
      component:() => import('../views/GetCut')
    },
    {
      path:'/axios',
      name:'Axios',
      component:()=>import('../views/axios')
    },
    {
      path:'/ProDetail',
      name:'ProDetail',
      component:()=>import('../views/ProDetail')
    },
    {
      path:'/Tanchu',
      name:'Tanchu',
      component:()=>import('../views/Tanchu')
    },
    {
      path:'/Nike',
      name:'Nike',
      component:()=>import('../views/Nike')
    },
    {
      path:'/PayOrder',
      name:'PayOrder',
      component:()=>import('../views/PayOrder')
    },


  ]
})



router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router;