<template>
    <div class="body">
        <OptionTop class="header"></OptionTop>
        <OptionBody></OptionBody>
    </div>
</template>
<script>

const OptionTop = () => import("../components/optionfilter/optiontop")
const OptionBody = () => import("../components/optionfilter/optionbody")

export default {
    components:{
        OptionTop,
        OptionBody
    },
    created() {
        
    },
}
</script>
<style scoped>
.body{
    height:100%;
}
html,body{
    height: 100%;
}
.height_class_list_footer{
    height: .88rem;
    line-height: .88rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: .32rem;
    z-index: 20;
}
.height_class_list_footer_cz{
    width: 2.5rem;
    color: #f85d00;
    background: #ffffff;
    text-align: center;
    float: left;
}
.height_class_list_footer_zong{
    background: linear-gradient(90deg,rgba(252,150,0,1),rgba(248,93,0,1));
    text-align: center;
    color: #ffffff;
    width: calc(100% - 2.5rem);
    float: right;
}
</style>
