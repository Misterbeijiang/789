<template>
<!-- 主页搜索父组件 -->
    <div class="search_suggest_w">
        <section class="search_suggest">
            <HomePageSearchHeader></HomePageSearchHeader>
            <HomePageSearchTage></HomePageSearchTage>
            <HomePageSearchKefu></HomePageSearchKefu>
        </section>  
    </div>
</template>
<script>

const HomePageSearchHeader = () => import("../HomePage/HomePageSearchHeader")
const HomePageSearchTage = () => import("../HomePage/HomePageSearchTage")
const HomePageSearchKefu = () => import("../HomePage/HomePageSearchKefu")

export default {
    components:{
        HomePageSearchHeader,
        HomePageSearchTage,
        HomePageSearchKefu
    }
}
</script>
<style scoped>
.search_suggest_w{
    position: absolute;
    background: #ffffff;
    height: 100%;
    width: 100%;
    z-index: 8;
}
.search_suggest{
    background: #ffffff;
    position: relative;
    z-index: 1;
    max-height: 120%;
}
</style>
