<template>
	<div>
		<!-- 视频 -->
		<div class="video-style">
			<div class="MD-vehicle_report-video-video-wrap">
				<div class="MD-vehicle_report-video-video-box">
					<div class="video-js vjs-fluid vjs-paused my-video-dimensions vjs-controls-enabled vjs-v6 vjs-user-inactive">
						<video @click="funB()" class="vjs-tech" id="videomast" :src="mmttan" poster="https://c1.xinstatic.com/o/20190707/1401/5d218ab77a4dd823168_19.jpg"></video>
						<!-- 视频进度条 -->
						
					</div>
					<div class="MD-vehicle_report-video-play-btn-wrap">
						<a href="javascript:void(0)" class="MD-vehicle_report-video-play-btn"></a>
					</div>
				</div>
				<div v-if="mster" class="MD-vehicle_report-video-tips-box">
					<p>共183段视频，500项检测, 播放时长17分钟</p>
					<div class="MD-vehicle_report-video-btn-box MD-vehicle_report-video-btn-center">
						<a @click="funA()" href="javascript:void(0)" class="MD-vehicle_report-video-btn-tips MD-vehicle_report-video-btn-right">开始播放</a>
					</div>
				</div>
				<div class="MD-vehicle_report-video-video-option">
					<ul class="MD-vehicle_report-video-video-option-box">
						<li class="MD-vehicle_report-video-video-option-item">车头</li>
						<li class="MD-vehicle_report-video-video-option-item">发动机舱</li>
						<li class="MD-vehicle_report-video-video-option-item">右前车身</li>
						<li class="MD-vehicle_report-video-video-option-item">右前内饰</li>
						<li class="MD-vehicle_report-video-video-option-item">右后车身</li>
						<li class="MD-vehicle_report-video-video-option-item">右后内饰</li>
						<li class="MD-vehicle_report-video-video-option-item">车尾</li>
						<li class="MD-vehicle_report-video-video-option-item">后备箱内部</li>
						<li class="MD-vehicle_report-video-video-option-item">左后车身</li>
						<li class="MD-vehicle_report-video-video-option-item">左后内饰</li>
						<li class="MD-vehicle_report-video-video-option-item">左前车身</li>
						<li class="MD-vehicle_report-video-video-option-item">左前内饰</li>
						<li class="MD-vehicle_report-video-video-option-item">机电检查</li>
					</ul>
					<div class="MD-vehicle_report-video-video-option-switch">
						<span class="MD-vehicle_report-video-video-option-switch-text text-up">收起</span>
						<span class="MD-vehicle_report-video-video-option-switch-text text-down MD-vehicle_report-video-video-option-switch-hidden">展开</span>
						<img src="../../assets/xiangshang_1.png" class="MD-vehicle_report-video-video-option-switch-img img-up">
						<img src="../../assets/xiangxia_1.png" class="MD-vehicle_report-video-video-option-switch-img img-down MD-vehicle_report-video-video-option-switch-hidden">
					</div>
				</div>
			</div>
		</div>
		<!---------事故排查-->
		<div class="paicha">
			<h3>事故排查</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1" @click="fun1()">排除重大事故</span>
				<div class="jiatou"></div>
				<div class="xiang">67项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="xiala" v-show="bools">
				<span>
					左前纵梁
					<p><img src="../../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
				<span>
					右前纵梁
					<p><img src="../../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
				<span>
					左后纵梁
					<p><img src="../../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
				<span>
					又后纵梁
					<p><img src="../../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">排除水泡火烧</span>
				<div class="jiatou"></div>
				<div class="xiang">65项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!----------轻微碰撞-->
		<div class="paicha">
			<h3>事故排查</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1">轻微碰撞</span>
				<div class="jiatou"></div>
				<div class="xiang">36项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!-----------易损耗部件-->
		<div class="paicha">
			<h3>易损耗部件</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1">易损耗部件</span>
				<div class="jiatou"></div>
				<div class="xiang">6项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!--------------常用功能-->
		<div class="paicha">
			<h3 class="h3-1">常用功能</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1">外部配置</span>
				<div class="jiatou"></div>
				<div class="xiang">6项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">内部配置</span>
				<div class="jiatou"></div>
				<div class="xiang">74项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">灯光系统</span>
				<div class="jiatou"></div>
				<div class="xiang">13项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">随车工具</span>
				<div class="jiatou"></div>
				<div class="xiang">7项<img src="../../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!-----------------客服咨询-->
		<div class="btm-kf">
			<a class="btm-kf-a1">在线客服</a>
			<a class="btm-kf-a2">
				<img src="../../../static/img/tel_3ce0430.png" />免费咨询 
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bools:false,
				mmttan:require("../../assets/shipingmp4.mp4"),
				mster:true
			}
		},
		methods:{
			fun1(){
			this.bools = !this.bools;
			
			},
			funA(){
				this.mster = false;
				var videomast = document.getElementById('videomast')
				videomast.play()
			},
			funB(){

			}
		}
	}
	
</script>

<style scoped>
	.video{
		width: 100%;
		height: 4.2rem;
		background: red;
		
	}
	.video img{
		height:4.2rem ;
		width: 100%;
	}
	.video-mb{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 110;
		width: 100%;
		height: 4.2rem;
		background: rgba(0,0,0,.8);
	}
	.video-mb p{
		 z-index: 111;
		padding-bottom: .5rem;
		padding-top: 18%;
	    text-align: center;
	    font-size: .28rem;
	    color: #e5e5e5;
	}
	.video-mb a{
		
		display:block;
		height: 30px;
		width: 2.24rem;
		margin: 0 auto;
	    padding: .18rem 0 .14rem;
	    font-size: .28rem;
	    border-radius: 3px;
	    text-align: center;
	    background: #f85d00;
	    color: #fff;
	 
	    
	}
	.paicha{
		width: 100%;
	}
	.paicha h3{
		width: 100%;
		height: 1.05rem;
		background: #fff;
		box-sizing: border-box;
		border-left: 2px solid #f85d00;
		margin-top: 18px;
		padding-left: 17.5px;
		line-height:1.05rem ;
	}
	.paicha-div1{
		padding: 0 20px;
		border-top: 1px solid #eee;
		line-height:45px ;
		width: 100%;
		height: 45px;
		background: #fff;
	}
	.paicha-sp1{
		font-size: 14px;
		color: #585858;
	}
	.jiatou{
		content: "";
	    width: 5px;
	    height: 5px;
	    border: solid #c5c5c5;
	    border-width: 0 1px 1px 0;
	    transform: rotate(45deg);
	    display: inline-block;
	    margin-left: .14rem;
	    vertical-align: .06rem;
}
 	.xiang{
 		font-size: 12px;
 		color: #C5C5C5;
 		float: right;
 		display: inline-block;
 	}
 	.xiang img{
 		margin-left: 3px;
 		vertical-align:middle;
 		display: inline-block;
 		width: 16px;
 	}
 	.btm-kf{
 		width: 100%;
 		height: 44px;
 		background: saddlebrown;
 		position: fixed;
 		bottom: 0;
 	}
 	.btm-kf-a1{
 		float: left;
 		display: inline-block;
 		width: 50%;
 		height: 44px;
 		background:#ffa800 ;
 		color: #fff; ;
 		font-size:.3rem ;
 		text-align: center;
		line-height: 44px;
 	}
 	.btm-kf-a2{
 		float: left;
 		display: inline-block;
 		font-size:.3rem ;
 		text-align: center;
		line-height: 44px;
		width: 50%;
		color: #fff; 
		background: linear-gradient(90deg,#fc9600,#f85d00)
 	}
 	.btm-kf-a2 img{
 		display: inline-block;
 		width: .32rem;
 		vertical-align:middle;
 	}
 	.xiala{
 		width: 100%;
 	}
 	.xiala span{
 		
 		color: #999999;
 		font-size: 12px;
 		display: block;
 		height: 35px;
 		width: 100%;
 		padding: 0 20px;
 		line-height: 35px;
 		overflow: hidden;
 	}
 	.xiala img{
 		display: inline-block;
 		width: 16px;
 		vertical-align: middle;
 	}
 	.xiala p{
 		display: inline-block;
 		float: right;
 		width: 16px;
 	}
	 /* 视频后的东西 */
	.MD-vehicle_report-video-video-option {
    	display: none;
	}
	.MD-vehicle_report-video-video-option-box {
		display: flex;
		flex-wrap: wrap;
		padding: .2rem .1rem .1rem;
	}
	.MD-vehicle_report-video-video-box {
		width: 100%;
		height: 4.2rem;
		position: relative;
	}
	.MD-vehicle_report-video-video-option-switch {
		text-align: center;
		line-height: .24rem;
		margin-bottom: .22rem;
	}
	.MD-vehicle_report-video-video-option-item {
		padding: .17rem .27rem;
		margin: .1rem;
		float: left;
		border: 1px solid #E5E5E5;
		font-size: .26rem;
		border-radius: .04rem;
		color: #585858;	
	}
	.MD-vehicle_report-video-video-option-switch-text {
		font-size: .24rem;
		color: #585858;
	}
	.MD-vehicle_report-video-video-option-switch-hidden {
		display: none;
	}
	.MD-vehicle_report-video-video-option-switch-img {
		width: .24rem;
	}
	.MD-vehicle_report-video-video-option-switch-hidden {
		display: none;
	}
	.MD-vehicle_report-video-play-btn-wrap {
		width: 46px;
		height: 46px;
		background-color: rgba(0,0,0,.46);
		border-radius: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		display: none;
	}
	.MD-vehicle_report-video-play-btn {
		width: 0;
		height: 0;
		border-width: 10px 0 10px 12px;
		border-style: solid;
		border-color: transparent transparent transparent #fff;
		position: absolute;
		left: 25px;
		top: 12px;
	}
	.my-video-dimensions.vjs-fluid {
		padding-top: 0!important;
	}
	.video-js.vjs-16-9, .video-js.vjs-4-3, .video-js.vjs-fluid {
		width: 100%;
		max-width: 100%;
		height: 100%;
	}
	.video-js {
		display: block;
		vertical-align: top;
		box-sizing: border-box;
		color: #fff;
		background-color: #000;
		position: relative;
		padding: 0;
		font-size: 10px;
		line-height: 1;
		font-weight: 400;
		font-style: normal;
		font-family: Arial,Helvetica,sans-serif;
	}
	.video-js .vjs-tech {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	video {
		display: block;
		object-fit: inherit;
		background-size: cover;
	}
	.MD-vehicle_report-video-video-wrap{
		position: relative;
    	overflow: hidden;
	}
	.vjs-poster {
		display: inline-block;
		vertical-align: middle;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: cover;
		background-color: #000;
		cursor: pointer;
		margin: 0;
		padding: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		overflow: hidden;
	}
	.MD-vehicle_report-video-tips-box, .MD-vehicle_report-video-error-tips {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 110;
		width: 100%;
		height: 4.2rem;
		background: rgba(0,0,0,.8);
	}
	.MD-vehicle_report-video-tips-box>p, .MD-vehicle_report-video-error-tips>p {
		padding-top: 15%;
		padding-bottom: .5rem;
		text-align: center;
		font-size: .28rem;
		color: #e5e5e5;
		line-height: normal;
	}
	.MD-vehicle_report-video-btn-center {
		justify-content: center;
	}
	.MD-vehicle_report-video-btn-box {
		display: flex;
		overflow: hidden;
		padding: 0 1.26rem;
	}
	.MD-vehicle_report-video-btn-center {
		justify-content: center;
	}
	.MD-vehicle_report-video-btn-right {
		width: 2.24rem;
		padding: .18rem 0 .14rem;
		align-self: center;
		font-size: .28rem;
		border-radius: 3px;
		text-align: center;
		background: #f85d00;
		color: #fff;
		/* height: .3rem; */
	}
	.video-style {
		background: #fff;
	}
	.MD-vehicle_report-video-tips-box>p {
    padding-top: 18%;
}
/* 进度条 */
	
</style>