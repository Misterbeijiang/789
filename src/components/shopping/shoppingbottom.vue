<template>
<div>
    <div v-for="(v,i) in chiends" :key="i" class="item" >
        <router-link :to="'/page/'+v.carId">
            <div class="item_img">
                <span>
                    <img :src="v.carPic">
                    <img src="../../assets/cz.png">
                    <img src="../../assets/z-1.png">
                </span>
            </div>
            <div class="item_text">
                <ul class="item_li">
                    <li>{{v.carBrand}} {{v.carTime}} {{v.carDisplaceMent}} {{v.carGearBox}} {{v.carKinds}}</li>
                    <li>{{v.carTime}}/{{v.carDiatance}}</li>
                    <li>{{v.carPrice}}</li>
                    <li class="item_span">
                        <span>一成购</span>
                        <span>首付{{v.carFirstPay}}</span>
                        <span>月供{{v.carMonthPay}}</span>
                    </li>
                </ul>
             
            </div>
                <p v-if="v.carAuthen1" class="car-list-label">
                    <span class="label-box-box" >
                        <img src="../../assets/yingpai.png">
                        <span class="label-box-silver">{{v.carAuthen1}}</span>
                        <span class="uxin-promise">{{v.carQuit1}}</span>
                    </span>
                </p>
                <p v-else class="label_gold">
                    <span class="label-box">
                        <span class="label-silver">{{v.carAuthen}}</span>
                        <span class="label-promise">{{v.carQuit}}</span>
                    </span>
                </p>


        </router-link>
    </div>
    <div class="shopping_img">
      <img src="../../assets/z-4.png" />
    </div>
  </div>
</template>
<script>
export default {
    props: ["chiends"],
    data () {
        return {
            shopping:[],
            mettods:[],
            name:"买车商城",
            name:"一成购",
            chuancan:[]
        }
    },
    methods:{

    },
    created(){
        this.name = this.$route.params.name
        this.chuancan = this.$route.query.name
        if(this.name =="大众"||this.name =="宝马"||this.name =="奔驰"||this.name =="奥迪"||this.name =="丰田"||this.name =="本田"||this.name =="宝马"||this.name =="宝马"||this.name =="宝马"){
             this.axios({
                    url:"/apis/getCarBycarBrand/"+this.name,
                    methods:"get"
                }).then((ok)=>{
                    this.chiends=ok.data.queryResult.list
                })
        }else if(this.name =="买车商城"){
             this.axios({
                    url:"/apis/loadAll",
                    methods:"get"
                }).then((ok)=>{
                    this.chiends=(ok.data).splice(0,10)
                })
        }else if(this.name =="一成购" || this.name =="超值好车"){
              if(this.name =="超值好车"){
                 this.name =="一成购"
        }
             this.axios({
                    url:"/apis/loadAllCarPercent?carPercentName="+this.name,
                    methods:"get"
                }).then((ok)=>{
                    console.log(ok.data)
                    this.chiends=(ok.data).splice(0,10)
                })
        }else if(this.name == 20192723){
             this.axios({
                    url:"/apis/newArrival/?carNewtime="+this.name,
                    methods:"get",
                }).then((ok)=>{
                    console.log(ok.data);
                    this.chiends=(ok.data).splice(0,10);
                   
                })
        }
        else{
          this.axios({
                    url:"/apis/loadByPriceRange/"+this.name,
                    methods:"get"
                }).then((ok)=>{
                    this.chiends=ok.data.queryResult.list
            })
        }   
    },
}
</script>
<style scopde>
.item {
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: #c5c5c5 1px solid;
  overflow: hidden;
}
.item_img {
  position: relative;
  width: 35%;
  float: left;
}
.item_img img {
  width: 2.98rem;
  height: 2.1rem;
  margin-left: 0.3rem;
  padding-top: 0.3rem;
}
.item_img img:nth-child(2n) {
  width: 0.9rem;
  height: 1.1rem;
  position: absolute;
  top: -15px;
}
.item_img img:nth-child(3n) {
  width: 0.6rem;
  height: 0.8rem;
  position: absolute;
  bottom: 0.08rem;
  left: 2.2rem;
}
.item_text {
  display: flex;
  width: 62%;
  margin-left: 2.9rem;
  margin-top: -0.08rem;
}
.item_li {
  margin-top: 0.3rem;
}
.item_li li:first-child {
  padding-left: 0.6rem;
  font-size: 0.28rem;
  color: #1b1b1b;
  padding-bottom: 0.06rem;
  width: 95%;
}
.item_li li:nth-child(2n) {
  color: #999;
  font-size: 0.25rem;
  padding-left: 0.6rem;
  padding-bottom: 0.1rem;
}
.item_li li:nth-child(3n) {
  padding-left: 0.6rem;
  font-size: 0.3rem;
  color: #333;
}
.item_span {
  width: 100%;
  margin-left: 0.04rem;
  padding-top: 0.04rem;
}
.item_span span:first-child {
  display: inline-block;
  text-align: center;
  width: 0.8rem;
  border-radius: 1px;
  background: #f85d00;
  color: #fff;
  font-size: 0.18rem;
  overflow: hidden;
  margin-bottom: -0.02rem;
}
.item_span span:nth-child(2n) {
  color: #f85d00;
  font-size: 0.26rem;
  font-weight: 500;
  margin-right: 0.06rem;
}
.item_span span:nth-child(3n) {
  color: #f85d00;
  font-size: 0.26rem;
  font-weight: 500;
  margin-right: 0.06rem;
}
.label-box-box img {
  width: 0.2rem;
  display: inline-block;
  position: absolute;
  left: 0.08rem;
  top: 0.2rem;
}
.car-list-label {
  display: block;
  width: 50%;
  border-top: 1px solid #999;
  margin-left: 3.6rem;
  margin-top: 0.1rem;
  padding-top: 0.2rem;
  position: relative;
  font-size: 0.04rem;
  color: #999;
  margin-bottom: 0.1rem;
}
.label-box-silver::before {
  border: 1px solid #afb6c5;
  content: "";
  position: absolute;
  top: 0;
  left: -1.9rem;
  width: 200%;
  height: 0.56rem;
  border-radius: 0.08rem;
  transform: scale(0.5);
}
.label-box-silver {
  padding-left: 0.38rem;
}

.uxin-promise::before {
  display: inline-block;
  content: "|";
  margin-right: 0.14rem;
  margin-left: 0.1rem;
}
label-box-silver::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 196%;
  height: 0.56rem;
  border-radius: 0.08rem;
}
.label_gold {
  width: 50%;
  font-size: 0.18rem;
  border-top: #afb6c5 1px solid;
  padding-top: 0.1rem;
  margin-left: 3.55rem;
}
.label-silver {
  border: #e0c189 1px solid;
  color: #e0c189;
}
.label-silver::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0.04rem;
  width: 0.22rem;
  height: 0.22rem;
  background: url(//s1.xinstatic.com/u2-m-sta/media/gold-icon.6662c4cf.png)
    no-repeat;
  background-size: 99%;
  margin-right: 0.08rem;
  color: #e0c189;
}
.label-promise {
  color: #abd5ff;
  border: #abd5ff 1px solid;
}
.shopping_img {
  width: 100%;
  border-bottom: #e4e4e4 3px solid;
  padding-bottom: 0.1rem;
  margin-bottom: 0.5rem;
}
.shopping_img img {
  width: 6.8rem;
  margin: 5%;
}
</style>
