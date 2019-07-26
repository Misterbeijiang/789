<template>
<!-- 首页城市定位 -->
    <div>
        <LocationHearder v-on:spot="spot" v-on:spotwhite="spotwhite"></LocationHearder>
        <nav v-show="mast">将从全国为您挑选该城市可购买的车辆</nav>
        <LocationBody v-show="badmast"></LocationBody>
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
            badmast:true,
            goodmast:true
        }
    },
     methods:{
        spot:function(datas,data){
            this.mast = datas
            this.badmast = data
            if(this.mast){
                this.mast = false
                this.badmast = false 
            }
        },
        spotwhite:function(data,todata){
            if(this.mast == false && this.badmast == false){
                this.mast = true
                this.badmast = true   
            }else{
                this.mast = false
                this.badmast = false   
            }
            console.log(this.mast)
            console.log(this.badmast)
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
div{
    background: #ffffff;
}
</style>
