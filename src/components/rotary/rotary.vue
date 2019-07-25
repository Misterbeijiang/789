<template>
    <div>
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in itemdata" :key="i">
                    <img :src="v.image" >
                    <p>{{v.item}}</p>
                </div>        
            </div> 
        </div>
    </div>
</template>
<script>

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';

export default {
    props:{
        itemdata:Array
    },
    mounted(){
        new Swiper ('.swiper-container', {          
            loop: true,
            autoplay:true,
            // delay: 500,
            // stopOnLastSlide: false,
            // disableOnInteraction: true
            // direction: 'horizontal',
            // observer:true,
            // observeParents:true,
            // disableOnInteraction:false
        })     
     
   
    }

}
</script>
<style scoped>
    .swiper-container img{
        width: 100%;
        height: 100%;
        background: pink;
    }
    .swiper-slide{
        position: relative;
    }
    .swiper-slide p{
        width: 100%;
        position: absolute;
        bottom: 0;
        font-size: .28rem;
        line-height: .76rem;
        color: white;
        font-weight: normal;
        padding: 0 .18rem;
        background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.6));
    }
    
</style>
