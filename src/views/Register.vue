<template>
	<div>
		<van-nav-bar
		  title="创建账号"
		  left-text="返回"		 
		  left-arrow
		  @click-left="onClickLeft"		 
		/>
		
		<van-cell-group>
		  <van-field
		    v-model="username"
		   
		    clearable		   
		    right-icon="question-o"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('请输入用户名')"
		  />
		
		  <van-field
		    v-model="password"
		    type="password"	   
		    placeholder="设置密码"
		   
		  />
		</van-cell-group>
		<van-button type="primary" class='box'>注册</van-button>
	</div>
</template>

<script>
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
		    }
		}
	}
</script>

<style scoped>
	.box{
		width: 100%;
	}
</style>