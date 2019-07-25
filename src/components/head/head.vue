<template>
	<div>
		<div class="headbox">
			<a class="head-bcak" href="javascript:history.go(-1)"></a>
			{{title}}
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			title:String
		}
	}
	

</script>

<style scoped>
	.headbox{
		width: 100%;
		height: 44px;
		background:white;
		border-bottom: 1px solid #e5e5e5;
		text-align: center;
		z-index: 9;
		font-size: 18px;
		line-height: 44px;
	}	
	.head-bcak{
		display: block;
	    width: 11px;
	    height: 11px;
	    border: solid #ff5a37;
	    border-width: 0 0 2px 2px;
	    transform: rotate(45deg);
	    position: absolute;
	    top: 15px;
	    left:18px;
	}
	
</style>