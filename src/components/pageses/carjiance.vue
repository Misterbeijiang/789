<template>
    <div class="car-check">
        <Uvintips></Uvintips>
        <div class="check-user-info clearfix">
            <img src="../../assets/chenziwei.jpg" class="pic">
            <div class="info-detail">
                <span class="info-name">袁杰</span>
                <span class="info-true">保证真实车况</span>
            </div>
            <div class="info-detail info-detail-bottom">
                <span class="info-label">车辆检测员</span>
                <span class="info-check-time">2019-07-07 14:02:43  完成车辆检测</span>
            </div>
            <div class="evaluate">本车没出现过重大事故和水淹火烧的情况，车身骨架件完好，外观部件没有明显损伤，漆面没有修复痕迹，内饰无明显瑕疵，发动机变速箱工况正常，发动机舱内油液无需添加。</div>
            <ul class="detail-banner car-check-video-mark">
                <li>
                    <router-link to="/jiancebaogao">
                        <div class="play-btn-wrap">
                            <div class="play-btn"></div>
                        </div>
                        <img src="../../assets/youxinershouche_1.jpg">
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 事故排查 -->
        <ul class="check-items">
            <li class="check-item">
                <span class="check-name">事故排查</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">132项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
            <li class="check-item">
                <span class="check-name">轻微碰撞</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">36项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
            <li class="check-item">
                <span class="check-name">易损耗部件</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">36项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
            <li class="check-item">
                <span class="check-name">事故排查</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">132项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
            <li class="check-item">
                <span class="check-name">事故排查</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">132项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
            <li class="check-item">
                <span class="check-name">事故排查</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">132项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
            <li class="check-item">
                <span class="check-name">事故排查</span>
                <router-link to="/jiancebaogao" class="check-right">
                    <span class="check-succ">132项</span>
                    <i class="arrow"></i>
                </router-link>
            </li>
        </ul>
        <!-- 外观图 -->
        <div class="defect">
            <ul class="new-tab-type-part">
                <li class="tab-type-li" @click="func1()" :class="{'tab-type-active':mettt}">外观件</li>
                <li class="tab-type-li" @click="func2()" :class="{'tab-type-active':mettt2}">内饰图</li>
                <li class="tab-type-li" @click="func3()" :class="{'tab-type-active':mettt3}">骨架图</li>
            </ul>
            <div class="flaw-box-item">
                <div class="appear-part-image  v3Flaw">
                    <img :src="scr" class="flaws-image" >
                    <ul class="detail-spot-box" ></ul>
                </div>
                <p class="detail-note" style="text-align: center;">
                    <b class="appear-part-detail-num">检测项无异常</b>
                </p>
            </div>
        </div>
        <!-- 免费看检测报告 -->
        <router-link to="/jiancebaogao" class="car-detail-item-more">免费查看详细检测报告</router-link>
        <!-- 顶部fixed -->
        <Topdixed :btnName="btnName"></Topdixed>
        <!-- 车辆实拍 -->
        <div class="car-picture-wrap">
            <Uvintips></Uvintips>
            <div class="car-picture-item">
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
                <div>
                    <a href="" class="car-picture-img-wrap">
                        <img src="../../assets/carshipai.jpg" class="car-picture-img">
                    </a>
                    <p class="car-picture-content">车头及左侧车身部件完好，漆面无明显瑕疵。</p>
                </div>
            </div>
        </div>
        <!-- 常见问答 -->
        <Changjian></Changjian>
        <!-- 相似推荐 -->
        <Xiangshituijian></Xiangshituijian>
        <!-- 销售政策详见官网服务保障详情页 -->
        <p class="sale-policy">销售政策详见官网服务保障详情页</p>
        <!-- 我要优惠 -->
        <Shoppingcar></Shoppingcar>
    </div>
</template>

<script>
// import Uvintips from './uvintips'
// import Topdixed from './topdixed'
// import Changjian from './changjian'
// import Xiangshituijian from './xiangshituijian'
// import Shoppingcar from './shoppingcar'

const Uvintips = () => import("./uvintips")
const Topdixed = () => import("./topdixed")
const Changjian = () => import("./changjian")
const Xiangshituijian = () => import("./xiangshituijian")
const Shoppingcar = () => import("./Shoppingcar")

export default {
    components:{
        Uvintips,
        Topdixed,
        Changjian,
        Xiangshituijian,
        Shoppingcar
    },
    data(){
        return{
            btnName:false,
            mettt:true,
            mettt2:false,
            mettt3:false,
            scr:require("../../assets/img_title.jpg"),
        }
    },
    methods:{
        showIcon(){
            if(document.documentElement.scrollTop && document.documentElement.scrollTop>208){
                this.btnName = true
            }else{
                this.btnName = false
            }
        },
        func1(){
            this.mettt=true
            this.mettt2=false
            this.mettt3=false
            this.scr=require("../../assets/img_title.jpg")
        },
        func2(){
            this.mettt=false
            this.mettt2=true
            this.mettt3=false
            this.scr=require("../../assets/12tudou.jpg")
        },
        func3(){
            this.mettt=false
            this.mettt2=false
            this.mettt3=true
            this.scr=require("../../assets/qianchekuangjia.jpg")
        }
    },
    mounted(){
        window.addEventListener("scroll", this.showIcon);
    }
}
</script>

<style scoped>
    .car-check{
        margin-top: .2rem;
    }
    .check-user-info {
        padding: .62rem .4rem .4rem;
        border-bottom: .02rem solid #eee;
        background: #fff;
        font-size: 0;
    }
    .check-user-info .pic {
        float: left;
        width: .74rem;
        height: .74rem;
        margin-right: .2rem;
        border-radius: 100%;
    }
    .check-user-info .info-detail {
        font-weight: 500;
        position: relative;
        top: -.02rem;
        vertical-align: text-top;
    }
    .check-user-info .info-name {
        margin-right: .2rem;
        font-size: .28rem;
        height: .34rem;
        line-height: .4rem;
        color: #333;
    }
    .check-user-info .info-true {
        margin-right: .1rem;
        font-size: .22rem;
        color: #a5c972;
        line-height: .34rem;
        background: hsla(85,45%,62%,.1);
        padding: .02rem .1rem;
    }
    .check-user-info .info-detail-bottom {
        height: .48rem;
        line-height: .48rem;
    }
    .check-user-info .info-label {
        margin-right: .04rem;
    }
    .check-user-info .info-check-time, .check-user-info .info-label {
        font-size: .22rem;
        color: #c5c5c5;
    }
    .car-check .evaluate {
        margin-top: .32rem;
        font-size: .28rem;
        color: #585858;
        line-height: .42rem;
    }
    .car-check .evaluate {
        margin-top: .32rem;
        font-size: .28rem;
        color: #585858;
        line-height: .42rem;
    }
    .car-check-video-mark {
        position: relative;
        margin-top: .3rem;
    }
    .detail-banner .play-btn-wrap {
        width: .92rem;
        height: .92rem;
        background-color: rgba(0,0,0,.46);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .detail-banner .play-btn {
        width: 0;
        height: 0;
        border-width: .2rem 0 .2rem .24rem;
        border-style: solid;
        border-color: transparent transparent transparent #fff;
        position: absolute;
        left: .5rem;
        top: .24rem;
        transform: translate(-50%);
    }
    .car-check-video-mark img{
        width: 100%;
    }
    .check-user-info.clearfix:after {
        content: ".";
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
    }
    /* 事故排查 */
    .car-check .check-items {
        padding: 0 .4rem;
        background-color: #fff;
        font-size: 0;
    }
    .car-check .check-item {
        border-bottom: 1px solid #eee;
        line-height: 1;
        height: 1rem;
        box-sizing: border-box;
        text-align: right;
        position: relative;
    }
    .car-check .check-name {
        font-size: .3rem;
        line-height: 1rem;
        color: #585858;
        position: absolute;
        left: 0;
    }
    .car-check .check-right {
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -.17rem;
    }
    .car-check .check-succ, .car-check .check-waning {
        display: inline-block;
        height: .34rem;
        line-height: .34rem;
        font-size: .24rem;
        color: #c5c5c5;
        padding-right: .42rem;
        text-align: right;
        margin-left: .28rem;
        min-width: 5em;
    }
    .car-check .check-succ {
        background: url("../../assets/duihao_123.png") no-repeat 100%;
        background-size: .32rem auto;
    }
    .car-check .arrow {
        display: inline-block;
        width: .14rem;
        height: .14rem;
        border: solid #dbdada;
        border-width: 2px 2px 0 0;
        transform: rotate(45deg);
        margin-left: .12rem;
    }
    /* 外观图 */
    .defect {
        background: #fff;
        padding: .7rem .4rem .4rem;
    }
    .defect .new-tab-type-part {
        display: flex;
    }
    .defect .new-tab-type-part>li:first-child {
        border-top-left-radius: .08rem;
        border-bottom-left-radius: .08rem;
    }
    .defect .new-tab-type-part .tab-type-active {
        background: #f85d00;
        color: #fff;
    }
    .defect .new-tab-type-part .tab-type-li{
        display: inline-block;
        width: 33.3%;
        background: #fff;
        font-size: .27rem;
        text-align: center;
        color: #f85d00;
        border: 1px solid #f85d00;
        box-sizing: border-box;
        height: .58rem;
        line-height: .58rem;
    }
    .defect .new-tab-type-part>li:nth-child(2) {
        border-left: 0;
        border-right: 0;
    }
    .defect .new-tab-type-part>li:last-child {
        border-top-right-radius: .08rem;
        border-bottom-right-radius: .08rem;
    }
    .defect .flaw-box-item {
        position: relative;
    }
    .appear-part-image.interior-image.v3Flaw, .appear-part-image.member-image.v3Flaw, .appear-part-image.v3Flaw {
        margin: .3rem 0 0;
    }
    .appear-part-image {
        position: relative;
        width: 6.7rem;
        height: 4.3rem;
    }
    .appear-part-image .flaws-image {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .detail-spot-box {
        width: 100%;
        height: 100%;
    }
    .defect .flaw-box-item .detail-note {
        font-size: 0;
        padding-top: .25rem;
    }
    .defect .flaw-box-item .appear-part-detail-num {
        display: inline-block;
        font-size: .22rem;
        letter-spacing: .014rem;
        color: #999;
        padding-left: .08rem;
        line-height: .23rem;
        height: .23rem;
        font-weight: 400;
    }
    .car-detail-item-more {
        display: block;
        width: 100%;
        padding: .35rem 0;
        font-size: .3rem;
        color: #585858;
        text-align: center;
        background: #fff;
        border-top: 1px solid #f1f1f1;
    }
    .car-detail-item-more:after {
        content: "";
        width: .12rem;
        height: .12rem;
        border: solid #999;
        border-width: 1px 1px 0 0;
        transform: rotate(45deg);
        display: inline-block;
        vertical-align: .04rem;
        margin-left: .12rem;
    }
    /* 车俩实拍 */
    .car-picture-wrap {
        background: #fff;
        overflow: hidden;
        margin-top: .2rem;
    }
    .car-picture-wrap .car-picture-item {
        padding: .2rem .4rem 0;
    }
    .car-picture-wrap .car-picture-img-wrap {
        position: relative;
    }
    .car-picture-wrap .car-picture-img {
        width: 100%;
    }
    .car-picture-wrap .car-picture-content {
        font-size: .26rem;
        font-weight: 400;
        color: #1b1b1b;
        line-height: .37rem;    
        margin: .2rem 0 .4rem;
    }
    /* 销售政策详见官网服务保障详情页 */
    .sale-policy {
        font-size: .26rem;
        color: #ccc;
        padding: .4rem 0;
        text-align: center;
    }
    .sale-policy:after, .sale-policy:before {
        content: "\2014";
        margin: 0 .2rem;
        color: #ddd;
    }
    .defect .new-tab-type-part .tab-type-active {
        background: #f85d00;
        color: #fff;
    }
</style>    
