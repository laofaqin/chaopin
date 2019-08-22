<template>
	<div>
		<header>
			<van-nav-bar
			  title="找回密码"
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
			    placeholder="请输入用户名"
			    @click-right-icon="$toast('请输入用户名')"
			  />
			  <van-field
			    v-model="password"
			    type="password"	   
			    placeholder="设置密码"
			   
			  />
			  <van-field
			    v-model="password"
			    type="password"	   
			    placeholder="重新输入密码"
			   
			  />
			</van-cell-group>		
		</div>
		<div class="set2">
			<van-button type="primary" class='box'>完成</van-button>
		</div>				
		</section>
		
		
	</div>
</template>

<script>
	export default{
		name:'getword',
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