<template>
  <div>
     <div class="nav-bar">		
			<van-icon name="arrow-left" color="white" size="25px" class="nav-left" @click="gohome()"/>			
			<van-search  class="search" placeholder="自动检索" shape="round" v-model="value"  />
			<van-button type="default" class="nav-right" color="#333333" @click="tap()">搜索</van-button>
    </div>
		<div>
			<h2>热门搜索</h2>
			<div class="bat">
				<p>裤子</p>
				<p>衬衫</p>
				<p>鞋子</p>
			</div>
			<div class="bat">
				<p>短裤</p>
				<p>休闲裤.运动鞋</p>
				<p></p>
			</div>
		</div>
  </div>
</template>

<script>
export default {
    name:'Search',
    data(){
    	return{
    		value:""
    	}
    },
    methods:{
    	gohome(){
    		this.$router.push("/Home");
    	},
    	tap(){
    		if(this.value){
    			this.$router.push("/SportShoes");
    		}else{   			
    			this.$toast("请输入内容")
    		}
    	}
    }
   
}
</script>

<style scoped>
.nav-bar {
	display:flex;justify-content:space-around;align-items:center;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
}
.search{
	width: 260px;
	padding: 0;
}
.bat{
	display:flex;justify-content:space-around;align-items:center;
	
}

h2{
	margin-left: 20px;
}
</style>