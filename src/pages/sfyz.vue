<template>
	<div>
		<Head title="身份验证"></Head>
		<div class="sfyz-box">
			<div class="inp-box">
				<span>用户名:</span>
				<input type="text" class="inpt-1" placeholder="请输入用户名"> 
			</div>
			<div class="inp-box">
				<span>电话号:</span>
				<input type="number" class="inpt-1" placeholder="请输入电话号"> 
			</div>
			<div class="inp-box">
				<span>身份证:</span>
				<input type="text" class="inpt-1" placeholder="请输入身份证号码"> 
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "../components/head/head"

	export default{
		components:{
			Head
		}
	}
</script>
	
<style scoped>
.sfyz-box{
	width: 100%;
	/* height: 600px; */
	/* background:saddlebrown; */
	padding: 50px 15px 0;

}
.inp-box{
	/* line-height: 60px; */
	width: 100%;
	height: 40px;
	background: seagreen;
	margin-bottom: 30px;
}
.inp-box span{
	/* text-align: justify; */
	float: left;
	font-size: 18px;
	line-height: 40px;
	display:block;
	height: 40px;
	width: 25%;
	color: white;
	text-align: center;
	background: #ff5a37;
}
.inpt-1{
	padding-left: 10px;
	color: darkgrey;
	font-size: 15px;
	width: 75%;
	height: 40px;
	border: 1px solid #ff5a37 ;
	float: left;
}
</style>