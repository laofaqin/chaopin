<template>
  <div id="lzq-fenlei">
  		<div id="top">
  			<p>产品分类</p>
  		</div>
  	  <div id="spfl">
  	  	<van-sidebar v-model="activeKey">
				  <van-sidebar-item title="运动鞋" />
				  <van-sidebar-item title="箱包" />
				  <van-sidebar-item title="运动鞋" />
				  <van-sidebar-item title="箱包" />
				  <van-sidebar-item title="运动鞋" />
				  <van-sidebar-item title="箱包" />
				  <van-sidebar-item title="运动鞋" />
				  <van-sidebar-item title="箱包" />
				</van-sidebar>
				<div>
					<img src="../../build/logo.png"/>
					<ul>
						<li>
							<a href="">
								<img src="../assets/logo.png"/>
								<p>耐克</p>
							</a>
						</li>
					</ul>
				</div>
				
  	  </div>
  		
  	
		
  </div>
</template>

<script>
export default {
	name:'prosort',
  data(){
    return {
      activeKey: 0
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
	height:46px;
	background: black;
}	
#top p{
	color: white;	
}	
#spfl{
	display:flex;
	justify-content:flex-start; 

}

</style>