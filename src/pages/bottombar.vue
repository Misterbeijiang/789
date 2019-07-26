<template>
    <div>
        <div class="nav">
            <router-link :to="v.router" v-for="(v,i) in arr" :key="i">
                <div @click="fun(i)" class="navlist">               
                    <i class="image" :style="{backgroundImage:($route.path==v.router?v.images:v.image)}"></i>
                    <span class="items" :style="{display:($route.path==v.router?'none':'block')}">{{v.title}}</span>
                </div>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {
                    "image":"url(../../static/img/home.png)",
                    "images":"url(../../static/img/home1.png)",
                    "title":"首页",
                    "router":"/bottombar/index"
                   
                },
                {
                    "image":"url(../../static/img/car.png)",
                    "images":"url(../../static/img/car1.png)",
                    "title":"买车",
                    "router":"/bottombar/shopping/买车商城"
                },
                {
                    "image":"url(../../static/img/money.png)",
                    "images":"url(../../static/img/money1.png)",
                    "title":"卖车",
                    "router":"/bottombar/sellcar"
                },
                {
                    "image":"url(../../static/img/cart.png)",
                    "images":"url(../../static/img/cart1.png)",
                    "title":"购物车",
                    "router":"/bottombar/shoppingcart/cart"
                },
                {
                    "image":"url(../../static/img/me.png)",
                    "images":"url(../../static/img/me1.png)",
                    "title":"我的",
                    "router":"/bottombar/userinfo"
                }
            ]
        }
    },
    mounted() {
        // document.getElementsByClassName("navlist")[0].style.borderBottom =".03rem solid #e75830";
        // document.getElementsByClassName("image")[0].style.display ="none";
        // document.getElementsByClassName("items")[0].style.display ="none";
        // document.getElementsByClassName("images")[0].style.display ="block";
    },
    methods:{
        // fun(i){
        //     var navlist = document.getElementsByClassName("navlist");
        //     var item = document.getElementsByClassName("items");
        //     var image =document.getElementsByClassName("image");
        //     var images=document.getElementsByClassName("images");
        //     for(let j = 0;j<navlist.length;j++){
        //         if(j == i){
        //             navlist[i].style.borderBottom=".03rem solid #e75830"
        //             item[i].style.display="none";
        //             image[i].style.display="none";
        //             images[i].style.display="block";
        //         }else{
        //             navlist[j].style.borderBottom ="none";
        //             item[j].style.display="block";
        //             image[j].style.display="block";
        //             images[j].style.display="none";
        //         }
        //     }
            
        // },
      
    },
}
</script>
<style scoped>
    .nav{
        position: fixed;
        bottom: 0;
        background: white;
        height: 1.3rem;
        width: 100%;
        text-align: center;
        /* padding: 0 .55rem; */
        padding-top: .3rem;
        z-index: 100;
        overflow: hidden;
    }
    .nav a{
        color:#000;
        font-size: .25rem;
        margin:auto auto;
        float: left;
        display: block;
        width: 20%;

    }
    .image{
        display: block;
        width: .44rem;
        height: .4rem;
        background-size: .44rem .4rem;
        margin: 0 auto;
    }
    .nav span{
        display: inline-block;
        margin-top:.1rem;
    }
    /* .images{
        display: none;
        width: .44rem;
        height: .4rem;
        margin-bottom:.3rem;
    } */
</style>
