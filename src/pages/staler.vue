<template>
<!-- 首页城市定位 -->
    <div>
        <Stalem></Stalem>
        <Stale></Stale>      
    </div>
</template>
<script>

const Stale = () => import("../components/gujialocation/stale")
const Stalem = () => import("../components/gujialocation/stalem")

export default {
    components:{
        Stale,
        Stalem
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
</style>
