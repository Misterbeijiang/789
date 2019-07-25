<template>
<div>
    <div class="nav">
        <router-link to="/index" class="nav-aBack">
        </router-link>
            <span>我要卖车</span>
        <router-link to="" class="nav-sell">
            卖车记录
        </router-link>
    </div>
<!-- 广告图片 -->
    <div class="sellcar_img">
        <img src="../../assets/z-5.png" alt="">
    </div>
<!-- 数字 -->
    <div class="figure">
        <span>2529331</span>
        <span>辆车成功在优信售出</span>
    </div>
    <div class="make">
        <router-link to="/home">
            <span>预约卖车</span>
        </router-link>
    </div>
    <div class="sellcar_free">
        <router-link to="" class="free">
            免费咨询
        </router-link>
        <router-link to="/home" class="evaluate">
            先估个价
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav{
    width: 100%;
    position: relative;
    padding: 3%;
    background:whte;
}
.nav-aBack{
    display: block;
    width: .3rem;
    height: .3rem;
    border: solid #ff5a37;
    border-width: 0 0 1.5px 1.5px;
    transform: rotate(45deg);
    position: absolute;
}
.nav span{
    padding-top: .5rem;
    font-size: .3rem;
    padding-left: 2.9rem;
    padding-top:.3rem;
}
.nav-sell{
    font-size: .3rem;
    right: .2rem;
    color: #f85d00;
    position: absolute;
    padding-right: .2rem
}
.sellcar_img img{
    width: 100%;
    height: 4rem;
    display: block;
}
/* 数字 */
.figure{
    margin: 5%;

}
.figure span:first-child{
    color: #f85d00;
    font-size: .6rem;
}
.figure span:nth-child(2){
    font-size: .26rem;
}
.make{
    overflow: hidden;
    position: relative;
    margin-bottom: .2rem;
    margin:5%;
}
/* 预约卖车 */
.make span{
    background: linear-gradient(90deg,rgba(255,146,67,1),rgba(255,100,46,1));
    display: inline-block;
    width:100%;
    text-align: center;
    padding: .28rem 0;
    font-size: .32rem;
    border-radius: .04rem;
    color: #fff;
}
/* 免费咨询 先估个价 */
.sellcar_free{
    width: 100%;
    border-bottom: #e7e4e4 4px solid;
    overflow: hidden;
    padding-bottom: .3rem;
}
.free{
    float: left;
    background-color: #fff;
    border: 1px solid #f85d00;
    font-size: .32rem;
    color: #f85d00;
    text-align: center;
    line-height: .9rem;
    width: 44%;
    border-radius: .04rem;
    margin-left: .38rem
}
.evaluate{
    float: left;
    background-color: #fff;
    border: 1px solid #f85d00;
    font-size: .32rem;
    color: #f85d00;
    text-align: center;
    line-height: .9rem;
    width: 45%;
    border-radius: .04rem;
    margin-left: .1rem
}
</style>
