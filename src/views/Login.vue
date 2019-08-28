<template>
	<div id="login">
		<header>
			<van-nav-bar
				title="登录账号"
				left-text="返回"		 
				left-arrow
				@click-left="onClickLeft"		 
			/>
		</header>
		<section>
			<div class="img">
				<img src="../img/chaopin.png"/>	
			</div>			
			<div id="dlzc">
				<van-cell-group>
				  <van-field v-model="value" placeholder="请输入手机号" />
				  <van-field v-model="password" type="password"  placeholder="密码"/>
				</van-cell-group>
				<van-button type="primary" class='box' @click='login()'>登录</van-button>
			</div>	
			<div class="zhuce">
				<router-link to="/register">创建账号</router-link>
				<router-link to="/getword" >忘记密码？</router-link>
			</div>
				
				
			
		</section>	
		<footer>
		<div>
			<p>第三方账号直接登录</p>
		</div>
		<div class="btm">
			<van-icon name="chat"  /><van-icon name="friends" />
		</div>	
		</footer>
	</div>
	


</template>

<script>
import api from '../api/api_try'
export default {
	name:'login',
	data(){
		return{
			value:'',
			password:''
		}
	},
	methods:{
		onClickLeft() {
		 this.$router.push('/home');		 
		},
		login(){
            let data = {
               "userName":this.value,
	           "password":this.password
            }
            api.userLogin(data).then(res=>{
          	 if(res.data.code=="success"){
          	 	 this.$router.push('/home');
          	 	  localStorage.setItem('token',res.data.token);
          	 	  localStorage.setItem("userInfo",this.value)
          	 	 this.$toast("登录成功")
          	 }else{
          	 	this.$toast("用户名或密码错误")
          	 }
        })
        },
	}
}
</script>

<style scoped>
#login{
display:flex;flex-direction:column;

}

section{flex: 1;overflow:auto;}
.img{
display:flex;justify-content:space-around;align-items:center;
}
.img img{
width:100px;
height: 100px;
margin:40px 0;
}
#dlzc{
margin: 0 20px;
}
.box{
width: 100%;
margin:30px 0;
}
.zhuce{
display:flex;justify-content:space-around;align-items:center;
}
footer{
display:flex;justify-content:space-around;flex-direction:column;
height: 100px;text-align: center;margin-top: 100px;
}
.btm{
display:flex;justify-content:space-around;align-items:center;
}
</style>