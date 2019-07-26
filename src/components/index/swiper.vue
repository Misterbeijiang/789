<template>
    <div>
        <header>
            <router-link to="/index">
                <i></i>
            </router-link>
            <router-link to="/sousuo" class="header_seach">
            <span class="header-search-text">
                <span class="text">搜索你想要的车</span>
            </span>
            </router-link>
            <router-link to="/LocationStr" class="header-city">北京</router-link>
        </header>
        <!-- 轮播图的背景图 -->
        <section class="index_warp" v-bind:style="elMain">
            <div class="index_banner_back" v-bind:style="elMain"></div>
        </section>
        <!-- 轮播图 -->
        <section class="index_warp_banner" ref="slider">
            <mt-swipe :auto="index" class="carousel-wrap" @change="handleChange">
            <mt-swipe-item class="carousel-wrap-item" id="1" ref="dataInfo">
                <router-link to="/bottombar/shopping/买车商城">
                <img id="1" src="../../assets/lunbo_1.png" />
                </router-link>
            </mt-swipe-item>
            <mt-swipe-item class="carousel-wrap-item" id="2" ref="dataInfo">
                <router-link to="/contract">
                <img id="2" src="../../assets/jinrong.jpg" />
                </router-link>
            </mt-swipe-item>
            <mt-swipe-item class="carousel-wrap-item" id="3" ref="dataInfo">
                <router-link to="/videodetection">
                <img id="3" src="../../assets/shipinjiance.jpg" />
                </router-link>
            </mt-swipe-item>
            <mt-swipe-item class="carousel-wrap-item" id="4" ref="dataInfo">
                <router-link to="/goodcar">
                <img id="4" src="../../assets/chaozhihaoche.png" />
                </router-link>
            </mt-swipe-item>
            <mt-swipe-item class="carousel-wrap-item" id="5" ref="dataInfo">
                <router-link to="/valuable">
                <img id="5" src="../../assets/zhuanjia.jpg" />
                </router-link>
            </mt-swipe-item>
            </mt-swipe>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
                //轮播图
            index:2000,
            elMain:{
                background:"linear-gradient(90deg, rgb(231, 5, 0) 0%, rgb(219, 84, 0) 49%, rgb(235, 59, 0) 100%)"
            }
        }
       
    },
    methods:{
         handleChange(index) {
             console.log(index)
             if(index == 0){
                this.elMain.background = "linear-gradient(90deg, rgb(231, 5, 0) 0%, rgb(219, 84, 0) 49%, rgb(235, 59, 0) 100%)";
             }else if(index == 1){
                this.elMain.background = "linear-gradient(90deg, rgb(142, 89, 22) 0%, rgb(174, 128, 59) 49%, rgb(192, 153, 94) 100%)";
             }else if(index == 2){
                this.elMain.background = "linear-gradient(90deg, rgb(212, 112, 54) 0%, rgb(232, 153, 88) 49%, rgb(204, 109, 51) 100%)";
             }else if(index == 3){
                this.elMain.background = "linear-gradient(90deg, rgb(189, 4, 0) 0%, rgb(209, 61, 36) 49%, rgb(148, 1, 1) 100%)";
             }else if(index == 4){
                this.elMain.background = "linear-gradient(90deg, rgb(215, 97, 0) 0%, rgb(234, 117, 2) 49%, rgb(214, 117, 0) 100%)";
             }
        }
    }
}
</script>

<style>
    header {
        padding-top: 0.24rem;
        position: relative;
        z-index: 1;
    }
    header i {
        display: inline-block;
        height: 0.32rem;
        width: 0.69rem;
        background: url("../../assets/youxin.png") no-repeat;
        background-size: 100%;
        vertical-align: middle;
        margin: 0 0.2rem 0 0.25rem;
    }
    .header_seach {
        display: inline-block;
        width: 4.8rem;
        padding: 0.08rem 0;
        padding-left: 0.24rem;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 0.34rem;
        text-align: left;
        vertical-align: middle;
    }
    .header-search-text {
        position: relative;
        color: #8b8b8b;
        font-size: 0.26rem;
    }
    .header-search-text:before {
        content: "";
        position: absolute;
        top: 50%;
        width: 0.24rem;
        height: 0.24rem;
        margin-top: -0.12rem;
        background: url("../../assets/sousuo.png") no-repeat 50%;
        background-size: 100%;
    }
    header .text {
        padding-left: 0.3rem;
        width: 3.6rem;
    }
    .header-city {
        font-size: 0.28rem;
        color: #fff;
        vertical-align: middle;
        text-align: right;
        float: right;
        margin-top: 0.11rem;
        margin-right: 0.24rem;
    }
    .header-city:after {
        content: "";
        display: inline-block;
        width: 0.26rem;
        height: 0.15rem;
        background: url("../../assets/bottom_1.png") no-repeat;
        background-size: 100%;
        margin-left: 0.08rem;
        vertical-align: middle;
    }
    /* 轮播图的背景图 */
    .index_warp {
        position: absolute;
        top: 0;
        height: 2.6rem;
        width: 100%;
        z-index: 0;
        background: linear-gradient(90deg,rgb(231, 5, 0) 0%,rgb(219, 84, 0) 49%,rgb(235, 59, 0) 100%);
    }
    .index_banner_back{
        width: 110%;
        margin-left: -5%;
        height: 0.8rem;
        border-radius: 110%;
        position: absolute;
        bottom: -0.5rem;
        background: linear-gradient(90deg,rgb(231, 5, 0) 0%,rgb(219, 84, 0) 49%,rgb(235, 59, 0) 100%);
    }
    /* .index_banner_back1{
        background: linear-gradient(90deg,rgb(231, 5, 0) 0%,rgb(219, 84, 0) 49%,rgb(235, 59, 0) 100%);
    }
    .index_banner_back2{
        background: linear-gradient(90deg, rgb(142, 89, 22) 0%, rgb(174, 128, 59) 49%, rgb(192, 153, 94) 100%);
    }
    .index_banner_back3{
        background: linear-gradient(90deg, rgb(212, 112, 54) 0%, rgb(232, 153, 88) 49%, rgb(204, 109, 51) 100%);
    }
    .index_banner_back4{
        background: linear-gradient(90deg, rgb(189, 4, 0) 0%, rgb(209, 61, 36) 49%, rgb(148, 1, 1) 100%);
    }
    .index_banner_back5{
        background: linear-gradient(90deg, rgb(215, 97, 0) 0%, rgb(234, 117, 2) 49%, rgb(214, 117, 0) 100%);
    } */
    /* 轮播图 */
    .carousel-wrap {
        height: 2.2rem;
        width: 7.02rem;
        margin: auto;
    }
    .carousel-wrap-item {
        height: 2.2rem;
        border-radius: 0.16rem;
        overflow: hidden;
    }
    .carousel-wrap-item a {
        position: relative;
        top: -0.8rem;
    }
    .carousel-wrap-item img {
        width: 100%;
        height: auto;
        display: block;
    }
    .index_warp_banner {
        margin-top: 0.24rem;
    }
</style>
