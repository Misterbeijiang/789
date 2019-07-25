<template>
    <div>
        
        <div class="brander_a">
            <span class="brander_b">
                <router-link :to="'/shopping/'+name">
                    <img :src="images" >
                    <p>{{name}}</p>
                </router-link>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        images:String,     
        name:String
    }
}
</script>
<style scoped>
    .brander_a{
        width: 100%;
        height: 1rem;
        padding-top:.3rem;
        padding-left:.3rem;
        background-color: #fff;
    }
    img{
        width: 7%;
        float: left;
        
    }
    p{
        float: left;
        /* line-height: 1.2rem; */
        padding-left:.3rem;
        font-size: .3rem;
        color: #333;
    }   
    
</style>