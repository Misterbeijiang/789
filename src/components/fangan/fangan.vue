<template>
	<div>
		<div class="big-box">
			<div class="car-inf">
				<p class="car-inf-p1">别克 英朗三厢 2013款 1.6 手动 GT进取型</p>
				<p class="car-inf-p2">4.39万元</p>
			</div>
			<div class="fenqi">
				<div >
					<span class="fenqi-sp1">0.44<i>万</i></span><br />
					<span class="fenqi-sp2">首付一成</span>
				</div>
				<div class="fenqi-2">
					<span>1.32万</span><br />
					<span>首付三成</span>
				</div>
				<div class="fenqi-2">
					<span>2.20万</span><br />
					<span>首付五成</span>
				</div>
			</div>
			<div class="fangan1">
				<span>方案一</span>
				<span>
					<em class="em1">1107</em><i>万</i><br />
					<em class="yue">月供金额</em>
				</span>
				<span>
					<em class="em1">48</em><i>期</i><br />
					<em class="yue">还款周期</em>
				</span>
			</div>
			<!--------->
			<div class="fangan1">
				<span>方案一</span>
				<span>
					<em class="em1">1107</em><i>万</i><br />
					<em class="yue">月供金额</em>
				</span>
				<span>
					<em class="em1">48</em><i>期</i><br />
					<em class="yue">还款周期</em>
				</span>
			</div>
			<!---------->
			<div class="gps">
				<p>GPS等费用根据实际情况另外收取</p>
				<p>首付以您通过信审后的实际价格为准,首付比例以实际金融方案为准</p>
			</div>
		
		</div>
		<!--------优势-->
		<div class="youshi">
				<p>二手车一成购四大优势</p>
				<div class="youshi-div2">
					<a>
						<img src="../../../static/img/shoufu_954834e.png" />
						<span class="youshi-div2-sp2">低首付</span><br />
						<span class="youshi-div2-sp1">低至车首付的10%</span>
					</a>
					<a>
						<img src="../../../static/img/yurgong_52470dd.png" />
						<span class="youshi-div2-sp2">低月供</span><br />
						<span class="youshi-div2-sp1">月供压力小轻松还款</span>
					</a>
					<a>
						<img src="../../../static/img/menkan_71e60f4.png" />
						<span class="youshi-div2-sp2">低门槛</span><br />
						<span class="youshi-div2-sp1">在线申请通过率高</span>
					</a>
					<a>
						<img src="../../../static/img/shenpi_f6b9762.png" />
						<span class="youshi-div2-sp2">审批快</span><br />
						<span class="youshi-div2-sp1">流程简单快速审批</span>
						
					</a>
				</div>
		</div>
		<!--------申请路程-->
		<div class="liucheng">
			<div class="liucheng-title">
				<span>申请流程</span>
			</div>
			<div class="liucheng-div1">
				<p class="liucheng-div1-p1"><img src="../../../static/img/tijiao_icon_40522f7.png"/>提交申请</p>
				<p class="liucheng-div1-p2"><img src="../../../static/img/dian_5f8aff8.png"/>
						<span>
							线上提交基础信息后，优信会第一时间为您安排专属购车顾问提供1对1服务
						</span>
				</p>
			</div>
			<div class="liucheng-div1">
				<p class="liucheng-div1-p1"><img src="../../../static/img/shenpi_icon_d734538.png"/>急速审批</p>
				<p class="liucheng-div1-p2"><img src="../../../static/img/dian_5f8aff8.png"/>
						<span>
							线下预约看车，在购车顾问协助下提交身份证、驾驶证、借记卡信息，最快60分钟即可查看审批结果
						</span>
				</p>
			</div>
			<div class="liucheng-div1">
				<p class="liucheng-div1-p1"><img src="../../../static/img/yizhantiche_icon_07f2b07.png"/>一展提车</p>
				<p class="liucheng-div1-p2"><img src="../../../static/img/dian_5f8aff8.png"/>
						<span>
							确定成交意向后，优信为您提供包括合同签署、车辆过户、抵押办理在内的一站式服务
						</span>
				</p>
			</div>
		</div>
		<!------------>
		<!--底部-->
		<div class="btm-box">
			<div class="btm-box-div1">
				<router-link to="/Bulekefu">
					在线客服
				</router-link>
			</div>
			<div class="btm-box-div2">
				<router-link to="/Register">
				在线提交资料
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			title:String,
			
		}
	}
	
</script>

<style scoped>
	.big-box{
	/*height: 10rem;*/
	width: 91%;
    margin: 0 auto;
    background: rgba(255,255,255,1);
    border-radius: 4px;
	}
	.car-inf{
		width: 100%;
		height: 98px;
	}
	.car-inf-p1{
		width: 100%;
		display:inline-block;
		height:22px ;
		font-size: 16px;
		text-align:center;
		/*padding:.5rem .5rem 0;*/
		padding: .5rem;
		margin-bottom: .3rem;
		color: #1b1b1b;
	}
	.car-inf-p2{
		font-size: 14px;
		color: #999;
		text-decoration: line-through;
		text-align: center;
		padding-bottom: 16px;
	}
	.fenqi{
		width: 100%;
		height: 58px;
		display: flex;
		justify-content: space-around;
		margin-bottom: 30px;
	}
	.fenqi-sp1{
		font-size: .32rem;
		color: #ff0600;
		font-weight: 600;
	}
	.fenqi-sp2{
		font-size: .32rem;
		
	}
	.fenqi div{
		text-align: center;
		display: inline-block;
	}
	
	.big-box i{
		font-size: .3rem;
		 font-style: normal;
		 color: #ff0600;
		 font-weight: 600;
	}
	.big-box em{
   		 font-style: normal;
	}
	.fenqi-2{
		color: #999999;
		margin-top: 5px;
	}
	.fenqi-2 span:nth-child(1){
		font-size: .32rem;
		    font-weight: 600;
	}
	.fangan1{
		width: 320px;
		padding: .24rem .66rem .28rem .63rem;
		margin: 0 auto;
		background: rgba(250,250,251,1);
		border-radius: 4px;
		margin: 0 auto;
		display: flex;
		text-align: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.yue{
		font-size: 12px;
		display: inline-block;
		
	}
	.fangan1 span{
		display: inline-block;
		height: 37px;
		font-size: .32rem;
		letter-spacing: .017rem;
    	color: #585858;
	}
	.em1{
		font-size: .32rem;
		color: #ff0600;
		font-weight: 600;
	}
	.gps{
		width: 305px;
		margin: 0 auto;
		font-size:12px;
	    letter-spacing: 1.1px;
	    color: #999;
	    margin-top: 25px;
	    padding-bottom: 19px;
	}
	.youshi{
		width: 91%;
		/*margin-top: 10px;*/
		margin: 10px auto 0;
		background: #ffffff;
		border-radius: 4px;
		margin-bottom: 10px;
	}
	.youshi p:nth-child(1){
	    font-size:18px;
	    font-weight: 500;
	    text-align: center;
	    color: #FF0600;
	    margin-bottom: ;
	    padding-top: 24px;
	    margin-bottom: 15px;
	}
	.youshi-div2{
		width: 315px;
		background: ;
		margin: 0 auto;
		}
	.youshi-div2 a{
		display: inline-block;
		width: 49%;
		border-radius: 4px;
    	background: #fafafb;
		height: 1.5rem;
		padding: .24rem .42rem .24rem .28rem;
		margin-bottom: .26rem;
	}
	.youshi-div2 img{
		display: inline;
		width: 41px;
		vertical-align:middle;
	}
	.youshi-div2 span{
		width: 60px;
		display: inline-block;
	}
	.youshi-div2-sp2{
		position: absolute;
		margin-left: 10px;
		font-size: 16px;
		margin-top: -5px;
	}
	.youshi-div2-sp1{
		position: absolute;
		margin-left: 52px;
		margin-top: -28px;
		font-size: 12px;
		color: #585858
		
	}
	.liucheng{
		width: 92%;
		height: 378px;
		background: #ffffff;
		margin: 0 auto;
		border-radius: 4px;
		/*margin-bottom: 150px;*/
	}
	.liucheng-title{
		font-size: 18px;
		text-align: center;
		width: 100%;
	    /*width: auto;*/
	    display: inline-block;
	    font-weight: 500;
	    color: #FF0600;
	    padding: 20px 0;
	}
	.liucheng-div1{
		height: 100px;
		width: 90%;
		margin: 0 auto;
	}
	.liucheng-div1-p1 img{
		display: inline-block;
	    width: .32rem;
    	height: .34rem;
		vertical-align:middle;
		margin-right:.3rem;;
	}
	.liucheng-div1-p1{
		font-size: .35rem;
	    font-weight: 500;
	    letter-spacing: 1.1px;
	    text-align: center;
	    color: #585858;
	    text-align: left;

	}
	.liucheng-div1-p2 img{
		display:inline-block;
		height: 70px;
		vertical-align:middle;
		padding-top: 10px;
		margin-left: 5px;
	}
	.liucheng-div1-p2{
		text-align: left;
	}
	.liucheng-div1-p2 span{
		display: inline-block;
		width: 276px;
		position: absolute;
		margin-left: 25px;
		margin-top: 1px;
		font-size: .26rem;
	    line-height: .4rem;
	    font-weight: 300;
	    letter-spacing: .9px;
	    color: #585858;
	}
	.btm-box{
		width: 100%;
		height: .98rem;
		background: olivedrab;
		box-shadow: 0 -6px 13px 0 rgba(0,0,0,.02);
		position: fixed;
		bottom: 0;
	}
	.btm-box-div1{
		float: left;
		display: inline-block;
		font-size: 15px;
		width: 35%;
		height: .98rem;
		background: #FFFFFF;
		text-align: center;
		line-height: .98rem;
		color: #585858;
	}
	.btm-box-div2{
		float: left;
		display: inline-block;
		width:65%;
		height: .98rem;
		color: #fff;
	    text-align: center;
	    background-color: #f85d00;
	       flex-grow: 3;
	    font-size: .3rem;
	    font-weight: 500;
	    text-align: center;
	    line-height: .98rem;
	}
	.btm-box-div1 a{
		color: #585858;
	}
	.btm-box-div2 a{
		color: #fff;
	}
</style>
