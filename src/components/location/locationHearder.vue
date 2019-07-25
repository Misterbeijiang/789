<template>
<!-- 城市头部 -->
   <div class="Search_header">
        <em class="header_goback"></em>
        <p @click="show()" v-show="bool">
            <i class="header_logo"></i>
            <span>请输入城市名称或拼音</span>
        </p>
        <div class="Search_input" v-show="newbool">
            <strong>
                <i></i>
            </strong> 
            <input type="text" placeholder="请输入城市名称或拼音">
            <span @click="to()">取消</span>
        </div>
   </div>
</template>
<script>
export default {
    data() {
        return {
            bool:true,
            newbool:false,
            mast:false,
            goodmast:false
        }
    },
    methods: {
        show(){
            console.log("ssss")
            this.newbool = !this.newbool
            this.bool = !this.bool  
            this.$emit("spot", this.mast)
        },
        to(){
            console.log("ssss");
            this.newbool = !this.newbool
            this.bool = !this.bool
            // this.$emit("spot",this.goodmast)  
        }
    },
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
.Search_header p{
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
}
.Search_header .header_logo{
    display: inline-block;
    position: relative;
    width: .44rem;
    height: .44rem;
    top: .12rem;
    background: url(../../../static/img/search-icon@2x.02819b4e.png) no-repeat;
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
/* input框 */
.Search_header .Search_input{
    margin-left: .64rem;
    display: flex;
    align-items: center;
    width: 100%;
}
.Search_header .Search_input input{
    width: 85%;
    height: .7rem;
    outline: 0;
    border: 0;
    border-radius: .1rem;
    background: #f3f3f3;
    text-indent: .75rem;
}
.Search_header .Search_input span{
    display: inline-block;
    font-size: .3rem;
    color: #ff5a37;
    width: 15%;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
}
.Search_header .Search_input strong{
    position: absolute;
    background: #f3f3f3;
    width: .44rem;
    margin-left: .1rem;
    padding: .10rem 0;
}
.Search_header .Search_input strong i{
    display: inline-block;
    width:.44rem;
    height: .44rem;
    background: url(https://s2.xinstatic.com/u2-m-sta/media/search-icon@2x.02819b4e.png) no-repeat;
    background-size: 100%;
}
</style>
