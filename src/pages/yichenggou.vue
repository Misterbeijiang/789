<template>

		<div class="all-box">
			<Head title="一车购"></Head>
			<a class="a-title"><img src="../../static/img/banner-one-percent_c248f93.png" /> </a>
			<Fangan></Fangan>
		</div>

</template>
	
<script>

	const Head = () => import("../components/head/head")
	const Fangan = () => import("../components/fangan/fangan")
	
	

	export default{
		components:{
			Head,
			Fangan
			
		},
		data(){
			return{
			
			}
		},		
	}
</script>

<style scoped>
	.all-box{
		background-image: url(../../static/img/bg_ee89a75.png);
		background-repeat:repeat;
		width: 100%;
		
	}
	.a-title{
		display: block;
		 margin: 0 auto;
     	width: 246.5px;
   		height: 174px;	

	}
	.a-title img{
		width: 246.5px;
   		height: 95px;	
   		margin-top: 45px;
	}
	
</style>