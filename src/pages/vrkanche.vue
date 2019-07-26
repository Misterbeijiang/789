<script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
<template>
    <div class="MD-vrPano-vrPano-box MD-vrPano-vrPano-portrait js-vr-pano-box" style="width: 668px; height: 376px; top: 146px; left: -147px;">
        <div class="MD-vrPano-vrPano-top-model">
            <a class="MD-vrPano-vrPano-nav" href="javascript:history.go(-1);">
                <i class="MD-vrPano-vrPano-back-img"></i>
            </a>
            <div class="MD-vrPano-vrPano-title-box ">
                <span class="MD-vrPano-vrPano-msg-switch">
                    <span class="MD-vrPano-vrPano-msg-box">起亚 赛拉图 2010款 1.6 手动 GL</span>
                    <i class="MD-vrPano-vrPano-arrow MD-vrPano-vrPano-arrow-cancel"></i>
                </span>
                <div class="MD-vrPano-vrPano-position MD-vrPano-vrPano-car-msg" style="display: none;">
                    <div class="MD-vrPano-vrPano-car-msg-top">
                        <p class="MD-vrPano-vrPano-price">
                            <span class="MD-vrPano-vrPano-now-price">2.17万</span>
                            <span class="MD-vrPano-vrPano-old-price"></span>
                        </p>
                    </div>
                    <ul class="MD-vrPano-vrPano-car-msg-bottom">
                        <li class="MD-vrPano-vrPano-list MD-vrPano-vrPano-list-first">
                            <span class="MD-vrPano-vrPano-list-title">2010年07月上牌</span>
                            <span class="MD-vrPano-vrPano-list-desc">9年1个月</span>
                        </li>
                        <li class="MD-vrPano-vrPano-list">
                            <span class="MD-vrPano-vrPano-list-title">表显里程</span>
                            <span class="MD-vrPano-vrPano-list-desc">8.2万公里</span>
                        </li>
                        <li class="MD-vrPano-vrPano-list">
                            <span class="MD-vrPano-vrPano-list-title">排放标准</span>
                            <span class="MD-vrPano-vrPano-list-desc">国4</span>
                        </li>
                        <li class="MD-vrPano-vrPano-list MD-vrPano-vrPano-list-first">
                            <span class="MD-vrPano-vrPano-list-title">颜色</span>
                            <span class="MD-vrPano-vrPano-list-desc">红色</span>
                        </li>
                        <li class="MD-vrPano-vrPano-list">
                            <span class="MD-vrPano-vrPano-list-title">自然吸气</span>
                            <span class="MD-vrPano-vrPano-list-desc">1.6L</span>
                        </li>
                        <li class="MD-vrPano-vrPano-list">
                            <span class="MD-vrPano-vrPano-list-title">提车时间</span>
                            <span class="MD-vrPano-vrPano-list-desc">5-7天</span>
                        </li>

                    </ul>
                </div>
            </div>
            <span class="MD-vrPano-vrPano-im">
                <i class="MD-vrPano-vrPano-im-a-img"></i>
            </span>
        </div>
        <div class="MD-vrPano-vrPano-bg-model" style="display: none;"></div>
        <div class="MD-vrPano-vrPano-vr-box">
             <a-scene>
                <a-sky :src="mastks"></a-sky> <!-- //背景图 -->

                <a-sphere position="0 1.25 -5" radius="1.25" src="https://www.toptal.com/designers/subtlepatterns/patterns/retina_wood.png"></a-sphere>
            </a-scene>
            <div class="MD-vrPano-vrPano-btn-wrap js-btn-wrap" style="display: block;">
                <div class="MD-vrPano-vrPano-ctrl-btn MD-vrPano-vrPano-actived">
                    <i class="MD-vrPano-vrPano-img-inner MD-vrPano-vrPano-bc-close"></i>
                    <span class="MD-vrPano-vrPano-text">关门外观</span>
                </div>
                <div class="MD-vrPano-vrPano-ctrl-btn">
                    <i class="MD-vrPano-vrPano-img-inner MD-vrPano-vrPano-bc-open"></i>
                    <span class="MD-vrPano-vrPano-text">开门外观</span>
                </div>
                <div class="MD-vrPano-vrPano-ctrl-btn">
                    <i class="MD-vrPano-vrPano-img-inner MD-vrPano-vrPano-bc-inte"></i>
                    <span class="MD-vrPano-vrPano-text MD-vrPano-vrPano-inner-text">内饰</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            datavr:[],
            chiends:[],
            mastks:""
        }
    },
    created() {
        this.id = this.$route.params.id
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
    }
}
</script>

<style scoped>
body{
    font-size: 50px;
}
    .MD-vrPano-vrPano-portrait {
        transform: none;
        position: absolute;
        transform: rotate(90deg);
        transform-origin: 50% 50% 0;
    }
    .MD-vrPano-vrPano-top-model {
        height: 1.28rem;
        width: 100%;
        background: linear-gradient(180deg,rgba(0,0,0,.25) 0,rgba(0,0,0,0) 100%);
        position: absolute;
        top: 0;
        z-index: 8;
    }
    .MD-vrPano-vrPano-nav {
        width: 1.08rem;
        height: 100%;
        float: left;
    }
    .MD-vrPano-vrPano-back-img, .MD-vrPano-vrPano-im-a-img, .MD-vrPano-vrPano-bc-inte, .MD-vrPano-vrPano-bc-open, .MD-vrPano-vrPano-bc-close {
        background-size: 2.33rem 1.64rem;
        background-image: url("../assets/jinglingtu.png");
    }
    .MD-vrPano-vrPano-back-img {
        background-position: 0rem 0rem;
    }
    .MD-vrPano-vrPano-back-img {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }
    .MD-vrPano-vrPano-title-box {
        height: 100%;
        overflow: hidden;
        display: inline-block;
    }
    .MD-vrPano-vrPano-title-box {
        height: 100%;
        overflow: hidden;
        display: inline-block;
    }
    .MD-vrPano-vrPano-msg-switch {
        display: inline-block;
        overflow: hidden;
        padding-right: .5rem;
        line-height: 1.28rem;
    }
    .MD-vrPano-vrPano-msg-box {
        float: left;
        height: 100%;
        font-size: .3rem;
        color: #fff;
        max-width: 5.27rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: .15rem;
    }
    .MD-vrPano-vrPano-arrow {
        float: left;
    }
    .MD-vrPano-vrPano-arrow::before {
        content: '';
        display: inline-block;
        border-width: .14rem;
        border-color: transparent;
        border-top-color: #fff;
        border-style: solid;
        margin-top: 0.65rem;
    }
    .MD-vrPano-vrPano-arrow-cancel::before {
        transform-origin: 50% 20%;
        transform: rotate(0deg);
    }
    .MD-vrPano-vrPano-im {
        float: right;
        height: 100%;
        width: 1.08rem;
        line-height: 82px;
    }
    .MD-vrPano-vrPano-im-a-img {
        background-position: -1.18rem 0rem;
    }
    .MD-vrPano-vrPano-im-a-img {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        background-repeat: no-repeat;
    }
    .MD-vrPano-vrPano-bg-model {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;
    }
    .MD-vrPano-vrPano-vr-box {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 3;
    }
    .MD-vrPano-vrPano-btn-wrap {
        position: absolute;
        right: .36rem;
        top: 50%;
        margin-top: -1.66rem;
    }
    .MD-vrPano-vrPano-ctrl-btn {
        position: relative;
        z-index: 4;
        height: .9rem;
        width: .9rem;
        border-radius: .06rem;
        background: rgba(158,158,158,.2);
        margin-bottom: .3rem;
    }
     .MD-vrPano-vrPano-actived {
        background: #E75E21;
    }
    .MD-vrPano-vrPano-bc-close {
        background-size: 2.33rem 1.64rem;
        background-image: url("../assets/jinglingtu.png");
    }
    .MD-vrPano-vrPano-bc-close {
        background-position: 0rem -1.38rem;
    }
    .MD-vrPano-vrPano-bc-close {
        width: .52rem;
        background-repeat: no-repeat;
    }
    .MD-vrPano-vrPano-img-inner {
        margin: .1rem .2rem .07rem;
        position: absolute;
        top: 0;
        height: .4rem;
    }
    .MD-vrPano-vrPano-text {
        display: block;
        width: 100%;
        position: absolute;
        top: .5rem;
        font-size: .18rem;
        color: #fff;
        white-space: nowrap;
        text-align: center;
    }
    .MD-vrPano-vrPano-bc-open {
        background-position: -1.72rem 0rem;
    }
    .MD-vrPano-vrPano-bc-open {
        width: .52rem;
        background-repeat: no-repeat;
    }
    .MD-vrPano-vrPano-bc-inte {
        background-position: -1.18rem -0.54rem;
    }
    .MD-vrPano-vrPano-bc-inte {
        margin: .1rem .1rem .8rem .25rem;
        width: .52rem;
        background-repeat: no-repeat;
    }
    a-scene {
        width: 100%!important;
        height: 100%!important;
        top: 0!important;
        left: 0!important;
        right: 0!important;
        bottom: 0!important;
        position: fixed!important;
    }
</style>
