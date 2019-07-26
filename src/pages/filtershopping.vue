<template>
    <div class="box">
          <Shoppingtop></Shoppingtop>
          <Shoppingtext @chiend="chiends($event,userDefined)"></Shoppingtext>
          <Filtershoppingbottom :chiends="name"></Filtershoppingbottom>
    </div>
</template>
<script>
const Shoppingtop = () => import("../components/shopping/shoppingtop")
const Shoppingtext = () => import("../components/shopping/shoppingtext")
const Filtershoppingbottom = () => import("../components/filtershopping/filtershoppingbottom")



export default {
    components:{
        Shoppingtop,
        Shoppingtext,
        Filtershoppingbottom
    },
    data () {
        return {
            name:""
        }
    },
    methods: {
        chiends(met){
            this.name=met;
        }
    },
    created () {
        this.axios
    }
}
</script>
<style scoped>
    .box{
        margin-bottom:1.5rem;
    }
    
</style>