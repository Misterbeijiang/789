<template>
    <div>
        <div class="header" >
            
            <router-link :to="v.router" v-for="(v,i) in arr"  :key="i"><span class="check" @click="fun(i)">{{v.title}}</span></router-link>
            <router-link to=""><span class="share"></span></router-link>   
        </div>
         <router-view></router-view>
    </div>
</template>
<script>


export default {
   
    data(){
        return {
            arr:[
                {"title":"全部","router":"/shoppingcart/all"},
                {"title":"购物车","router":"/shoppingcart/cart"}
            ]
        }
    },
    mounted() {
        document.getElementsByClassName("check")[1].style.borderBottom =".03rem solid #e75830";
    },
    methods: {
        fun(i){
            var check = document.getElementsByClassName('check');
            for(let j=0;j < check.length;j++){
                if(j == i){
                    check[i].style.color="black";
                    check[i].style.borderBottom =".03rem solid #e75830";
                }else{
                    check[j].style.color="#989898";
                    check[j].style.borderBottom ="none";
                }
            }
        }
    }

}
</script>
<style scoped>
    .header{
        text-align: center;
        background: white;
        color: #989898;   
    }
    .header span{
        display: inline-block;
        line-height: .9rem;
        font-size: .3rem;
        margin:0 .12rem;
    }
    .share{
        display: block;
        content: "";
        width: .38rem;
        height: .38rem;
        background: url("../../static/img/return.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: .25rem;
        right: .3rem;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .check{
        color:#989898;
    }

</style>
