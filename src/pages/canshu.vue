<template>
	<div>
		<CarCanshu xingneng="性能参配" wanzheng="完整参配"></CarCanshu>
	</div>
	
</template>

<script>
	const CarCanshu = () => import("../components/carCanshu/carCanshu")
	export default{
		components:{
			CarCanshu
		}
	}
</script>

<style>
</style>