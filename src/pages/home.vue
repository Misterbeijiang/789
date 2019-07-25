<template>
    <div>
        <div class="color">
            <div class="box1">
                <a href="javascript:history.go(-1)" class="header_goback">
                </a>
                <p class="nav">车辆估价</p>
                <span></span>
            </div>
            <ul class="info">
                <router-link to="./staler">
                <li class="list-item">
                    
                    <span class="MD-c2b-car-sale-o-c2b-trigger-title">卖车城市</span>
                    <p class="MD-c2b-car-sale-o-c2b-trigger-collect">
                        
                            <span class="MD-c2b-car-sale-o-c2b-trigger-content MD-c2b-car-sale-o-c2b-trigger-finish">北京</span>
                            <i class="MD-c2b-car-sale-o-c2b-trigger-arrow"></i>
                        
                    </p>
                   
                </li>
                 </router-link>
                <li class="list-item">
                    <span class="MD-c2b-car-sale-o-c2b-trigger-title">车辆牌照</span>
                    <p class="MD-c2b-car-sale-o-c2b-license-collect">
                        <span class="MD-c2b-car-sale-o-c2b-license-content">京</span>
                        <span class="MD-c2b-car-sale-o-c2b-license-content">A</span>
                    </p>
                </li>
                <router-link to="./brand">
                <li class="list-item">
                    <span class="MD-c2b-car-sale-o-c2b-trigger-title">品牌车系</span>
                    <p class="MD-c2b-car-sale-o-c2b-trigger-collect">
                        <span class="MD-c2b-car-sale-o-c2b-trigger-title">请选择品牌&车系</span>
                        <i class="MD-c2b-car-sale-o-c2b-trigger-arrow"></i>
                    </p>
                </li>
                </router-link>
                <li class="list-item">
                    <span class="MD-c2b-car-sale-o-c2b-trigger-title">上牌时间</span>
                    <p class="MD-c2b-car-sale-o-c2b-trigger-collect">
                        <span class="MD-c2b-car-sale-o-c2b-trigger-content">请选择上牌时间</span>
                        <i class="MD-c2b-car-sale-o-c2b-trigger-arrow"></i>
                    </p>
                </li>
                <li class="list-item">
                    <span class="MD-c2b-car-sale-o-c2b-mileage-title">行驶里程</span>
                    <p class="MD-c2b-car-sale-o-c2b-mileage-collect">
                        <input placeholder="请输入行驶里程" class="MD-c2b-car-sale-o-c2b-mileage-content" type="number">
                        <span>万公里</span>
                    </p>
                </li>
                <li class="list-item" @click="show()">
                    <span class="MD-c2b-car-sale-o-c2b-trigger-title">车况自评</span>
                    <p class="MD-c2b-car-sale-o-c2b-trigger-collect">
                        <span class="MD-c2b-car-sale-o-c2b-trigger-content">请选择车况</span>
                        
                        <i class="MD-c2b-car-sale-o-c2b-trigger-arrow"></i>
                        <Car class="box2" v-if="bool"></Car>
                    </p>
                </li>
                
            </ul>
            <div class="color_b">车辆估价</div>
        </div>   
    </div>
          
</template>
<script>

const Staler = () => import("./staler")
const Car = () => import("./car")
    
  export default {
    components:{
      Car ,
      Staler//引用组件
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
        font-size: .3rem;
        /* height: 100%; */
        background: #f9f9f9;
        /* line-height: 1; */
    }
     .color_a{
        background-color: #fff;
        /* border:1px solid red; */
        height: 6.7rem;
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
        width: 100%;
        text-align: center;
        float: left;
    }
    .box1{
        width: 100%;
        height: 1.1rem;
        background: #fff;
        font-size: .3rem;
        color: #1b1b1b;
        border-bottom: 1px solid #ebe9e9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .3rem;
    }
    .box1 span{
        width: .3rem;
        height: .3rem;
    }
    .header_goback{
        width: .24rem;
        height: .24rem;
        border:solid #ff5a37;
        border-width: 0 0 1.5px 1.5px;
        transform: rotate(45deg);
    }
   .MD-c2b-car-sale-o-c2b-trigger-arrow {
        display: inline-block;
        width:.17rem;
        height: .17rem;
        border: solid #DBDADA;
        border-width: 1.5px 1.5px 0 0;
        transform: rotate(45deg);
        margin: 0 0 0 .1rem;
    }
    .info {
        background: #fff;
    }
    .list-item {
        height: 1rem;
        margin-left: .3rem;
        padding-right: .3rem;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list-item>p {
        height: 1rem;
        line-height: 1rem;
    }
    .MD-c2b-car-sale-o-c2b-trigger-collect {
        width: 70%;
        height: 1.2rem;
        font-size: .28rem;
        color: #ccc;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .MD-c2b-car-sale-o-c2b-trigger-finish {
        color: #333;
      
    }
    .MD-c2b-car-sale-o-c2b-trigger-content {
        font-size: .28rem;
        color: #ccc;
        display: inline-block;
        width: 90%;
        height: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1rem;
        text-align: right;
    }
    .MD-c2b-car-sale-o-c2b-license-content:first-child {
        margin-right: .4rem;
    }
    .MD-c2b-car-sale-o-c2b-license-content {
        display: inline-block;
        height: 100%;
    }
    .MD-c2b-car-sale-o-c2b-license-collect {
        width: 60%;
        height: 1.2rem;
        font-size: .28rem;
        color: #333;
        text-align: right;
        line-height: 1.2rem;
    }
    .MD-c2b-car-sale-o-c2b-license-content::after {
        content: '';
        display: inline-block;
        width: .14rem;
        height: .14rem;
        border: solid #DBDADA;
        border-width: 1.5px 1.5px 0 0;
        transform: rotate(135deg);
        margin: 0 0 .05rem .15rem;
    }
    .MD-c2b-car-sale-o-c2b-trigger-finish {
        color: #333;
    }
    .MD-c2b-car-sale-o-c2b-mileage-collect {
        width: 60%;
        height: 1rem;
        font-size: .28rem;
        color: #333;
        text-align: right;
        line-height: 1rem;
    }
    .MD-c2b-car-sale-o-c2b-mileage-content {
        display: inline-block;
        border: 0;
        outline: 0;
        height: .4rem;
        line-height: .4rem;
        padding: .15rem 0;
        width: 65%;
        text-align: right;
        font-size: .28rem;
        color: #333;
        
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    #cccccc;
    }
    .MD-c2b-car-sale-o-c2b-trigger-title{
        color:black;
    }
    .color_b{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    .MD-c2b-car-sale-o-c2b-trigger-collect {
        width: 70%;
        height: 1.2rem;
        font-size: .28rem;
        color: #ccc;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .MD-c2b-car-sale-o-c2b-trigger-finish {
        color: #333;
    }
    .MD-c2b-car-sale-o-c2b-trigger-content {
        font-size: .28rem;
        color: #ccc;
        display: inline-block;
        width: 90%;
        height: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1rem;
        text-align: right;
    }
    .MD-c2b-car-sale-o-c2b-license-content:first-child {
        margin-right: .4rem;
    }
    .MD-c2b-car-sale-o-c2b-license-content {
        display: inline-block;
        height: 100%;
    }
    .MD-c2b-car-sale-o-c2b-license-collect {
        width: 60%;
        height: 1.2rem;
        font-size: .28rem;
        color: #333;
        text-align: right;
        line-height: 1.2rem;
    }
    .MD-c2b-car-sale-o-c2b-license-content::after {
        content: '';
        display: inline-block;
        width: .14rem;
        height: .14rem;
        border: solid #DBDADA;
        border-width: 1.5px 1.5px 0 0;
        transform: rotate(135deg);
        margin: 0 0 .05rem .15rem;
    }
    .MD-c2b-car-sale-o-c2b-trigger-finish {
        color: #333;
    }
    .MD-c2b-car-sale-o-c2b-mileage-collect {
        width: 60%;
        height: 1rem;
        font-size: .28rem;
        color: #333;
        text-align: right;
        line-height: 1rem;
    }
    .MD-c2b-car-sale-o-c2b-mileage-content {
        display: inline-block;
        border: 0;
        outline: 0;
        height: .4rem;
        line-height: .4rem;
        padding: .15rem 0;
        width: 65%;
        text-align: right;
        font-size: .28rem;
        color: #333;
        
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    #cccccc;
    }
</style>
