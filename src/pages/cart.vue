<template>
    <div>
        <div v-if="bool">
            <Gif></Gif>
        </div>
        <div v-else>
            <div class="section" v-for="(v,i) in arr" :key="i">
                <div class="cont" @click="fun(id)">
                    <div class="cart-left">
                        <img class="image" :src="v.image" alt="">
                        <img :src="v.video" class="start">              
                    </div>
                    <h3>{{v.title}}</h3>
                    <span class="total"><i class="number">{{v.money}}</i>万</span>
                    <span class="time">{{v.time}}</span>
                </div>       
                <div class="cart-right">
                    <img class="imagein" :src="v.exponent" alt="">
                    <div class="infor">
                        <router-link to=""><span class="online">在线咨询</span></router-link>            
                        <router-link to=""><span class="contrast"><i>+</i>对比</span></router-link>
                    </div>            
                </div>
            </div>
        </div>
        
        
    </div>
   
</template>
<script>

const Gif = () => import("../components/gif/loading")

export default {
    components:{
        Gif
    },
    data() {
        return {
            arr:[],
            bool:true
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.cart
            this.bool=false
        })
    },
    methods: {
        fun(id){
            
        }
    },
}
</script>
<style scoped>
    .section{
        margin: .2rem;
        padding: .3rem .2rem;
        background: white;
        overflow: hidden;
    }
    .cont{
        width: 49%;
        float: left;
    }
    .cont h3{
        font-size: .27rem;
        font-weight: 400;
        line-height: .46rem;
        padding: .24rem 0 0 0;
    }
    .cart-left{
        /* float: left; */
        position: relative;
    }
    .image{
        width: 100%;
        height: 2.2rem;
    }
    .imagein{
        width: 100%;
    }
    .start{
        position: absolute;
        right: .1rem;
        bottom: .1rem;
        width: .44rem;
        height: .44rem;
    }
    .total{
        color:#fa6731;
        margin-right: .16rem;
    }
    .number{
        font-size: .27rem;
        font-style: normal;
    }
    .total,.time{
        font-size: .2rem;
    }
    .time{
        color:#919191;
    }
    .cart-right{
        float: right;
        position: relative;
        width: 49%;
    }
    .contrast{
        position: absolute;
        bottom: 0;
    }
    .infor{
        padding: 0 .2rem;
    }
    .online,.contrast{
        color:#ff5e14;
        display: inline-block;
        padding: .12rem .24rem;
        border: .01rem solid #ff5e14;
        border-radius: .05rem;
        margin: .1rem;
        font-size: .24rem;
        /* line-height: .6rem; */
    }
    .contrast i{
        font-style: normal;
        font-weight: 900;
    }
</style>
