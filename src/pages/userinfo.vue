<template>
	<div class="box">
		<Userxinxi></Userxinxi>
	</div>
</template>

<script>
	
	const Userxinxi = () => import("../components/userxinxi/userxinxi")

	export default{
		components:{
			Userxinxi
		}
	}
</script>
	
<style scoped>
	.box{
		margin-bottom:1.5rem;
	}
</style>