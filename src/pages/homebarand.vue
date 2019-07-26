<template>
    <div class="seater_a">
        <div class="brand_a">
            <a href="javascript:history.go(-1);" @click="func()">
                <em class="header_goback"></em>
            </a>     
            <p>选择品牌</p>
        </div>
        <div class="brand_e">
            热门品牌
        </div>
        <div class="brand_c">
            <router-link to="/shopping/大众" class="brand_b">
                <img src="../assets/baoma_mats.png" >
                <span>大众</span>
            </router-link>
            <router-link to="/shopping/奥迪" class="brand_b">
                <img src="../assets/aodi_big.png" >                
                <span>奥迪</span>
            </router-link>
            <router-link to="/shopping/奔驰" class="brand_b">
                <img src="../assets/baoma_mats_2.png" >
                <span>奔驰</span>
            </router-link>
            <router-link to="/shopping/宝马" class="brand_b">
                <img src="../assets/baoma_mats_1.png" >
                <span>宝马</span>
            </router-link>
            <router-link to="/shopping/丰田" class="brand_b">
                <img src="../assets/yiqi_big.png" >
                <span>丰田</span>
            </router-link>
            <router-link to="/shopping/别克" class="brand_b">
                <img src="../assets/bieke.png" >
                <span>别克</span>
            </router-link>
            <router-link to="/shopping/本田" class="brand_b">
                <img src="../assets/bentian_big.png" >
                <span>本田</span>
            </router-link>
            <router-link to="/shopping/福特" class="brand_b">
                <img src="../assets/fute_big.png" >
                <span>福特</span>
            </router-link>
            <router-link to="/shopping/日产" class="brand_b">
                <img src="../assets/richan_big.png" >
                <span>日产</span>
            </router-link>
            <router-link to="/shopping/路虎" class="brand_b">
                <img src="../assets/luhu_big.png" >
                <span>路虎</span>
            </router-link>
        </div>
        <div class="brand_s">
            <p>A</p>          
            <Brander class="brand_d"></Brander>
            <p>b</p>
            <Brander class="brand_d"></Brander>
            <p>c</p>
            <Brander class="brand_d"></Brander>
        </div>
        <Remen class="brand_w"></Remen>

    </div>

</template>
<script>

const Brander = () => import("../components/homebrander/homebrander")
const Remen = () => import("../components/brander/remen")

export default {
    components:{
       Brander,
       Remen
    }
    
}
</script>
<style scoped>
  
    .brand_s p{
        padding-left:.3rem;
        height: 0.6rem;
        line-height: .6rem;
        float: left;
    }
    .brand_a{
        width: 100%;
        height: 0.8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .4rem;
        /* border:1px solid red; */
        background-color: #fff;
    }
    .header_goback{
        position: absolute;
        top: .34rem;
        left: .28rem;
        width: .2rem;
        height: .2rem;
        border:solid #ff5a37;
        border-width: 0 0 1.5px 1.5px;
        transform: rotate(45deg);
    }
    .brand_e{
        height: .6rem;
        background-color: #f6f6f9;
        padding-left:.3rem;
        line-height: .6rem;
    }
    .brand_c{
        width: 100%;
        height: 3.5rem;
        background-color: #fff;
        float: left;
    }
    img{
        width: .64rem;
        height: .64rem;
        margin: 0 auto;
    }
    .brand_b{
        width: 20%;
        display: table-cell;
        padding: .3rem 0 .16rem;
        text-align: center;
        float: left;
    }
    .brand_d{
        float: left;
    }
    .brand_b span{
        display: block;
        color: #585858;
        font-size: .26rem;
        margin-top: .2rem;
    }
    body{
        line-height: 1;
    }
    .brand_w{
         display: block;
        position: fixed;
        float: left;
        top: 50%;
        right: 0;
        transform: translate3d(0,-50%,0);
        z-index: 9; 
    }
</style>