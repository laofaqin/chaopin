<template>
	<div id="shoe">
		<div>
			<img src="../img/sneaker.png" class="sak" />
		</div>
		<div>
			<ul>
				<li v-tap='{methods:nike}'>
					<img src="../img/naike.png" alt="" />
					<span>耐克</span>
				</li>
				<li v-tap='{methods:conver}' class="li2">
					<img src="../img/kuangwei.png" alt="" />
					<span>匡威</span>
				</li>
				<li v-tap='{methods:adidas}'>
					<img src="../img/adidas.png" alt="" />
					<span>阿迪达斯</span>
				</li>
				<li v-tap='{methods:vans}'>
					<img src="../img/vans.png" alt="" />
					<span>vans</span>
				</li>
			</ul>
		</div>
		
	</div>

</template>

<script>	
export default {
	name:'shoesort',
	methods:{
		nike(){
			this.$store.commit('nike')
			this.$router.push('./Nike')
		},
		conver(){
			this.$store.commit('conver')
			this.$router.push('./Nike')
		},
		adidas(){
			this.$store.commit('adidas')
			this.$router.push('./Nike')
		},
		vans(){
			this.$store.commit('vans')
			this.$router.push('./Nike')
		}
	},
	mounted(){
			this.$store.commit('sport')
	}
	
}	

</script>

<style scoped>
#shoe{
width:290px;
}
.sak{
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