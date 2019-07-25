<template>
<!-- 定位城市主体 -->
    <dl class="city_colomn">
        <p class="city_white">当前定位城市</p>
        <!-- 定位图标和位置 -->   
        <dd class="city_city">   
            <span class="city_a">
                <img src="../../../static/img/1.png" alt="">            
                北京
            </span>
        </dd>
         <p>A</p>
        <div class="city_zimu">
           
            <span>
                <a href="#" v-for="(v,i) in A" :key="i">{{v.name}}</a>
            </span> 
            {{newdata.list}}
        </div>
         <p>B</p>
        <div class="city_zimu">
            
            <span class="location_a">
                <a href="#" v-for="(v,i) in B" :key="i">{{v.name}}</a>
            </span> 
        </div>
        <p>C</p>
        <div class="city_zimu">
            
            <span class="location_a">
                <a href="#" v-for="(v,i) in C" :key="i">{{v.name}}</a>
            </span> 
        </div>
        <p>D</p>
        <div class="city_zimu">
            
            <span class="location_a">
                <a href="#" v-for="(v,i) in D" :key="i">{{v.name}}</a>
            </span> 
        </div>
    </dl>
</template>
<script>
export default {
    data() {
        return {
            newdata:[],
            newdatas:[]
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((data)=>{
            
            this.newdata = data.data.city
            console.log(this.newdata)
            console.log(this.A)
        })
    },
    computed:{
        A:function(){
            return this.newdata[0].A
        },
        B:function(){
            return this.newdata[1].B
        },
        C:function(){
            return this.newdata[2].C
        },
        D:function(){
            return this.newdata[3].D
        }
    }
}
</script>
<style scoped>
p{
    width: 100%;
    height: .5rem;
    padding-left: .3rem;
    line-height: .5rem;
    font-weight: 500;
    background: #f6f6f9;
    float: left;
}
img{
    float: left;
    padding-top:.2rem;
}

.city_a{
    display: block;
    width: 96%;
    height: 1rem;
    line-height: 1rem;
    font-size:.3rem;
    padding-left: .3rem;
    background-color: #fff;
    float: left;
    color:#fa823b;

}
.city_zimu{
    display: flex;
   width: 100%;
    background-color: #fff;
    color:black;
}
a{
    width: 25%;
     float: left;
     height: .8rem;
     overflow: hidden;
     text-align: center;
     line-height: .8rem;
    color:black;
}



</style>