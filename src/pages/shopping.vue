<template>
    <div class="box">
          <Shoppingtop></Shoppingtop>
          <Shoppingtext @chiend="chiends($event,userDefined)"></Shoppingtext>
          <Shoppingbottom :chiends="name"></Shoppingbottom>
          <Shoppingbottomone></Shoppingbottomone>
    </div>
</template>
<script>
const Shoppingtop = () => import("../components/shopping/shoppingtop")
const Shoppingtext = () => import("../components/shopping/shoppingtext")
const Shoppingbottom = () => import("../components/shopping/shoppingbottom")
const Shoppingbottomone = () => import("../components/shopping/shoppingbottomone")



export default {
    components:{
        Shoppingtop,
        Shoppingtext,
        Shoppingbottom,
        Shoppingbottomone
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