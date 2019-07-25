<template>
<!-- 定位城市主体 -->
    <dl class="city_colomn" v-if="mast" >
        <dt class="city_white">定位城市</dt>
        <!-- 定位图标和位置 -->   
        <dd class="city_city">   
            <span>
                <i class="city_icon"></i>
                安庆
            </span>
        </dd>
        <dt class="city_white">热门城市</dt>
        <!-- 热门 -->
        <dd class="hot_city">
            <a href="#">北京</a>
            <a href="#">上海</a>
            <a href="#">深圳</a>
            <a href="#">广州</a>
            <a href="#">成都</a>
            <a href="#">重庆</a>
        </dd>
        <div class="city_zimu">
            <dt>A</dt>
            <dd>
                <a href="#" v-for="(v,i) in A" :key="i">{{v.name}}</a>
            </dd> 
        </div>
        <div class="city_zimu">
            <dt>B</dt>
            <dd>
                <a href="#" v-for="(v,i) in B" :key="i">{{v.name}}</a>
            </dd> 
        </div>
        <div class="city_zimu">
            <dt>C</dt>
            <dd>
                <a href="#" v-for="(v,i) in C" :key="i">{{v.name}}</a>
            </dd> 
        </div>
        <div class="city_zimu">
            <dt>C</dt>
            <dd>
                <a href="#" v-for="(v,i) in D" :key="i">{{v.name}}</a>
            </dd> 
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
    props:["mast","goodmast"],
    methods:{

    },
    created() {
        this.axios({
            url:"/ding/wei",
            methods:"get"
        }).then((data)=>{
            this.newdatas = data.data.city
            this.newdata = data.data.city
            console.log(this.newdata)
            this.A = this.newdata[0].A
            this.B = this.newdata[1].B
            this.C = this.newdata[2].C
            this.D = this.newdata[3].D
        })
    },
}
</script>
<style scoped>
.city_colomn dt{
    padding-left: .3rem;
    height: .5rem;
    line-height: .5rem;
    font-weight: 500;
    background: #f8f8f8;
    color: #333;
}
.city_colomn .city_white{
    margin-top: .24rem;
    color: #666666;
    font-size: .24rem;
    background-color: white;
}
.city_colomn .city_city{
    position: relative;
}
.city_colomn .city_city span{
    display: block;
    margin: 0 .3rem;
    padding: .12rem 0;
    color: #333333;
    font-size: .36rem;
    font-weight: 600;
    border-bottom: 1px solid #f1f1f1;
}
.city_colomn .city_city .city_icon{
    position: relative;
    display: inline-block;
    margin-right: .03rem;
    width: .28rem;
    height: .34rem;
    background: url(../../../static/img/position_icon@2x.ba439c2d.png) no-repeat;
    background-size: 100%;
    vertical-align: middle;
}
.city_colomn .city_zimu dd a{
    display: block;
    margin: 0 .3rem;
    padding: .24rem 0;
    font-size: .26rem;
    border-bottom: 1px solid #f8f8f8;
    color: #666666;
}
.city_colomn .hot_city{
    display: flex;
    padding: .2rem .3rem 0 0;
    flex-wrap: wrap;
    background-color: #ffffff;
}
.city_colomn .hot_city a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .32rem;
    margin: 0 0 .3rem .3rem;
    width: 28%;
    height: .7rem;
    color: #333333;
    font-weight: 500;
    background-color: #f1f1f1;
    border-radius: .1rem;
}
</style>