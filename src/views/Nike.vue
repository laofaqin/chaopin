<template>
	<div>
		<header>
			<van-nav-bar
				title="耐克"
				left-text="返回"		 
				left-arrow
				@click-left="onClickLeft"		 
			/>
		</header>
		<nav>
			<img src="../img/Screenshot_20190822-164045_02.jpg" alt="" />
		</nav>
	</div>
</template>

<script>
	export	default{
		name:'nike'
	}
</script>

<style scoped>

header{
position: fixed;
}

</style>