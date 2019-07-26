<template>
<!-- 城市头部 -->
   <div class="Search_header">
       <router-link to="./home">
           <em class="header_goback"></em>
       </router-link>
        
        
        <span>卖车城市</span>
        
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.Search_header{
   width: 100%;
   border-bottom: 1px solid #dbdada;
   padding: .1rem 0;
   position: relative; 
   align-items: center;
   display: flex;
   background: #ffffff;
}
/* .Search_header p{
    background: #fafafa;
    border-radius: 1px solid #fafafa;
    border-radius: .06rem;
    font-size: .26rem;
    color: #c5c5c5;
    height: .7rem;
    line-height: .7rem;
    text-align: center;
    margin: 0 .3rem 0 .64rem;
    width: 100%;
} */
span{
    width: 100%;
    text-align: center;
    height: .7rem;
    text-align: center;
    line-height: .7rem;
    font-size: .3rem;
}
.Search_header .header_logo{
    display: inline-block;
    position: relative;
    width: .44rem;
    height: .44rem;
    top: .12rem;
    /* background: url(../../../static/img/search-icon@2x.02819b4e.png) no-repeat; */
    background-size: 100%;
}
.Search_header .header_goback{
   position: absolute;
   top: .34rem;
   left: .28rem;
   width: .2rem;
   height: .2rem;
   border:solid #ff5a37;
   border-width: 0 0 1.5px 1.5px;
   transform: rotate(45deg);
}
</style>
