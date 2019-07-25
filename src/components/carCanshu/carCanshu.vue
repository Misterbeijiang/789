<template>
	<div>
		<div class="headbox">
			<a class="head-bcak"></a>
			
			<span :class="headclass?'head-box-sp1':'head-box-sp2'" @click="fun1()">{{xingneng}}</span>
			<span :class="headclass?'head-box-sp2':'head-box-sp1'" @click="fun2">{{wanzheng}}</span>
		</div>
		<!-------性能参数总模块-->
		<div class="xn-bigbox" v-show="xnshow">
			<div class="xn-bigbox-title">
				<span>斯柯达 昕锐 2016款 1.6 手动 前行版</span>
				
			</div>
			<div class="tu"><img src="../../../static/img/123asd.jpg" /> </div>
			<!----------空间-->
			<div class="kongjian">
				<div class="kongjian-head">
					<img src="../../../static/img/space_fee8e7b.png" />空间
				</div>
				<div class="carimgs">
					<div class="carimg-1">
						<img src="../../../static/img/car1_3e5cbaf.png" />
						<span>高:1469mm</span>
						<span>长：4501mm</span>
						<span>宽：1706mm</span>
					</div>
					<div class="carimg-2">
						<img src="../../../static/img/car2_81c7810.png" />
						<span>前轮距：-/-</span>
					</div>
					<div class="carimg-3">
						<img src="../../../static/img/car3_21e3519.png" />
						<span>后轮距：-/-</span>
					</div>
				</div>
				<div class="carimg-btm">
					<div class="carimg-btm-1">
						<img src="../../../static/img/car5_6542b89.png" /><span>车门数：4</span>
						<img src="../../../static/img/car4_2ee13a6.png" /><span>座椅数：5</span>
					</div>
					<div class="carimg-btm-2">
						<img src="../../../static/img/car6_d2a47b5.png" />
						<span>轴距：2603mm</span>
					</div>
				</div>
			</div>
			<!-------油耗------->
			<div class="kongjian">
				<div class="kongjian-head">
					<img src="../../../static/img/space_fee8e7b.png" />油耗
				</div>
				<div class="yh-title-box">
					<div class="yh-title-box-div">
						<span>工信部综合油耗(L/100km)</span>
						<span>6</span>
					</div>
					<div class="yh-title-box-div">
						<span>最高车速(km/h)</span>
						<span>185</span>
					</div>
					<div class="yh-title-box-div">
						<span>官方百公里加速(s)</span>
						<span>10.8</span>
					</div>
				</div>
			</div>
			
			<!-----------动力-->
			<div class="kongjian">
				<div class="kongjian-head">
					<img src="../../../static/img/space_fee8e7b.png" />动力
				</div>
				<div class="yh-title-box">
					<div class="yh-title-box-div">
						<span>动力形式</span>
						<span>汽油</span>
					</div>
					<div class="yh-title-box-div">
						<span>排气量(mL)</span>
						<span>1598</span>
					</div>
					<div class="yh-title-box-div">
						<span>最大功率(kW)</span>
						<span>81</span>
					</div>
					<div class="yh-title-box-div">
						<span>最大功率转速(rpm)</span>
						<span>5800</span>
					</div>
					<div class="yh-title-box-div">
						<span>最大扭矩(N·m)</span>
						<span>155</span>
					</div>
					<div class="yh-title-box-div">
						<span>最大扭矩转速(rpm)</span>
						<span>3800</span>
					</div>
				</div>
			</div>
			<!----------操控-->
			<div class="kongjian">
				<div class="kongjian-head">
					<img src="../../../static/img/space_fee8e7b.png" />操控
					<p class="guige-p"><span class="guige"></span>标配</p>
				</div>
				<div class="yh-title-box">
					<div class="yh-title-box-div">
						<span>后悬挂类型</span>
						<span>半独立扭转梁式悬架</span>
					</div>
					<div class="yh-title-box-div">
						<span>前轮胎规格</span>
						<span>175/70 R14</span>
					</div>
					<div class="yh-title-box-div">
						<span>后轮胎规格</span>
						<span>175/70 R14</span>
					</div>
					
				</div>
			</div>
			<!---------安全-->
			<div class="kongjian">
				<div class="kongjian-head">
					<img src="../../../static/img/space_fee8e7b.png" />安全
					<p class="guige-p"><span class="guige"></span>标配</p>
				</div>
				<div class="yh-title-box">
					<div class="yh-title-box-div">
						<span>驾驶员气囊</span>
						<p class="guige-p"><span class="guige"></span></p>
					</div>
					<div class="yh-title-box-div">
						<span>副驾驶气囊</span>
						<p class="guige-p"><span class="guige"></span></p>
					</div>
				</div>
			</div>
		</div>
		<!--底部------>
		<div class="btm">在线咨询</div>
		
		<!------------配置参数总模块-->
		<div class="pz-bigbox" v-show="pzshow">
			<div class="xn-bigbox-title head-2">
				<span>斯柯达 昕锐 2016款 1.6 手动 前行版sss</span>
			</div>
			<!--基本信息----->
			<div class="pz-title-head">
				<span>基本信息</span>
				<span class="guige-p"><span class="guige"></span>标配</span>
			</div>
			<div class="pz-title-set">
				<p class="set-p">
					<span>款代</span>
					<span>第一代</span>
				</p>
				<p class="set-p">
					<span>车身结构</span>
					<span>4门 5座 轿车-三厢车</span>
				</p>
				<p class="set-p">
					<span>上市时间</span>
					<span>2015-09-01</span>
				</p>
				<p class="set-p">
					<span>整车质保</span>
					<span>三年或10万公里</span>
				</p>
				<p class="set-p">
					<span>工信部综合油耗(L/100km)</span>
					<span>6</span>
				</p>
				<p class="set-p">
					<span>最高车速(km/h)</span>
					<span>180</span>
				</p>
				<p class="set-p">
					<span>官方百公里加速(s)</span>
					<span>10.8</span>
				</p>
				<p class="set-p">
					<span>车身颜色</span>
					<span>白色</span>
				</p>
			</div>
			<!--------发动机参数-->
			<div class="pz-title-head">
				<span>发动机参数</span>
				<span class="guige-p"><span class="guige"></span>标配</span>
				
			</div>
			<div class="pz-title-set">
				<p class="set-p">
					<span>发动机</span>
					<span>1.6L 110马力 L4</span>
				</p>
				<p class="set-p">
					<span>发动机型号</span>
					<span>EA211</span>
				</p>
				<p class="set-p">
					<span>排气量(mL)</span>
					<span>1598</span>
				</p>
				<p class="set-p">
					<span>1598</span>
					<span>自然吸气</span>
				</p>
				<p class="set-p">
					<span>气缸排列形式</span>
					<span>L型</span>
				</p>
				<p class="set-p">
					<span>气缸数</span>
					<span>4</span>
				</p>
				<p class="set-p">
					<span>每缸气门数</span>
					<span>4</span>
				</p>
				<p class="set-p">
					<span>燃油喷射类型</span>
					<span>多点电喷</span>
				</p>
				<p class="set-p">
					<span>凸轮轴形式</span>
					<span>双顶置凸轮轴</span>
				</p>
				<p class="set-p">
					<span>最大马力(Ps)</span>
					<span>110</span>
				</p>
				<p class="set-p">
					<span>最大功率(kW)</span>
					<span>81</span>
				</p>
				<p class="set-p">
					<span>最大功率转速(rpm)</span>
					<span>5800</span>
				</p>
				<p class="set-p">
					<span>最大扭矩(N·m)</span>
					<span>155</span>
				</p>
				<p class="set-p">
					<span>最大扭矩转速(rpm)</span>
					<span>3800</span>
				</p>
				<p class="set-p">
					<span>缸体材质</span>
					<span>铝合金</span>
				</p>				
				<p class="set-p">
					<span>缸盖材质</span>
					<span>铝合金</span>
				</p>
				<p class="set-p">
					<span>动力形式</span>
					<span>汽油</span>
				</p>
				<p class="set-p">
					<span>环保标准</span>
					<span>国5</span>
				</p>
				<p class="set-p">
					<span>燃油标号(#)</span>
					<span>93(京92)</span>
				</p>				
			</div>
			<!------车身参数----->
			<div class="pz-title-head">
				<span>车身参数</span>
				<span class="guige-p"><span class="guige"></span>标配</span>
			</div>
				<div class="pz-title-set">
				<p class="set-p">
					<span>发动机</span>
					<span>1.6L 110马力 L4</span>
				</p>
				<p class="set-p">
					<span>发动机型号</span>
					<span>EA211</span>
				</p>
				<p class="set-p">
					<span>排气量(mL)</span>
					<span>1598</span>
				</p>
				<p class="set-p">
					<span>1598</span>
					<span>自然吸气</span>
				</p>
				<p class="set-p">
					<span>气缸排列形式</span>
					<span>L型</span>
				</p>
				<p class="set-p">
					<span>气缸数</span>
					<span>4</span>
				</p>
				<p class="set-p">
					<span>每缸气门数</span>
					<span>4</span>
				</p>
				<p class="set-p">
					<span>燃油喷射类型</span>
					<span>多点电喷</span>
				</p>		
			</div>
		</div>
		
			
	</div>
</template>

<script>
	export default{
		props:{

			xingneng:String,
			wanzheng:String,
			
		},
		data(){
			return{
			xnshow:true,
			pzshow:false,
			headclass:true
			}
		},
		methods:{
			fun1(){
				this.xnshow=true;
				this.pzshow =false ;
				this.headclass=true;
			},
			fun2(){
				this.pzshow=true;
				this.xnshow=false;
				this.headclass=false;
			}
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
		line-height: 44px;
		position: fixed;
		margin-top: 0;
		/*overflow: hidden;*/
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
	.head-box-sp1{
		color: #1B1B1B;
		font-size: 16px;
		display: inline-block;
		width: 67px;
		height: 44px;
		box-sizing: border-box;
		border-bottom:2px solid #f85d00;
	}
	.head-box-sp2{
		color: #999;
		font-size: 16px;
		display: inline-block;
		width: 67px;
		height: 44px;
		box-sizing: border-box;
		/*border-bottom:2px solid #f85d00;*/
	}
	.headbox span:nth-child(2){
		margin-right: 30px;
	}
	/*---------------*/
	.xn-bigbox{
		width: 100%;
		/*height: 500px;*/
		background: #f9f9f9;
		overflow: hidden;
		margin-bottom: 50px;
		
	}
	.xn-bigbox-title{
		background: #ffffff;
		text-align: center;
	    padding: .55rem 0rem;
	    color: #1B1B1B;
	    -webkit-border-radius: .08rem;
	    border-radius: .08rem;
	    -webkit-box-shadow: 0 2px 20px 0 rgba(0,0,0,.08);
	    box-shadow: 0 2px 20px 0 rgba(0,0,0,.08);
	    width: 94%;
	    margin: 54px auto 0;
	}
	.xn-bigbox-title span{
		font-weight: 700;
		font-size: .34rem;
	}
	.tu{
		width:94% ;
		margin: 0 auto;
		background: #FFFFFF;
	}
	.kongjian{
		/*height: 373px;*/
		width: 100%;
		margin-top: 10px;
		padding: 20px 0px;
		background: #FFFFFF;
	}
	.kongjian-head{
		padding: 0 15px;
		width: 100%;
		text-align: center;
		font-size: .34rem;
		font-weight: 700;
		height: 23px;
		line-height: 23px;
		/*vertical-align: middle;*/
	}
	.kongjian-head img{
		display: inline-flex;
		width: 20px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.carimgs{
		height: 220px;
		width: 100%;
		border-top: 1px solid #EEE;;
		border-bottom: 1px solid #EEE;;
		margin-top: 20px;
	}
	.carimg-1{
		float: left;
		display:block;
		text-align: center;
		width: 60%;
		height: 220px;
		/*background: fuchsia;*/
		box-sizing: border-box;
		border-right:1px solid #EEE ;
	}
	.carimg-1 img{
		margin-top: 50px;
		display: inline-block;
		height: 115px;
		width: 180px;
	}
	.carimgs span{
		color: #333;
		position: absolute;
		display: inline-block;
		font-size: 13px;
		font-family: Arial;
	}
	.carimg-1 span:nth-child(2){
		margin-left: -70px;
		margin-top: 48px;
		
	}
	.carimg-1 span:nth-child(3){
		margin-left: -170px;
		margin-top: 150px;
		
	}
	.carimg-1 span:nth-child(4){
		margin-left: -80px;
		margin-top: 150px;
		
	}
	.carimg-2 {
		text-align: center;
		float: left;
		display: block;
		width: 40%;
		height: 50%;
		/*background:saddlebrown;*/
		border-bottom: 1px solid #EEE;
	}
	.carimg-3{
		text-align: center;
		float: left;
		display: block;
		width: 40%;
		height: 50%;
		/*background:saddlebrown;*/
	}
	.carimg-2  img{
		margin-top: 7.5px;
		display: inline-block;
		width: 80px;
		height: 70px;
	}
	.carimg-3  img{
		margin-top: 7.5px;
		display: inline-block;
		width: 80px;
		height: 70px;
	}
	.carimg-2 span{
		width: 40%;
		text-align: center;
		display:block;
	}
	.carimg-2 span{
		width: 40%;
		text-align: center;
		display:block;
	}
	.carimg-3 span{
		width: 40%;
		text-align: center;
		display:block;
	}
	.carimg-btm{
		width: 100%;
		height: 110px;
		border-bottom:1px solid #EEE ;
	}
	.carimg-btm-1{
		display: block;
		float: left;
		text-align: center;
		line-height: 110px;
		width: 60%;
		height: 110px;
		box-sizing: border-box;
		border-right: 1px solid #EEE;
	}
	.carimg-btm-1 span:nth-child(2){
		display: inline-block;
		margin-right: 20px;
	}
	.carimg-btm-1 img{
		margin-right: 5px;
		width: 14px;
		display: inline-block;
	}
	.carimg-btm-2{
		text-align: center;
		height: 110px;
		float: left;
		width: 40%;
	}
	.carimg-btm-2 img{
		display: inline-block;
		width: 110px;
		height: 70px;
	}
	.carimg-btm-2 span{
		display: inline-block;
	}
	
	.yh-title-box{
		width: 100%;
		padding: 0 15px;
		margin-top: 20px;
	}
	.yh-title-box-div{
		width: 100%;
		height: 45px;
		/*background: red;*/
		border-bottom: 1px solid #EEE;
		font-size: .28rem;
   		color: #1B1B1B;
   		line-height: 44px;
   		color:  #848484;
   		/*text-align-last: center;*/
	}
	.yh-title-box-div span:nth-child(2){
		float: right;
	}
	.guige{
		/*float: right;*/
		display: inline-block;
		width: 7px;
	    height: 7px;
	    -webkit-border-radius: 50%;
	    border-radius: 50%;
	    background: #1B1B1B;
	    margin-right: .1rem;
	    margin-bottom: .02rem;
	}
	.guige-p{
		display: block;
		font-size: 13px;
		color: #585858;
		float: right;
	}
	.btm{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		background: linear-gradient(to left,#F85D00,#FC9600);
		text-align: center;
	    font-size: .32rem;
	    line-height: 50px;
	    color: #fff;
	}
	
	
	
	/*-------------分割线*/
	.pz-bigbox{
		width: 100%;
		/*height: 500px;*/
		background: #FFFFFF;
		overflow: hidden;
		margin-bottom: 50px;
		
	}
	.pz-title-head{
		z-index: 10;
		line-height: 45px;
		width: 100%;
		height: 45px;
		padding:0 15px;
		background: #ffffff;
	}
	.head-2{
		margin-bottom: 10px;
	}
	.pz-title-head span:nth-child(1){
		font-size: .3rem;
	    color: #333;
	    font-weight: 700;

	}
	.pz-title-set{
		width: 100%;
		background: #f9f9f9;
		padding:0 15px;
	}
	.set-p{
		line-height: 45px;
		width: 100%;
		height: 45px;
		background: #f9f9f9;
		 border-bottom: 1px solid #EEE;
	}
	.set-p span{
		display: inline-block;
		font-size: 14px;
	}
	.set-p span:nth-child(1){
		color: #848484;
	}
	.set-p span:nth-child(2){
		float: right;
	}
</style>