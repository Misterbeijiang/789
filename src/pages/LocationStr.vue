<template>
<!-- 首页城市定位 -->
    <div>
        <LocationHearder v-on:spot="spot" ></LocationHearder>
        <nav v-show="mast ? false :true">将从全国为您挑选该城市可购买的车辆</nav>
        <LocationBody v-show="mast ? false :true"></LocationBody>
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
            badmast:true
        }
    },
     methods:{
        spot:function(data,todata){
            this.mast = data
            this.badmast = todata

            if(this.mast == false && this.badmast == false){
                this.mast = false
                this.badmast = false   
            }else{
                this.mast = true
                this.badmast = true   
            }
            console.log(this.data)
            console.log(this.todata)
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
