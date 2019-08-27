<template>
  <div id="lzq-fenlei">
  		<div id="top">
  			<h2>产品分类</h2>
  		</div>
  	  <div id="spfl">
  	  	<van-sidebar v-model="activeKey">
				  <van-sidebar-item title="运动鞋" to="/shoesort"/>
				  <van-sidebar-item title="箱包" to="/bagsort"/>
				  <van-sidebar-item title="运动鞋" to="/shoesort"/>
				  <van-sidebar-item title="箱包" to="/bagsort"/>
				  <van-sidebar-item title="运动鞋" to="/shoesort"/>
				  <van-sidebar-item title="箱包" to="/bagsort"/>
				  <van-sidebar-item title="运动鞋" to="/shoesort"/>
				  <van-sidebar-item title="箱包" to="/bagsort"/>
				  <van-sidebar-item title="运动鞋" to="/shoesort"/>
				</van-sidebar>
				<div>
					<router-view></router-view>			
				</div>
  	  </div>
  </div>
</template>

<script>
export default {
	name:'ProSort',
  data(){
    return {
      activeKey: 0,
    };
  }
};
</script>

<style scoped>
#lzq-fenlei{
	display: flex;
	flex-direction: column;
	height:92vh
}
#top{
	/* width:100%; */
	height:60px;
	line-height:30px;
	background: black;
}	
#top h2{
	color: white;	
	text-align: center;
}	
#spfl{
	flex:1;
	overflow: auto;
	display:flex;
	justify-content:flex-start; 
}

</style>