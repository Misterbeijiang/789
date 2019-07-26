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
                <a href="#" v-for="(v,i) in A" :key="i" @click="funa(v,i)">{{v.name}}</a>
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
            newdatas:[],
            A:[],
            B:[],
            C:[],
            D:[],
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((data)=>{           
            this.newdata = data.data.city
            console.log(this.newdata)
            this.A = this.newdata[0].A
            this.B = this.newdata[1].B
            this.C = this.newdata[2].C
            this.D = this.newdata[3].D
        })
    },
    methods:{
        funa(value,index){
            console.log(value.name)
            console.log(index)
            this.$router.push({name:'home',query:{name:value.name}})
        }
    }
}
</script>
<style scoped>
p{
    width: 100%;
    height: .7rem;
    padding-left: .3rem;
    line-height: .7rem;
    font-weight: 500;
    background: #f6f6f9;
    color: #999999;
    float: left;
    font-size: .26rem;
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
    font-size: .28rem;
}



</style>