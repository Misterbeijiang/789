<template>
<!-- 首页城市定位 -->
    <div>
        <LocationHearder v-on:spot="spot" ></LocationHearder>
        <nav v-if="mast">将从全国为您挑选该城市可购买的车辆</nav>
        <LocationBody :mast="mast" :goodmast="goodmast"></LocationBody>
    </div>
</template>
<script>

const LocationHearder = () => import("../components/location/locationHearder")
const LocationBody = () => import("../components/location/locationBody")

export default {
    components:{
        LocationHearder,
        LocationBody
    },
    data(){
        return{
            mast:true, 
            goodmast:true
        }
    },
     methods:{
     spot:function(data){
            console.log(data)
            this.mast = data
            console.log(this.mast)
            console.log(this.goodmast)

        }
     }
}
</script>
<style scoped>
nav{
    height: .8rem;
    padding: .2rem 0;
    text-align: center;
    background: #fef4e4;
    font-size: .28rem;
    color: #f85d00;
}
</style>
