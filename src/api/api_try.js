import * as API from './index'

export default{
	
	// 用户登录
	userLogin:data=>{
		return API.POST('/api/v1/auth/login',data)
	},
	// 用户注册 
	userReg:data=>{
		return API.POST('/api/v1/auth/reg',data)
	},
	//获取商品详情
	getDetail:pid=>{
		return API.GET(`/api/v1/products/${pid}`)
	},
	addCart:data=>{
		return API.POST('/api/v1/shop_carts',data)
	}	,
	getProList:data=>{
		return API.GET('/api/v1/products',data)
	},

	// -------后台接口--------------
	// 登录
	adminLogin:()=>{
		return API.POST('/api/v1/auth/manager_login',{userName:'admin',password:'admin'})
	},
	//获取管理员信息
	adminInfo:()=>{
		return API.GET('/api/v1/users/manager_info')
	},
	// 新增分类信息
	addSort:data=>{
		return API.POST('/api/v1/admin/product_categories',data)
	},
	// 新增商品信息
	addPro:data=>{
		return API.POST('/api/v1/admin/products',data)
	},
	// 获取分类列表
	getSort:data=>{
		return API.GET('/api/v1/admin/product_categories',data)
	}
}