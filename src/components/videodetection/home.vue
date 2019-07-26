<template>
    <div>
        <div class="color">
            <div class="box1">
                <router-link to="./index" class="header_goback">
                    <!-- <em ></em> -->
                </router-link>
                
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
                        <span class="MD-c2b-car-sale-o-c2b-license-content" >京</span>
                        <span>
                         <div class="item_b" :class="{active:show==1}" data-flag="car-letter">
                                <div class="item_f"></div>
                                <div class="item_e">
                                   <span  class="item_d" v-for="(v,i) in arra" :key="i" @click="fun(i)">{{v.name}}</span>
                                </div>
                            </div>
                        </span>
                        <span>
                             <span class="MD-c2b-car-sale-o-c2b-license-content" >A </span>
                             <div class="item_b" :class="{active:show==1}" data-flag="car-letter"  style="display:block">
                                <div class="item_f"></div>
                                <div class="item_e">
                                    <span class="item_d" v-for="(v,i) in arr" :key="i" @click="fun(i)" >{{v.name}}</span>
                                </div>
                            </div>
                        </span>
                       
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
import Staler from './staler'
import Car from './car'  //引入组件
import Ca from './ca'
  export default {
    components:{
      Car ,
      Staler//引用组件
    },
    data(){
      return{
        date:'',
        bool:false,
        arr:[
            {name:"A"},
            {name:"B"},
            {name:"C"},
            {name:"D"},
            {name:"E"},
            {name:"F"},
            {name:"G"},
            {name:"H"},
            {name:"I"},
            {name:"J"},
            {name:"K"},
            {name:"L"},
            {name:"M"},
            {name:"N"},
            {name:"O"},
            {name:"P"},
            {name:"Q"},
            {name:"R"},
            {name:"S"},
            {name:"T"},
            {name:"U"},
            {name:"V"},
            {name:"W"},
            {name:"X"},
            {name:"Y"},
            {name:"Z"},

        ],
        arra:[
            {name:"京"},
            {name:"津"},
            {name:"沪"},
            {name:"渝"},
            {name:"翼"},
            {name:"渝"},
            {name:"辽"},
            {name:"黑"},
            {name:"湘"},
            {name:"皖"},
            {name:"鲁"},
            {name:"新"},
            {name:"苏"},
            {name:"浙"},
            {name:"赣"},
            {name:"鄂"},
            {name:"桂"},
            {name:"甘"},
            {name:"晋"},
            {name:"蒙"},
            {name:"陕"},
            {name:"吉"},
            {name:"闽"},
            {name:"贵"},
            {name:"粤"},
            {name:"青"},
            {name:"藏"},
            {name:"川"},
            {name:"宁"},
            {name:"琼"},
            {name:"云"},

        ]
        
      }
      
    },
    
    methods:{
        show(){
            this.bool=true
        },
        fun(i){
            console.log(i);
           
            for (var j = 0; j<this.arr.length;j++){
                if(i==j){
                    
                }
            }      
        }
    }
  }

</script>
<style scoped>
    .item_e:onclick .item_b{
        display: none;
    }
    .item_e{
           position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: #E1DFDE;
            color: #030303;
            padding-top: .2rem;
            font-size: .4rem;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            cursor: pointer;
    }
    .item_b{
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        overflow-y: auto;
        z-index: 100;
        background: rgba(0,0,0,.5);
        cursor: pointer;
    }
    .item_d{
        width: 8%;
        height: .84rem;
        margin: 0 1% .24rem;
        text-align: center;
        line-height: .84rem;
        background: #fff;
        border-radius: .1rem;
        box-shadow: 0 1px 2px #666;
        cursor: pointer;
    }
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
        margin: 0 -.3rem .05rem .15rem;
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
        position: fixed;
        bottom:0;
        background-color: #ff5a37;
        line-height: 1rem;
        text-align: center;
        float: left;
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
        /* margin-right: .7rem; */
    }
    
</style>
