<template>
    <div class="page-tabs-wrap" v-if="btnName">
        <a href="javascript:void(0);" class="back">
            <i class="triangle-left"></i>
        </a>
        <ul class="page-tabs">
            <li class="tab-type-li" style="width: 20%; display: table-cell;">车辆</li>
            <li class="tab-type-li  tab-type-active" style="width: 20%; display: table-cell;">档案</li>
            <li class="tab-type-li" style="width: 20%; display: table-cell;">检测</li>
            <li class="tab-type-li" style="width: 20%; display: table-cell;">车图</li>
            <li class="tab-type-li" style="width: 20%; display: table-cell;">推荐</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ment:false  
        }
    },
    props:{
        btnName:Boolean
    }
}
</script>

<style scoped>
    .page-tabs-wrap {
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        z-index: 20;
        top: 0;
        height: .91rem;
        line-height: .91rem;
        font-size: .3rem;
        background-color: #fff;
        text-align: right;
    }
    .page-tabs-wrap .back {
        position: absolute;
        left: .23rem;
        top: .26rem;
    }
    .page-tabs-wrap .triangle-left {
        display: block;
        width: .22rem;
        height: .38rem;
        background: url("../../assets/houtui_1.png");
        background-size: 100%;
    }
    .page-tabs-wrap .page-tabs {
        display: table;
        width: 100%;
        padding-left: .5rem;
        box-sizing: border-box;
    }
    .page-tabs-wrap .tab-type-li {
        text-align: center;
        color: #1b1b1b;
        position: relative;
        padding: 0 .23rem;
        margin-left: .14rem;
    }
    .page-tabs-wrap .tab-type-active:after {
        content: "";
        display: inline-block;
        width: 1.08rem;
        height: .04rem;
        background: #f85d00;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -.54rem;
    }
</style>
