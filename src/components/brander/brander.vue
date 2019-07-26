<template>
    <div class="box">
        
        <div class="brander_a">
            <!-- <router-link :to="'/shopping/'+v.name"> -->
                <Branderem v-for="(v,i) in arr" :key="i" :images="v.images" :name="v.name"></Branderem>
            <!-- </router-link> -->
        </div>
       
    </div>
</template>
<script>

const Branderem = () => import("./branderem")

export default {
    components:{
        Branderem
        
    },
    data(){
        return{
            arr:[
                { images:"../../../static/img/5.png",name:"奥迪",},
                { images:"../../../static/img/luo.png",name:"阿尔法•罗密欧"},
                { images:"../../../static/img/mading.png",name:"阿斯顿•马丁"},
                { images:"../../../static/img/anchi.png",name:"安驰"},
                { images:"../../../static/img/al.png",name:"ALPINA"},
                { images:"../../../static/img/ac.png",name:"AC Schnitzer"},
                { images:"../../../static/img/an.png",name:"安凯客车"}

            ],
           
        }
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
        
    }
  
    /* .brander_a{
        width: 100%;
    } */
    
</style>