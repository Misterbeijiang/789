<template>
        <!-- 车辆档案 -->
    <div>
        <div class="car-details-files">
            <Uvintips></Uvintips>
            <div class="achrive">
                <div class="car-info car-bot">
                    <p class="vehicle-title">2019-06上牌</p>
                    <p class="vehicle-data">1个月</p>
                </div>
                <div class="car-info car-bot">
                    <p class="vehicle-title">2019-06上牌</p>
                    <p class="vehicle-data">1个月</p>
                </div>
                <div class="car-info car-bot">
                    <p class="vehicle-title">2019-06上牌</p>
                    <p class="vehicle-data">1个月</p>
                </div>
                <div class="car-info car-bot">
                    <p class="vehicle-title">2019-06上牌</p>
                    <p class="vehicle-data">1个月</p>
                </div>
                <div class="car-info car-bot">
                    <p class="vehicle-title">2019-06上牌</p>
                    <p class="vehicle-data">1个月</p>
                </div>
                <div class="car-info car-bot">
                    <p class="vehicle-title">2019-06上牌</p>
                    <p class="vehicle-data">1个月</p>
                </div>
            </div>
            <router-link to="/canshu" class="car-detail-item-more">查看详细参数配置</router-link>
        </div>
        <section class="car-purchase-wrap">
            <h3 class="uxin-tips">
                <span>购车服务</span>
                <span class="car-purchase-tips">服务费不超过4500元</span>
                <router-link to="/Register" class="car-purchase-im" >立即咨询</router-link>
            </h3>
            <ul class="car-purchase-content">
                <li>
                    <h3>认证服务</h3>
                    <div class="city-wide">315项检测 · 无重大事故 无水泡 无火烧</div>
                    <i class="icon-more" @click="func()"></i>
                </li>
                <li>
                    <h3>交易服务</h3>
                    <div class="city-wide">包过户 · 上门服务 · 车辆整备</div>
                    <i class="icon-more"></i>
                </li>
                <li class="aftersale">
                    <h3 class="authen-title">售后服务</h3>
                    <div class="content-authen">
                        <span>30天包退</span>
                        <span>1年保修</span>
                        <span>全国联保</span>
                    </div>
                    <i class="icon-more"></i>
                </li>
            </ul>
        </section>
        <Renzhenfuwu></Renzhenfuwu>
    </div>
</template>

<script>

const Uvintips = () => import("./uvintips")
const Renzhenfuwu = () => import("./renzhenfuwu")
// import Uvintips from './uvintips'
// import Renzhenfuwu from './renzhenfuwu'

export default {
    components:{
        Uvintips,
        Renzhenfuwu
    },
    methods:{
        func(){

        }
    }
}
</script>

<style scoped>
    /* 车辆档案 */
    .car-details-files{
        background: #fff;
        overflow: hidden;
        margin-top: .2rem;
        line-height: 1;
    }
    .uxin-tips {
        font-size: .3rem;
        color: #1b1b1b;
        line-height: 1.05rem;
        font-weight: 700;
        padding-left: .35rem;
        position: relative;
        background-color: #fff;
        border-bottom: 1px solid #f1f1f1;
    }
    .uxin-tips:before {
        content: "";
        width: .04rem;
        height: 1.05rem;
        background: #f85d00;
        display: inline-block;
        position: absolute;
        left: 0;
    }
    .achrive {
        padding: .5rem .4rem;
        overflow: hidden;
        box-sizing: inherit;
    }
    .car-bot {
        margin-bottom: .5rem;
    }
    .vehicle-title {
        font-size: .26rem;
        color: #999;
        margin-bottom: .18rem;
    }
    .vehicle-data {
        font-size: .32rem;
        color: #1b1b1b;
        vertical-align: middle;
    }
    .car-info {
        display: inline-block;
        width: 36%;
    }
    .car-info:nth-child(3n) {
        width: 21.5%;
        position: absolute;
        right: .4rem;
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
    .car-purchase-wrap {
        margin-top: .2rem;
        background-color: #fff;
    }
    .car-purchase-tips {
        margin-left: .2rem;
        height: .34rem;
        font-size: .24rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999;
        line-height: .34rem;
    }
    .car-purchase-im {
        float: right;
        margin: .24rem .4rem 0 0;
        text-align: center;
        width: 1.4rem;
        height: .6rem;
        border-radius: .02rem;
        border: 1px solid #848484;
        font-size: .26rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #848484;
        line-height: .6rem;
    }
    .car-purchase-content {
        padding: .4rem .4rem 0;
    }
    .car-purchase-content li {
        display: flex;
        align-items: start;
        padding-bottom: .4rem;
    }
    .car-purchase-content h3 {
        flex-grow: 0;
        flex-shrink: 0;
        width: 1.28rem;
        font-size: .26rem;
        font-weight: 400;
        text-align: left;
        font-family: PingFangSC-Regular;
        color: #999;
    }
    .city-wide {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        width: 5.18rem;
        align-items: center;
        font-size: .26rem;
        font-weight: 400;
        color: #020000;
    }
    .car-purchase-content .icon-more {
        display: inline-block;
        width: .24rem;
        height: .36rem;
        background: url("../../assets/page_12_omt.png") no-repeat;
        background-size: 100% .06rem;
        background-position-y: center;
    }
    .aftersale {
        padding-bottom: .2rem;
    }
    .authen-title {
        margin-top: -.04rem;
    }
    .content-authen {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        font-size: .22rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #f85d00;
        width: 5.18rem;
    }
    .content-authen span {
        display: inline-block;
        margin-bottom: .2rem;
        height: .32rem;
        line-height: .3rem;
        font-size: .22rem;
        margin-right: .1rem;
        text-align: center;
        padding: 0 .08rem;
        border-radius: .16rem;
        border: 1px solid #f85d00;
    }
</style>
