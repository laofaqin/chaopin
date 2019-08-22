<template>
  <div id="lzq-fenlei">
  		<div id="top">
  			<p>产品分类</p>
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

}
#top{
	width:100%;
	height:60px;
	background: black;
}	
#top p{
	color: white;	
	text-align: center;
}	
#spfl{
	display:flex;
	justify-content:flex-start; 
}

</style>