<template>
	<div>		
		<div class="container">			
			<router-view @toparent="getTitle"></router-view>			
		</div>
		
		<van-tabbar v-model="active">
		  <van-tabbar-item name='home' icon="wap-home" to="/Home">首页</van-tabbar-item>
		  <van-tabbar-item name='prosort' icon="apps-o" to="/ProSort">分类</van-tabbar-item>
		  <van-tabbar-item name='cart' icon="shopping-cart-o" to="/Cart">购物车</van-tabbar-item>
		  <van-tabbar-item name='setting' icon="user-o" to="/Mine">我的</van-tabbar-item>
		</van-tabbar>		
	</div>
</template>
<script>
	export default{
		name:'Index',
		data(){
			return{
				active:this.$store.state.active,
				title:'首页'
			}
		},
		methods:{
			getTitle(msg){
				this.title=msg
			},
			
		}
	}
</script>
<style scoped>
	.container{
		margin-bottom: 50px;
	}
</style>