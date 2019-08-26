<template>
	<div>		
		<div class="container">			
			<router-view @toparent="getTitle"></router-view>			
		</div>
		
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="wap-home" to="/Home">首页</van-tabbar-item>
		  <van-tabbar-item icon="apps-o" to="/ProSort">分类</van-tabbar-item>
		  <van-tabbar-item icon="shopping-cart-o" @click='cart()' to='/Cart'>购物车</van-tabbar-item>
		  <van-tabbar-item icon="user-o" @click='setting()'>我的</van-tabbar-item>
		</van-tabbar>		
	</div>
</template>
<script>
	export default{
		name:'Index',
		data(){
			return{
				active:0,
				title:'首页'
			}
		},
		methods:{
			getTitle(msg){
				this.title=msg
			},
			cart(){
				if(localStorage.getItem("userInfo")){
					this.$router.push('/Cart');					
				}else{
					this.$router.push('/login');					
				}
			},
			setting(){
				if(localStorage.getItem("userInfo")){
					this.$router.push('/Mine');					
				}else{
					this.$router.push('/login');
				}
			}
		}
	}
</script>
<style scoped>
	.container{
		margin-bottom: 50px;
	}
</style>