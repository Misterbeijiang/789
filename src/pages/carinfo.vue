<template>
    <div>
        <div class="color">
            <div class="box1">
                <em class="header_goback"></em>
                <p class="nav">车辆信息</p>
            </div>
            <div class="box">
                <span>卖车城市</span>
                <router-link to="./LocationStr"><input type="text" class=text placeholder="请输入你想说的 >"></router-link>
                
            </div>
            <div class="box">
                <span>车辆牌照</span>
                <input type="text" class=text placeholder="泸 > A >">

            </div>
            <div class="box">
                <span>品牌车系</span>
                <router-link to="./brand">
                     <input type="text" class=text placeholder="请选择品品牌&车系" >
                </router-link>
               <div class="goback"></div>

            </div>
            <div class="box">
                <span>上牌时间</span>
                <input type="text" class=text placeholder="请选择上牌时间">
                <div class="goback"></div>
            </div>
            <div class="box">
                <span>行驶里程</span>
                <input type="text_a" class=text value="万公里">
               

            </div>
            <div class="box item"  @click="show()" >
                <span>车况自评</span>
            
                <input type="text" class=text placeholder="请选择车况">
           
                <Car class="box2" v-if="bool"></Car>
                <div class="goback"></div>
            </div>
            <div class="fabu">
                发布流程
            </div>
            <div class="liucheng">
                <div class="liucheng-2">
                    <span><img src="../../static/img/info_2ec69ff.png"> </span>
                    <span>信息提交</span>
                </div>
                <div class="liucheng-3">
                    <span><img src="../../static/img/next_10bc911.png"> </span>
                </div>
                <div class="liucheng-2">
                    <span><img src="../../static/img/phone_15a7b0b.png"> </span>
                    <span>信息确认</span>
                </div>
                <div class="liucheng-3">
                    <span><img src="../../static/img/next_10bc911.png"> </span>
                </div>
                <div class="liucheng-2">
                    <span><img src="../../static/img/car_e31f3ad.png"> </span>
                    <span>车辆上架</span>
                </div>
            </div>
        </div>
        <div class="color_b">下一步</div>
      
    </div>
          
</template>
<script>
import LocationStr from './LocationStr'
import Car from './car'  //引入组件




  export default {
    components:{
      Car ,
      LocationStr//引用组件
    },
    data(){
      return{
        date:'',
        bool:false,
      }
    },
    
    methods:{
      show(){
          this.bool=true
      }
    }
  }

</script>
<style scoped>
    .color{
        background-color: #fff;
        font-size: .3rem;
    }
    .color_a{
        background-color: #fff;
        /* border:1px solid red; */
        height: 6.7rem;
    }
   .item:hover Car{
       display: block;
   }
   
    .nav_a{
        width: 10%;
        float: left;
        margin-left:5%;
    }
    .nav{
        width: 80%;
        text-align: center;
        float: left;
    }
    .box1{
        width: 100%;
        height: 1.1rem;
        border-bottom:1px solid #f1efef;
        line-height: 1.1rem;
    }
    .box{
        width: 95%;
        height: 1.1rem;
        /* border-top:1px solid red; */
        border-bottom:1px solid #f1efef;
        /* float: left; */
        line-height: 1.1rem;
        margin-left:5%;
        background-color: #fff;

    }
    .text{
        width: 50%;
        height: 1.1rem;
        float: right;
        outline: none;
        border:transparent;
        text-align: right;
    }
    .header_goback{
        position: absolute;
        top: .34rem;
        left: .28rem;
        width: .2rem;
        height: .2rem;
        border:solid #ff5a37;
        border-width: 0 0 1.5px 1.5px;
        transform: rotate(45deg);
    }
    .color_b{
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom:0;
        background-image: linear-gradient(to right,#FC9600,#F85D00);
        line-height: 1rem;
        text-align: center;
        float: left;
        font-size: .32rem;
         color: #fff;
    }
    .goback{
        width: .2rem;
        height: .2rem; 
        border:1px solid #dbdada;
        border-width:1.5px 1.5px 0 0;
        transform: rotate(45deg);
        position: relative;
        left: 168px;
        float:right;
        margin-top:.45rem;
    } 
    input{
        padding-right: 20px;
    }
    .color_c{
        width: .2rem;
        height: .2rem; 
        border:1px solid #dbdada;
        border-width:0 1.5px 1.5px 0;
        transform: rotate(45deg);
        position: relative;
        margin-right:-.7rem;
        float:right;
        
        margin-top:.4rem;
    }
    p{
        float: right;
        margin-right: .7rem;
    }
    .fabu{
        width: 100%;
        padding: .6rem 0 .5rem;
        background: #f9f9f9;
        font-weight: 500;
        color: #ccc;
        font-size: .34rem;
        text-align: center;
    }
    .liucheng{
        width: 100%;
        background:#f9f9f9; 
         padding-bottom: 180px;
    }
     .liucheng-2{
         float: left;
         height: 100%;
         display: block;
         text-align: center;
         width: 20%;
         font-size: 12px;
         color: #ccc;
        
     }
     .liucheng-2 img{
         margin-bottom: 10px;
         display: inline-block;
         width: 45px;
         height: 45px;
     }
      .liucheng-2 span{
          display: block;
           background:#f9f9f9; 

      }
       .liucheng-3 img{
           display: inline-block;
           width: 20px;
           height: 15px;
       }
        .liucheng-3{
            float: left;
            text-align: center;
            line-height: 68px;
            width: 20%;
            height: 68px;
            display:block;
            background:#f9f9f9; 
        }
</style>
