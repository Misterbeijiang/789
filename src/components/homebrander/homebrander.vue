<template>
    <div class="box">      
        <div class="brander_a">
            <div v-for="(v,i) in arr" :key="i" >
                <div class="brander_a">
                    <span class="brander_b">
                        <img :src="v.images" >
                        <p>
                            <span @click.stop="func(v,i)">
                                {{v.name}}
                            </span>       
                        </p>
                    </span>
                </div>
            </div>
        </div>      
    </div>
</template>
<script>
export default {
    components:{
        
    },
    data(){
        return{
            arr:[
                { images:"../../../static/img/2.png",name:"奥迪"},
                { images:"../../../static/img/3.png",name:"阿尔法•罗密欧"},
                { images:"../../../static/img/4.png",name:"阿斯顿•马丁"},
                { images:"../../../static/img/5.png",name:"安驰"},
                { images:"../../../static/img/6.png",name:"ALPINA"},
                { images:"../../../static/img/7.png",name:"AC Schnitzer"},
                { images:"../../../static/img/8.png",name:"安凯客车"}
            ],      
        }
    },
    methods: {
        func(value,index){
            this.$router.go(-1)
            this.$router.push({name:'home',query:{value:value.name}});
        }
    },  
}
</script>
<style scoped>
    .box{
        width: 100%;       
    }
    .brander_a{
        width: 100%;
        height: 1rem;
        padding-top:.3rem;
        padding-left:.1rem;
        background-color: #fff;
    }
    img{
        width: 7%;
        float: left;
        
    }
    p{
        float: left;
        /* line-height: 1.2rem; */
        padding-left:.3rem;
        font-size: .3rem;
        margin-top: 3px;
        color: #111111;
    }
</style>