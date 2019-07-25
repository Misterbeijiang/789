<template>
    <div>
        <div v-if="bool">
            <Gif></Gif>
        </div>
        <div v-else>
            <Picture :itemdata="arr" ></Picture>
            <Videocarlist :itemdata="arra"></Videocarlist>
            <More more="更多超值车源" :itemdata="arrb"></More>
        </div>
       
    </div>
</template>
<script>

const Picture = () => import("../components/repeat/picture")
const Videocarlist = () => import("../components/videodetection/videocarlist")
const More = () => import("../components/repeat/more")
const Gif = () => import("../components/gif/loading")

export default {
    components:{
        Picture,
        Videocarlist,
        More,
        Gif
    },
    data(){
        return {
            arr:[],
            arra:[],
            arrb:[],
            bool:true
        }
    },
    created(){
        this.axios({
            url:"/link/data",
            methods:"get"
        }).then((ok)=>{
            this.arr = ok.data.video.splice(1,1);
            this.arra = ok.data.goodcar;
            this.arrb = ok.data.more.splice(1,1);
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
