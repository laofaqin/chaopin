<template>
<div>
    <h2>用户</h2>
  <button @click='login()'>用户登录</button>
  <button @click='register()'>用户注册</button>
  <button @click='detail()'>商品详情</button>
  <button @click='addCart()'>加入购物车</button>
  <button @click='proList()'>商品列表</button>
  <button @click='getInfo()'>用户信息</button>
  <button @click='newAdress()'>新增地址</button>
  <button @click='getAdress()'>获取地址列表</button>

  <!--  -->
  <button @click='sentOrders()'>订单提交</button>
  <button @click='getOrders()'>获取订单</button>
  <!-- <button @click='orderDetail()'>订单详情</button> -->
    

    <h2>管理</h2>
    <button @click="admin()">admin登录</button>
    <button @click="getInfo()">获取管理员信息</button>
    <button @click="newSortInfo()">新增商品分类信息</button>
    <button @click="newPro()">添加商品</button>
    <button @click="list()">获取商品分类列表</button>
</div>
</template>

<script>
import api from '../api/api_try'        //此处引用你自己在src/api自定义的js文件
import api1 from '../api/api_zhang'
export default {
    methods:{
        login(){
            let data = {
                "userName":'mooncup',
                "password":'mooncup'
            }
            api.userLogin(data).then(res=>{
            console.log(res)
            localStorage.setItem('token',res.data.token)
            console.log(res.config.data)
            localStorage.setItem('userInfo','mooncup')
        })
        },
        register(){
            let data = {
                "userName":'mooncup',
                "password":'mooncup'
            };
            api.userReg(data).then(res=>{
                console.log(res)
            })
        },
        //获取商品详情
        detail(){
            let pid='5d5f898ab91b9569e466e8b6'
            api.getDetail(pid).then(res=>{
                console.log(res)
            })
        },
        addCart(){
            let data ={
                product:'5d5e6e92b91b9569e466e852',
                // quantity  数量(默认值1)
            }
            api.addCart(data).then(res=>{
                console.log(res)
            })
        },
        proList(){
            let data={
                per:10,  //每一页显示的数量,默认10
                page:1,    //当前页码,默认1
                name:'运动鞋',  //商品名字
                productCategory:'5d5f5a56b91b9569e466e887' //分类id
            }
            api.getProList(data).then(res=>{
                console.log(res.data.products)
            })
        },
        //获取用户信息
        getInfo(){
            api.getUserInfo().then(res=>{
                console.log(res)
            })
        },

        //新增地址
        newAdress(){
            let data={
                receiver:    '老发',
                mobile :     '184****3138',
                regions :   ' 河南省-郑州市-二七区',
                address : '  航海路1290号',
                idDefault:false   //是否默认(true/false)
            }
            api.newAdress(data).then(res=>{
                console.log(res)
            })
        },
        // 获取地址列表
        getAdress(){
            api.getAdress().then(res=>{
                console.log(res.data.addresses)
            })
        },
        // 订单提交 
        sentOrders(){
            let data = {
                receiver:'哈哈h哈',
                regions:'河南省郑州市',
                address:'高新区中鸿花园',
                orderDetails:[
                    {
                        quantity:1,
                        product:'5d5f5a56b91b9569e466e887',
                        price:777
                    },
                    {
                        quantity:5,
                        product:'5d5f5a56b91b9569e466e  ',
                        price:111
                    }
                ]
            }
            api1.sentOrders(data).then(res=>{
                console.log(res)
            })
        },

        // 获取订单列表
        getOrders(){
            let params = {
                per:10,
                page:1
            }
            api1.getOrders(params).then(res=>{
                console.log(res)
            })
        },

        // 订单详情
        

// --------管理新系统--------------------------------
        admin(){
           api.adminLogin().then(res=>{
               console.log(res)
               localStorage.setItem('token',res.data.token)
           }) 
        },
        //获取管理员信息
        getInfo(){
            api.adminInfo().then(res=>{
                console.log(res)
            })
        },
        //新增商品分类信息
        newSortInfo(){
            let data = {
                name:'good',          //商品名字
                descriptions:'IT is good',  //商品简介
                coverImg:'随便一个网址吧'      //主图
            }
            api.addSort(data).then(res=>{
                console.log(res)
                localStorage.setItem(`${res.data.name}`,`${res.data._id}`)
            })
        },
        //新增商品信息
        newPro(){
            let data  ={
                name    :'足球',
                descriptions :'耐克Nike Air Force 1 空军一号黄色靴子小麦色等等等等',
                quantity  :4,
                price    :99999,
                coverImg :'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567080783&di=7a9e51caed51be46d58a5b4f0da84213&imgtype=jpg&er=1&src=http%3A%2F%2Fimg007.hc360.cn%2Fk3%2FM0A%2FC1%2F20%2FwKhQv1eNvbSEEbNPAAAAAKz8Ryg386.jpg',
                productCategory :'5d5f55f3b91b9569e466e886'
            };
            api.addPro(data).then(res=>{
                console.log(res)
            })
        },
        //获取商品分类列表
        list(){
            let data = {
                per:20,   //每一页显示的数量,默认10
                page:1,  //当前页码,默认1
                name:'good'  //商品名字
            }
            api.getSort(data).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>