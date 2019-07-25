<template>
    <div>
        <div>
            <Slide item="宝典"></Slide>
            <Rotary :itemdata="arr"></Rotary>
            <Rotnav :itemdata="arra"></Rotnav>
            <div class="titles">
                <Slidemore title="热门文章"></Slidemore>
                <Article :itemdata="arrb"></Article>
            </div>
            <div class="titles">
                <Slidemore title="百科"></Slidemore>
                <Clopedias :itemdata="arrc"></Clopedias>
            </div>
            <div class="titles">
                <Slidemore title="热门问答"></Slidemore>
                <Popular :itemdata="arrd"></Popular>
            </div>
            <div class="questions">
                <router-link to=""></router-link>
            </div>
        </div>
        
    </div>
</template>
<script>

const Slide = () => import("../components/slide/slide")
const Rotary = () => import("../components/rotary/rotary")
const Rotnav = () => import("../components/repeat/more")
const Slidemore = () => import("../components/repeat/slidemore")
const Article = () => import("../components/treasury/article")
const Clopedias = () => import("../components/treasury/clopedias")
const Popular = () => import("../components/treasury/popular")


export default {
    components:{
        Slide,
        Rotary,
        Rotnav,
        Slidemore,
        Article,
        Clopedias,
        Popular,
    },
    data(){
        return {
            arr:[],
            arra:[
                {
                    "image":"../../../static/img/remo1.png",
                    "item":"问答"
                },
                {
                    "image":"../../../static/img/remo2.png",
                    "item":"文章"
                },
                {
                    "image":"../../../static/img/remo3.png",
                    "item":"百科"
                }
            ],
            arrb:[],
            arrc:[],
            arrd:[],
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            method: "get"
        }).then((ok)=>{
            console.log(ok);
            this.arr = ok.data.rotary
            this.arrb=ok.data.article.splice(0,2)
            this.arrc=ok.data.clopedias
            this.arrd=ok.data.popular
        })
    },
}
</script>
<style scoped>
    .titles{
        background: #fff;
        overflow: hidden;
        margin-bottom: .2rem;
    }
    
    .questions{
        position: fixed;
        bottom: .22rem;
        right: .25rem;
        width: 1.1rem;
        height: 1.1rem;
        background: url("../../static/img/ask.png") no-repeat;
        background-size: 100%;
        outline: none;
    }
</style>
