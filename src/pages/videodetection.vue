<template>
    <div>
        <div v-if="bool">
            <Gif></Gif>  
        </div>
        <div v-else>
             <!-- 大图片组件   repeat（复用）文件-->
            <Picture :itemdata="arr" ></Picture>
            <!-- 视频组件 videodetetection文件 -->
            <Videocarlist :itemdata="arra"></Videocarlist>
            <More more="更多视频车源" :itemdata="arrb"></More>
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
            this.arr = ok.data.video.splice(0,1);
            this.arra = ok.data.carlist
            this.arrb = ok.data.more.splice(0,1);
            this.bool=false;
        })
    },

}
</script>
<style scoped>

</style>
