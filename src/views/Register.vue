<template>
	<div>
		<header>
			<van-nav-bar
			  title="创建账号"
			  left-text="返回"		 
			  left-arrow
			  @click-left="onClickLeft"		 
			/>
		</header>
		<section>
			<div class="set1">
				<van-cell-group>
				  <van-field
				    v-model="username"			   
				    clearable		   
				    right-icon="question-o"
				    placeholder="请输入手机号"
				    @click-right-icon="$toast('请输入手机号')"
				  />
				  <van-field
				    v-model="password"
				    type="password"	   
				    placeholder="设置密码"
				   
				  />
				</van-cell-group>		
			</div>
			<div class="set2">
				<van-button type="primary" class='box' @click='register()'>注册</van-button>
			</div>				
		</section>
		
		
	</div>
</template>

<script>
import api from '../api/api_try'    	
	export default{
		name:'register',
		data(){
			return{ 
				username:'',
				password:''
			}
		},
		methods:{
		    onClickLeft() {
		    	this.$router.go(-1);
		    },
			register(){
	            let data = {
	                "userName":this.username,
	                "password":this.password
	            };
	            api.userReg(data).then(res=>{
	               if(res.data.message=="用户名已存在！"){
	               	this.$toast("用户名已存在！")
	               }else{
	               	this.$toast("注册成功")
	               	this.$router.push('/login');					
	               }
	            })
	        }
		}
	}
</script>

<style scoped>
section{
margin-top: 100px;
}
.set1{
margin:0 10px;
}
.set2{
margin:0 15px;
margin-top:30px;
}
	.box{
		width: 100%;
	}
</style>