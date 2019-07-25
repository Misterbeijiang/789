<template>
    <div>
        <div v-if="bool">
            <Gif ></Gif>
        </div>
        <div v-else>
            <Picture :itemdata="arr" ></Picture>
        </div>
        
        
        
    </div>
</template>
<script>

const Gif = () => import("../components/gif/loading")
const Picture = () => import("../components/repeat/picture")
 
export default {
    components:{
        Picture,
        Gif
    },
    data(){
        return {
            arr:[],
            bool:true
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            methods:"get"
        }).then((ok)=>{
            this.arr = ok.data.contract
            this.bool=false
        })
    },
}
</script>
<style scoped>

</style>
