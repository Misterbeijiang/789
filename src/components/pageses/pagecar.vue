<template>
    <div>
        <div>
            <div class="page_back_wrap">
                <a href="javascript:void(0);" class="back">
                    <i class="page_back_left" @click="funa()"></i>
                </a>
                <router-link to="">
                    <i class="page_back_right"></i>
                </router-link>
            </div>
            <div class="page_car_wrap">
                <div v-show="bool" class="carousel-wrap-item-mst" @touchstart="touchstart" @touchmove="touchmove" ref="dataInfo">
                    <router-link :to="'/vrkanche/'+id">
                        <img :src="mastks" width="100%">
                    </router-link>
                </div>
                <mt-swipe :auto="index" class="page_carousel_wrap" @change="handleChange" v-show="boola">
                    <mt-swipe-item class="carousel-wrap-item-mst" ref="dataInfo">
                        <router-link to="/jiancebaogao">
                            <div class="play-btn-wrap">
                                <div class="play-btn"></div>
                            </div>
                            <img :src="mastks.carPic" width="100%">
                        </router-link>
                    </mt-swipe-item>
                    <mt-swipe-item class="carousel-wrap-item-mst" ref="dataInfo" v-show="boolb">
                        <router-link to="">
                        <img :src="mastks.carPic" width="100%">
                        </router-link>
                    </mt-swipe-item>
                    <mt-swipe-item class="carousel-wrap-item-mst" ref="dataInfo" v-show="boolb">
                        <router-link to="">
                        <img :src="mastks.carPic" width="100%">
                        </router-link>
                    </mt-swipe-item>
                </mt-swipe>
                <div class="swiper_bot">
                    <div class="video-tag" :class="{ swiper_video: isActiveA }" @click="funT()">VR</div>
                    <div class="video-tag" :class="{ swiper_video: isActiveB }" @click="funD()">视频</div>
                    <div class="video-tag" :class="{ swiper_video: isActiveC }" @click="funC()">图片</div>
                    <div class="pagination-tag" v-if="pagination">1/24</div>
                </div>
            </div>
            <div class="page_right_wrap">
                <router-link to="/canshu" class="block">
                    <i class="report-icon"></i>
                    <span class="parameter">参数配置</span>
                </router-link>
                <router-link to="/jiancebaogao" class="report-mark-wrap block">
                    <i class="report-mark-icon"></i>
                    <span class="report-mark">检测报告</span>
                </router-link>
            </div>
        </div>
        <!-- 金融特惠价 -->
        <router-link to="/yichenggou" class="car-detail-financial-benefit-bar">
            <span class="car-detail-fbb-font text1">金融特惠价</span>
            <span class="car-detail-fbb-font text2">首付仅需0.42万</span>
            <span class="car-detail-fbb-icon"></span>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            index:0,
            isActiveA:false,
            isActiveB:false,
            isActiveC:true,
            pagination:false,
            mastat:true,
            lastPosX :0,//当前点击时候的坐标
            curPosX :0,//移动的坐标
            diff :0,    //差值
            imgager:require("../../assets/img"+1+".jpg"),
            id:"",
            datavr:[],
            chiends:[],
            mastks:"", //初始值
            mastk:"",
            diffmst:0,//下标,
            mmttsus:false,
            bool:true,
            boola:true,
            boolb:true,
            newdata:[],
            buycar:this.$route.params.id,
        }
    },
    created() {
        this.id = this.$route.params.id
        if(this.id == 20 || this.id == 1){
             this.axios({
            url:"/apis/findVrPic?carId="+this.id,
            methods:"get"
        }).then((data)=>{
            console.log(data.data)
            this.chiends=(data.data).splice(0,32)
            this.datavr=data.data
            this.mastks = this.chiends[0].carVrPic
            console.log(this.chiends)
        })
        }else{
            this.axios({
            url:"/apis/getCarById?carId="+this.buycar,
                methods:"get"
            }).then((ok)=>{
                console.log(ok.data)
                this.mastks = ok.data;
                console.log(this.mastks)
            })
        }
       
    },
    methods:{
        funa(){
            this.$router.go(-1);
        },
        funT(){
            this.isActiveA=true
            this.isActiveB=false
            this.isActiveC=false
            this.bool = true
            this.boola = false
            this.boolb = false
        },
        funD(){
            this.isActiveA=false
            this.isActiveB=true
            this.isActiveC=false
            this.bool = false
            this.boola = true
            this.boolb = false
        },
        funC(){
            this.isActiveA=false
            this.isActiveB=false
            this.isActiveC=true
            this.bool = false
            this.boola = false
            this.boolb = true
        },
        handleChange(index){
            if(index==0){
                this.isActiveA=true;
                this.isActiveB=false;
                this.isActiveC=false;
            }else if(index==1){
                this.isActiveA=false;
                this.isActiveB=true;
                this.isActiveC=false;
            }else if(index==2){
                this.isActiveA=false;
                this.isActiveB=false;
                this.isActiveC=true;
            }
        },
        // 当鼠标点击时触发，类似onclick事件
        touchstart(e) {
            console.log(e.targetTouches[0].clientX)
            this.lastPosX=e.targetTouches[0].clientX
        },
        // 当鼠标移动时触发
        touchmove(e) {
            // console.log(e.targetTouches[0].clientX )
            this.curPosX=e.targetTouches[0].clientX
            this.diff = this.lastPosX-this.curPosX
            // console.log()
            console.log(this.diff)
            if(this.diff>=10){
                if(this.diffmst == 32){
                    this.diffmst=0
                }else{
                    this.diffmst=this.diffmst+1
                }
                console.log(this.chiends[this.diffmst].carVrPic)
                this.mastks = this.chiends[this.diffmst].carVrPic
            }else if(this.diff<=-10){
                if(this.diffmst == 0){
                    this.diffmst=32
                }else{
                    this.diffmst=this.diffmst-1
                }
                this.mastks = this.chiends[this.diffmst].carVrPic
            }
        }
    }

}
</script>

<style scoped>  
    .page_back_wrap{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        text-align: right;
        z-index: 3;
    }
    .page_back_wrap a{
        display: inline-block;
        padding: .33rem .33rem .47rem .3rem;
    }
    .back{
        position: absolute;
        left: 0;
        top: .04rem;
    }
    .page_back_left{
        display: inline-block;
        width: .24rem;
        height: .24rem;
        border: solid #fff;
        border-width: 0 0 .03rem .03rem;
        transform: rotate(45deg);
        box-sizing: unset;
        vertical-align: middle;
    }
    .page_back_right{
        display: inline-block;
        width: .44rem;
        height: .44rem;
        background: url("../../assets/bijiao.png") no-repeat 50%;
        background-size: .44rem;
        vertical-align: middle;
    }
    .page_right_wrap{
        position: absolute;
        right: .2rem;
        top: 1.6rem;
        z-index: 20;
        text-align: center
    }
    .block{
        display: block;
    }
    .report-icon {
        content: "";
        display: inline-block;
        width: .54rem;
        height: .54rem;
        background: url("../../assets/shezhi.png") no-repeat;
        background-size: 100%;
    }
    .parameter{
        position: relative;
        display: block;
        height: .28rem;
        color: #fff;
        font-size: .2rem;
        line-height: .28rem;
        font-weight: 400;
        text-shadow: 0 0.02rem 0.04rem rgba(0,0,0,.5);
    }
    .report-mark-wrap{
        margin-top: .28rem;
    }
    .report-mark-icon{
        content: "";
        display: inline-block;
        width: .51rem;
        height: .56rem;
        background: url("../../assets/baogao.png") no-repeat;
        background-size: 100%;
    }
    .report-mark{
        position: relative;
        display: block;
        height: .28rem;
        color: #fff;
        font-size: .2rem;
        line-height: .28rem;
        font-weight: 400;
        text-shadow: 0 0.02rem 0.04rem rgba(0,0,0,.5);
    }
    .page_car_wrap{
        position: relative;
        width: 100%;
        height: 5rem;
        overflow: hidden;
    }
    .swiper_bot{
        position: absolute;
        left: 0;
        right: 0;
        bottom: .3rem;
        width: 100%;
        z-index: 2;
        box-sizing: border-box;
        padding: 0 .3rem;
        line-height: 1;
        text-align: center;
    }
    .page_carousel_wrap{
        width: 100%;
        height: 100%;
        position: relative;
    }
    /* 
    .page_carousel_wrap li:nth-child(2){
        z-index: 1;
    }
    .page_carousel_wrap li{
        float: left;
        width: 100%;
        height: 100%;
        position: absolute;
    } */
    .page_carousel_wrap a{
        margin: 0;
        padding: 0;
    }
    .play-btn-wrap{
        width: .92rem;
        height: .92rem;
        background-color: rgba(0,0,0,.46);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .play-btn {
        width: 0;
        height: 0;
        border-width: .2rem 0 .2rem .24rem;
        border-style: solid;
        border-color: transparent transparent transparent #fff;
        position: absolute;
        left: .5rem;
        top: .24rem;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
    }
    .video-tag {
        display: inline-block;
        width: 1rem;
        padding: .12rem 0;
        text-align: center;
        font-size: .24rem;
        color: #fff;
        border-radius: .25rem;
        margin-right: .1rem;
        background: rgba(0,0,0,.3);
        box-sizing: unset;
    }
    .swiper_video {
        background-image: linear-gradient(#f85d00,#f85d00),linear-gradient(90deg,#ff8300,#f85d00);
    }
    /* 金融特惠价  */
    .car-detail-financial-benefit-bar{
        width: 7.5rem;
        height: .98rem;
        background: url("../../assets/page_jpg.jpg") no-repeat;
        background-size: 100% 100%;
        display: block;
        position: relative;
        margin-top: -.02rem;
    }
    .car-detail-financial-benefit-bar .car-detail-fbb-font {
        float: left;
        font-weight: 500;
        font-size: .34rem;
        color: #fff;
        margin-top: .33rem;
        line-height: 1.12;
    }
    .car-detail-financial-benefit-bar .text1 {
        margin-left: .39rem;
    }
    .car-detail-financial-benefit-bar .text2 {
        margin-left: .15rem;
    }
    .car-detail-financial-benefit-bar .car-detail-fbb-icon {
        display: block;
        width: .91rem;
        height: .52rem;
        background: url("../../assets/page_ga_one.png") no-repeat;
        background-size: 100%;
        float: right;
        margin-right: .32rem;
        margin-top: .24rem;
    }
    .pagination-tag {
        position: absolute;
        display: inline-block;
        right: .2rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: .24rem;
        color: #fff;
        background: rgba(0,0,0,.2);
        border-radius: .16rem;
        padding: .04rem .12rem;
    }
</style>
<style>
    .mint-swipe-indicators{
        display: none;
    }
</style>
