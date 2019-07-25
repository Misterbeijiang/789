<template>
<!-- 主页搜索头部 -->
   <header class="Search_header">
      <form class="Search_header_bar">
         <i class="header_log"></i>
         <input type="text" class="header_input" placeholder="搜索您想要的车" @input="fun" v-model="input_content">
      </form>
      <a href="javascript:history.go(-1);" class="header_btn">取消</a>
      <div class="search_suggest_list" v-show="bool">
         <router-link to="#" v-for="(v,i) in inputDate" :key="i">
               <span>
                  {{v.title}}
               </span>
         </router-link>
      </div>
   </header>
</template>
<script>
export default {
    data() {
         return {
            chepais:[],
            bool:false,
            input_content:"",
            input_value:{},
         }
    },
   methods: {
      // 判断input框是否存在东西 如果有出现 没有消失
      fun(){
         this.bool = true
         console.log("sss")
         if(document.querySelector('input').value == "" ){
            this.bool = false
         }
         this.axios({
               url:"/apis/getCarInfo?"+"carInfoPath="+this.input_content,
               methods:"get"
         }).then((ok)=>{
               console.log(ok.data.queryResult.list[0].carBrand)
               for(let i=0;i< ok.data.queryResult.list.length;i++){
                  this.input_value = [
                                          { "title" : ok.data.queryResult.list[i].carBrand}
                                    ]
               }
               console.log(this.input_value)
         })
      }
   },
   created() {
      
   },
   computed: {
      inputDate(){
         let input_content = this.input_content;
         if(input_content){
               return this.input_value.filter(function(product) {
               console.log(product.carBrand)
               return Object.keys(product).some(function(key) {
               return String(product[key]).toLowerCase().indexOf(input_content) > -1
            })
         })
      }
      return this.products;
   },
}
}
</script>
<style scoped>
.Search_header{
   width: 100%;
   border-bottom: 1px solid #dbdada;
   padding: .2rem 0 .2rem .3rem;
   height: 1.2rem;
   line-height: 1.2rem;
   position: relative; 
   align-items: center;
   display: flex;
}
.Search_header_bar{
   width: 80%;
}
.Search_header_bar .header_log{
   position: absolute;
   top: 36%;
   left: 7% !important;
   width: .32rem;
   height: .32rem;
   background: url(../../../static/img/home-sug_9b6b8da.png);
   background-size: 100%;
}
.Search_header_bar .header_input{
   border:0;
   outline: 0;
   background: #f5f5f5;
   width: 100%;
   padding: .12rem 0;
   padding-left: .7rem;
   padding-right: 15%;
   font-size: .26rem;
   border-radius: .1rem;
}
/* 修改字体颜色 */
input::-webkit-input-placeholder { /* WebKit browsers */ 
   color: #dfa5a5; 
} 
.header_btn{
   display: inline-block;
   width: 20%;
   text-align: center;
   color: #ff5a37;
   font-size: .28rem;
}
.search_suggest_list{
    position: absolute;
    width: 100%;
    height: 100%;
    height: 14.8rem;
    top: 1.2rem;
    left: 0;
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,.7);
    z-index: 5;
}
.search_suggest_list a{
    font-size: .28rem;
    height: 1rem;
    line-height: 1rem;
    background: #ffffff;
    color: #585858;
    padding: 0 .32rem;
}
.search_suggest_list a span{
   display: inline-block;
   line-height: 1rem;
   height: 1rem;
   width: 100%;
   border-bottom: 1px solid #dbdada;
}
</style>
