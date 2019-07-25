<template>
<!-- 高级筛选头部 -->
        <nav class="nav">
            <!-- 这个点击跳转首页 -->
            <a href="javascript:history.go(-1);" class="GoBack"></a>
            <span class="subTit">高级筛选</span>
        </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav{
    line-height: .9rem;
    background: #ffffff;
    font-size: .36rem;
    color: #1b1b1b;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ebe9e9;
}
.nav .GoBack{
    position: absolute;
    top: .31rem;
    left: .3rem;
    width: .24rem;
    height: .26rem;
    display: block;
    border:solid #ff5a37;
    transform: rotate(45deg);
    border-width: 0 0 2px 2px;
}
</style>

