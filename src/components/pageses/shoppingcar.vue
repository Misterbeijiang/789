<template>
    <div class="bottom-btn">
        <router-link to="/bottombar/shoppingcart/cart" class="btn-anniu detail-enter-im" @click="fun(i)">加入购物车</router-link>
        <router-link to="" class="btn-anniu btn-content detail-enter-im">在线客服</router-link>
        <router-link to="" class="btn-anniu btn-right chargecall jrtt_cardetail_call zhuge-phone btn-icon">免费咨询</router-link>
    </div>
</template>

<script>
export default {
    created() {
        this.name = this.$route.params.id
        console.log(this.name)
        
    },
    methods:{
        fun(i){
            console.log(i);
        }
    }
}
</script>

<style scoped>
    .bottom-btn {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 13;
        display: flex;
        font-size: 0;
        background: #ffa400;
        width: 100%;
        height: .88rem;
    }
    .bottom-btn .btn-anniu {
        width: 0;
        height: .88rem;
        line-height: .9rem;
        font-size: .3rem;
        color: #585858;
        text-align: center;
        background: #fff;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1;
        flex: 1 1;
        box-sizing: border-box;
    }
    .bottom-btn .btn-content {
        color: #fff;
        background: linear-gradient(90deg,#ffc500,#ffa400);
    }
    .bottom-btn .btn-right {
        color: #fff;
        background: linear-gradient(90deg,#fc9600,#f85d00);
    }
</style>
