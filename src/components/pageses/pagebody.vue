<template>
    <div>
        <div class="header-page">
            <div class="header-head">
                <h1>五菱汽车 宏光 2015款 1.2 手动 S标准型5-8座</h1>
                <div class="price">
                    <span class="money">4.17<i class="wan">万</i></span>
                    <span class="full-tax originan-price">原价4.45万</span>
                    <div class="car-price-analysis-wrap">
                        <router-link to="" class="car-price-analysis">车价分析</router-link>
                    </div>
                    <router-link to="/Register" class="notice xdj-btn">我要优惠</router-link>
                </div>
            </div>
            <!-- 一成首付 -->
            <div class="car-header-one">
                <img src="../../assets/renpepoe.png" class="icon-head-li">
                <router-link to="/yichenggou" class="xBtn one-precent-li-bkg">一成首付 月供1050元</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header-head{
        padding: .2rem .4rem 0;
        overflow: hidden;
        background: #fff;
    }
    .header-head h1 {
        line-height: .49rem;
        font-size: .35rem;
        color: #1b1b1b;
        padding-bottom: .5rem;
        font-weight: 500;
        word-break: break-all;
    }
    .header-head .price{
        font-size: .41rem;
        padding-bottom: .2rem;
        position: relative;
        line-height: 1;
    }
    .header-head .money {
        font-size: .56rem;
        color: #f85d00;
        vertical-align: baseline;
    }
    .header-head .money .wan {
        font-size: .26rem;
        margin-left: .08rem;
        color: #f85d00;
        font-style: normal;
    }
    .header-head .originan-price {
        text-decoration: line-through;
        color: #969da8;
    }
    .header-head .full-tax {
        font-size: .26rem;
        display: inline;
        margin-left: .16rem;
    }
    .header-head .car-price-analysis-wrap {
        margin-top: .2rem;
    }
    .header-head .xdj-btn {
        width: 1.39rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: .05rem;
        border: 1px solid #f85d00;
        font-size: .26rem;
        text-align: center;
        color: #f85d00;
    }
    .header-head .car-price-analysis {
        margin-left: .08rem;
        font-size: .24rem;
        color: #f85d00;
        vertical-align: baseline;
    }
    .header-head .car-price-analysis:before {
        content: "";
        width: .24rem;
        height: .28rem;
        background: url(//s3.xinstatic.com/u2-m-sta/media/price-trend.c4e8f6d6.png) no-repeat;
        background-size: contain;
        display: inline-block;
        vertical-align: -.02rem;
        margin-right: .08rem;
    }
    .header-head .car-price-analysis:after {
        content: "";
        width: .12rem;
        height: .12rem;
        border: 1px solid #f85d00;
        border-width: 1px 1px 0 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        display: inline-block;
        margin-left: .02rem;
        vertical-align: .02rem;
    }
    .header-head .notice {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        margin-top: .1rem;
    }
    /* 一成首付 */
    .car-header-one{
        display: block;
        height: 1.44rem;
        background: #fff;
        overflow: hidden;
        position: relative;
    }
    .icon-head-li {
        width: .98rem;
        height: 1.44rem;
        position: absolute;
        top: 0;
        left: .4rem;
        z-index: 1;
    }
    .car-header-one .one-precent-li-bkg {
        display: block;
        background-color: rgba(248,93,0,.07);
        height: .98rem;
        line-height: .98rem;
        border-radius: .08rem;
        margin-top: .46rem;
        padding-left: 1.6rem;
        overflow: hidden;
        font-size: .32rem;
        color: #f85d00;
        position: relative;
    }
    .car-header-one  .one-precent-li-bkg:after {
        content: "";
        width: .24rem;
        height: .24rem;
        background: url("../../assets/pagexiangyou.png") no-repeat 50%;
        background-size: 100%;
        position: absolute;
        top: .4rem;
        right: .5rem;
    }
</style>
