<template>
    <div id="page">
        <Pagecar></Pagecar>
        <!-- 包物流 -->
        <Baowuliu></Baowuliu>
        <!-- body部分 -->
        <Pagebody></Pagebody>
        <!-- 档案部分  -->
        <Cardangan></Cardangan>
        <!-- 检测部分 -->
        <Carjiance></Carjiance>
        <!-- 顶部bang -->

    </div>
</template>

<script>

const Pagecar = () => import("../components/pageses/pagecar")
const Baowuliu = () => import("../components/pageses/baowuliu")
const Pagebody = () => import("../components/pageses/pagebody")
const Cardangan = () => import("../components/pageses/cardangan")
const Carjiance = () => import("../components/pageses/carjiance")


export default {
    components:{
        Pagecar,
        Baowuliu,
        Pagebody,
        Cardangan,
        Carjiance
    }
}
</script>

<style scoped>
    #page{
        width: 100%;
    }
</style>
