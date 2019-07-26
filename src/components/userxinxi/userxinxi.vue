<template>
	<div>
		<div class="head">
			<div class="xiaoxi">
				<a ><img src="../../../static/img/xiaoxi.png"> </a>
				<a>消息</a>
			</div>
			<div class="touxiang-box">
				<div class="touxiang-1"><img src="../../../static/img/touxiang.png" alt=""> </div>
				<div class="userphone">
					<!-- <span>1234567987</span> -->
					123465546
				</div>
			</div>
			<div class="dingdan">
				<div class="dingdan-1">
					<p>1</p>
					<p>购物车</p>
				</div>
				<div class="dingdan-1">
					<p>1</p>
					<p>我的咨询</p>
				</div>
				<div class="dingdan-1">
					<p>1</p>
					<p>浏览历史</p>
				</div>
				<div class="dingdan-1">
					<p>1</p>
					<p>我的订单</p>
				</div>
			</div>
			<div class="my-box1">
				<div class="my-box">
					<div class="my-1">
						<span><img src="../../../static/img/12.png" > </span>
						<span>我卖的车</span>
					</div>
					<div class="my-1">
						<span><img src="../../../static/img/222.png" > </span>
						<span>我的分期</span>
					</div>
					<div class="my-1">
						<span><img src="../../../static/img/333.png" > </span>
						<span>我的合同</span>
					</div>
					<div class="my-1">
						<span><img src="../../../static/img/4444.png" > </span>
						<span>优惠券</span>
					</div>
				</div>
			</div>
			
		<!-- </div> -->
		</div>
		<!-- 预约模块 -->
		<div class="yy">
			<div class="yy-1">
				<span>我的预约</span>
				<div class="yy-right">
					<span></span>
					<span class="kk"></span>
				</div>
			</div>
			<div class="yy-1">
				<span>我的预约</span>
				<div class="yy-right">
					<span></span>
					<span class="kk"></span>
				</div>
			</div>
			<div class="yy-1">
				<span>优信养车</span>
				<div class="yy-right">
					<span>优信认证，品质保障</span>
					<span class="kk"></span>
				</div>
				
			</div>
			<div class="yy-1">
				<span>我的预约</span>
				<div class="yy-right">
					<span></span>
					<span class="kk"></span>
				</div>
			</div>
		</div>
		<!-- 工具 -->
		<div class="yy" style="margin-top:18px">
			<div class="yy-1">
				<span>常用工具</span>
				<div class="yy-right">
					<span></span>
					<span class="kk"></span>
				</div>
			</div>
			<div class="yy-1">
				<span>我的活动</span>
				<div class="yy-right">
					<span></span>
					<span class="kk"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.head{                    
		width: 100%;
		height:5rem ;
		background: linear-gradient(to right,#f0652c,#f24422);
		padding-top: 1rem; 
	}
	.touxiang-box{
		padding-left: 4%;
		width: 100%;
		height: 70px;
	}
	.touxiang-1{
		float: left;
		display:block;
		height: 70px;
		width: 70px;
		border-radius: 50%;
	}
	.touxiang-1 img{
		width: 70px;
	}
	.userphone{
		padding-left: 4%;
		font-size: 24px;
		font-weight: 600;
		color:white;
		line-height: 70px;
		float: left;
		height: 70px;
		width: 200px;
		display: block;
	}
	.dingdan{
		margin: 20px auto 0;
		display: flex;
		justify-content: space-around;
		width: 95%;
		height: 70px;
	}
	.dingdan-1{
		display: inline-block;
		text-align: center;
		height: 70px;
		min-width: 50px;
		width: 14%;
	}
	.dingdan-1 p:nth-child(1){
		font-size: 26px;
		color: white;
		font-weight: 600;


	}
	.dingdan-1 p:nth-child(2){
		color:#565656;
		color: white;
	}
	.my-box1{
		overflow: hidden;
		position: relative;
		background: white;
		height: 1.9rem;
		margin: -4px 2.5% 0;
		border-radius: 5px;
		z-index: 10;
		top:.4rem;
	}
	.my-box{
		display: flex;
		justify-content: space-around;
		width: 95%;
		height: 1.9rem;
		background: white;
		position: absolute;
	}
	.my-1{
		text-align: center;
		color: #5b5b5b;
		width: 14%;
		height: 90px;
		min-width: 50px;
	}
	.my-1 img{
		margin-top:10px;
		display:inline-block;
		margin-bottom: 5px;
		width: 50px;
		height: 50px;
	}
	.my-1 span{
		display: block;
	}
	.yy{
		width: 95%;
		background: white;
		border-radius: 4px;
		margin:1.5rem 2.5% 0;
	}
	.yy-1{
		width: 94.5%;
		height:50px;
		margin-left: 5.5%;
		line-height: 50px;
		padding-right: 20px;
		border-bottom: 1px solid #eeeeee;
	}
	.yy-1 span:nth-child(1){
		font-size: 16px;
		color:#444444;
		display:inline-block;
	}
	.yy-right span:nth-child(1){
		font-size: 13px;
		color:#c2c2c2;
		display:inline;
	}
	.yy-1 span:nth-child(3) {
		margin-top: 22px;
		float: right;
		display:block;
		width: 8.5px;
		height: 8.5px;
		border:1px solid #c2c2c2;
		border-width: 2px 0px 0px 2px;
    	transform: rotate(135deg);
		
	}
	.kk{
		display:inline-block;
		width: 8.5px;
		height: 8.5px;
		border:1px solid #c2c2c2;
		border-width: 2px 0px 0px 2px;
    	transform: rotate(135deg);
		margin-top: 22px;
	}
	.yy-right{
		height: 50px;
		float:right;
		display:block;
	}
	.xiaoxi{
		float: right;
		width: 40px;
		margin-top: 30px;
		/* padding: 0 20px; */
	}
	.xiaoxi img{
		display:inline-block;
		width: 20px
	}
	.xiaoxi a:nth-child(2){
		display: block;
		font-size: 10px;
		color: #ffffff;
	}
</style>