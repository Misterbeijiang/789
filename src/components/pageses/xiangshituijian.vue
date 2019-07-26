<template>
    <div class="car-details-recommend">
        <Uvintips></Uvintips>
        <Shoppingbottom></Shoppingbottom>
    </div>
</template>

<script>

const Uvintips = () => import("./uvintips")
const Shoppingbottom = () => import("../shopping/shoppingbottom")

export default {
   components:{
       Uvintips,
       Shoppingbottom
   } 
}
</script>

<style scoped>

</style>
