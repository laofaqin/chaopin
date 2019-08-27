<template>
	<div id="shoe">
		<div>
			<img src="../img/xiangbao1.png" class="sak" />
		</div>
		<div>
			<ul>
				<li v-tap='{methods:coach}'>
					<img src="../img/coach.png" alt="" />
					<span>蔻驰</span>
				</li>
				<li class="li2" v-tap='{methods:mcm}'>
					<img src="../img/mcm.png" alt="" />
					<span>MCM</span>
				</li>
				<li v-tap='{methods:maike}'>
					<img src="../img/maike.png" alt="" />
					<span>迈克.科尔斯</span>
				</li>
				<li v-tap='{methods:furla}'>
					<img src="../img/furla.png" alt="" />
					<span>芙拉</span>
				</li>
			</ul>
		</div>
		
	</div>

</template>

<script>	
export default {
	name:'shoesort',
	mounted(){
			this.$store.commit('bag');
			console.log(222)
	},
	methods:{
		coach(){
			this.$store.commit('coach')
			this.$router.push('./Nike')
		},
		mcm(){
			this.$store.commit('mcm')
			this.$router.push('./Nike')
		},
		maike(){
			this.$store.commit('maike')
			this.$router.push('./Nike')
		},
		furla(){
			this.$store.commit('furla')
			this.$router.push('./Nike')
		}
	},
}	

</script>

<style scoped>
#shoe{
width:290px;
}
.sak{
width: 245px;
height: 120px;
margin:20px;
}
ul{
display: flex;flex-wrap: wrap;
}
ul li{
	width:90px;
	height: 120px;
	text-align: center;
}
ul li img{
width: 90px;
height: 90px;
}
.li2{
margin:0 10px;
}
</style>