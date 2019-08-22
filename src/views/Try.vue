<template>
  <div>
    <h2>Try</h2>
    <h3>用户</h3>
		<button @click = "reg()">注册</button>
		<button @click="tap()">登陆</button>
		<button @click="tap1()">获取用户信息</button>
		<button @click='getPro()'>获取商品信息</button>
		<button @click='getDetail()'>获取商品详情</button>
		<button @click='addCart()'>添加购物车</button>
		<button @click='cartInfo()'>购物车信息</button>
		<button @click='deleteCart()'>删除购物车信息</button>
		<button @click='postOrder()'>提交订单</button>
		<button @click='orderList()'>获取订单列表</button>
		<!-- <button @click=''></button> -->

		<hr>
		<h3>管理</h3>
		<button @click='log()'>admin登录</button>
		<button @click='adminInfo()'>admin获取信息</button>
		<button @click='getUsers()'>admin用户列表</button>
		<button @click='resetUser()'>修改用户信息</button>
		<button @click='addPro()'>增加商品信息</button>
		<!-- <button @click=''></button> -->

  </div>
</template>

<script>
// import api from '../api/api_pro'
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$axios=axios;
axios.defaults.baseURL = 'http://api.cat-shop.penkuoer.com';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(localStorage.getItem('token')){
		console.log('请求了token')
    		config.headers.common['authorization'] = "Bearer "+localStorage.getItem('token');
    }
    return config;
  }, function (error) {
	// 对请求错误做些什么
	console.log('请求错误')
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('获取到数据了')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    tap23() {
      let data = {
        userName:    "nihaomama",
        password :   "12312jjjj",
        nickName :   "昵称",
        avatar  :    "124"
      }
      api.postUserInfo(data).then(res=>{
        console.log(res)
      })
    },
    tap(){
				this.$axios({
					method:'post',
					url:'/api/v1/auth/login',
					data:{
						"userName":'mooncup',
						"password":'mooncup'
					}
				}).then((data)=>{
					console.log(data.data) 
					localStorage.setItem('token',data.data.token)
				})
			},
			tap1(){
				let token=localStorage.getItem('token')
				this.$axios({
					url:'/api/v1/users/info'
				}).then((data)=>{
					console.log(data.data)
				})
			},
			reg(){
				let data = {
					userName:'mooncup',
					password  :  "mooncup",
					nickName    :"mooncup",
					avatar      :'mooncup'
				}
				this.$axios({
					method:'post',
					url:'/api/v1/auth/reg',
					data:data,

				}).then((res)=>{
					console.log(res)
				})
			},
			// 管理员登录
			log(){
				this.$axios({
					method:'post',
					url:'/api/v1/auth/manager_login',
					data:{
						"userName":'admin',
						"password":'admin'
					}
				}).then((data)=>{
					console.log(data.data.token) 
					localStorage.setItem('token',data.data.token)
				})
			},
			//获取管理员信息
			adminInfo(){
				this.$axios({
					method:'get',
					url:'/api/v1/users/manager_info',
					
				}).then((data)=>{
					console.log(data) 
				})
			},

			// 获取用户列表
			getUsers(){
				this.$axios({
					method:'get',
					url:'/api/v1/admin/users',
					params:{
						// per  :10,
						// page:1  ,
						// userName  :'mooncup'
						// // nickName  :'超级管理员'
					}
				}).then((data)=>{
					console.log(data.data) 
				})
			},

			// 修改用户信息
			resetUser(){
				let uid = '5d5e76bab91b9569e466e854'  		//用户的id
				this.$axios({
					method:'put',
					url:`/api/v1/admin/users/${uid}`,
					data:{
						userName:'mooncup',
						nickName  :"mooncup改名了",
						avatar  :'ahttp'
					}
				}).then((data)=>{
					console.log(data.data) 
				})
			},

			//增加商品信息-----------------------------------------------------------------------
			addPro(){
				this.$axios({
					method:'post',
					url:'/api/v1/admin/products',
					data:{
						name    :'潮品',
						descriptions :'这是未来前段精英们做的一个app',
						quantity  :4,
						price    :8888,
						// coverImg :'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567080783&di=7a9e51caed51be46d58a5b4f0da84213&imgtype=jpg&er=1&src=http%3A%2F%2Fimg007.hc360.cn%2Fk3%2FM0A%2FC1%2F20%2FwKhQv1eNvbSEEbNPAAAAAKz8Ryg386.jpg',
						productCategory :'chaopin'
					}
				}).then((data)=>{
					console.log(data) 
				})
			},
			// 获取商品列表
			getPro(){
				this.$axios({
					method:'get',
					url:'/api/v1/products',
					params:{
						// per   每一页显示的数量,默认10
						// page  当前页码,默认1
						// name  商品名字
						// product_category  分类id
					}
				}).then((data)=>{
					console.log(data) 
				})
			},
			// 获取商品详情
			getDetail(){
				let pid ='5d5e6e92b91b9569e466e852' 
				this.$axios({
					method:'get',
					url:`/api/v1/products/${pid}`,
					params:{
						
					}
				}).then((data)=>{
					console.log(data) 
				})
			},
			// 添加购物车
			addCart(){
				let pid = '5d5e6e92b91b9569e466e852'
				this.$axios({
					method:'post',
					url:'/api/v1/shop_carts',
					params:{
						product:pid,
  						// quantity  数量(默认值1)
					}
				}).then((data)=>{
					console.log(data) 
				})
			},

			// 购物车信息
			cartInfo(){
				this.$axios({
					method:'get',
					url:'/api/v1/shop_carts',
					params:{
						
					}
				}).then((data)=>{
					console.log(data.data) 
				})
			},
			// 删除购物车信息
			deleteCart(){
				let pid = '5d5e918926a7daceceec01fc'		//购物车里商品的id,不是商品本身的id,
				this.$axios({
					method:'delete',
					url:`/api/v1/shop_carts/${pid}`,
				}).then((data)=>{
					console.log(data) 
				})
			},
			//提交订单
			postOrder(){
				let pid = '5d5e6e92b91b9569e466e852';		
				this.$axios({
					method:'post',
					url:`/api/v1/orders`,
					data:{
						receiver:'覃永发',			//收货人
						regions:'广东省罗定市',   	//收货的省市区县
						address:'船步镇',      	 	//收货地址
						orderDetails:[
							{
								quantity:1, 			//数量
								product:pid,   			//商品id
								price:99,     			//商品单价
							},
							{
								quantity:3, 			//数量
								product:pid,   			//商品id
								price:88,
							}
						]
					}
				}).then((data)=>{
					console.log(data) 
				})
			},
			// 获取订单列表
			orderList(){
				this.$axios({
					method:'get',
					url:`/api/v1/orders`,
					params:{
						// per   每一页显示的数量,默认10
  						// page  当前页码,默认1
					}
				}).then((data)=>{
					console.log(data) 
				})
			}
  },
  mounted() {
    

  }
};
</script>

<style scoped>
</style>