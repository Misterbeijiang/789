<template>
<div class="box">
    <Sellcar></Sellcar>
    <Sellcartext></Sellcartext>
    <Sellcaritem></Sellcaritem>
    <Sellcarprice></Sellcarprice> 
    <Sellcarimg></Sellcarimg>
    <Sellcarbottom></Sellcarbottom>
</div>
</template>
<script>


const Sellcar = () => import("../components/sellcar/sellcar")
const Sellcartext = () => import("../components/sellcar/sellcartext")
const Sellcaritem = () => import("../components/sellcar/sellcaritem")
const Sellcarprice = () => import("../components/sellcar/sellcarprice")
const Sellcarimg = () => import("../components/sellcar/sellcarimg")
const Sellcarbottom = () => import("../components/sellcar/sellcarbottom")



export default {
    components: {
        Sellcar,
        Sellcartext,
        Sellcaritem,
        Sellcarprice,
        Sellcarimg,
        Sellcarbottom
    }
}
</script>
<style socped>
    .box{
        background: white;   
    }
</style>
 
