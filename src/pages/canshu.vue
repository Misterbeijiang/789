<template>
	<div>
		<!--<Canpeihead xingneng="性能参配" wanzheng="完整参配"></Canpeihead>-->
		<CarCanshu xingneng="性能参配" wanzheng="完整参配"></CarCanshu>
	</div>
	
</template>

<script>
	
	const CarCanshu = () => import("../components/carCanshu/carCanshu")
	const Canpeihead = () => import("../components/canpeihead/canpeihead")

	export default{
		components:{
			Canpeihead,
			CarCanshu
		}
	}
</script>

<style>
</style>