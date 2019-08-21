<template>
	<div id="lzq-box">
		<van-nav-bar
		  title="登录账号"
		  left-text="返回"		 
		  left-arrow
		  @click-left="onClickLeft"		 
		/>
		<van-cell-group>
		  <van-field v-model="value" placeholder="请输入用户名" />
		  <van-field v-model="password" type="password"  placeholder="密码"/>
		</van-cell-group>
		<br />
		<van-button type="primary" class='box'>登录</van-button>
		<br />
		<br />
		<router-link to="/register">创建账号</router-link>
		<router-link to="/register">忘记密码？</router-link>
		<div id="btm">
		<p>第三方账号直接登录</p>
		</div>
	</div>


</template>

<script>
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
		    this.$router.go(-1);
		}
	}
}
</script>

<style scoped>
#lzq-box{
	position: relative;
	margin:0 20px;
}
.box{
	width: 100%;
}
#btm{
	margin-top: 300px;
}
</style>