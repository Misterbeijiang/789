<template>
  <div>
    <div class="sellcartext">
      <h1>直卖流程</h1>
    </div>
    <div class="sellcar_text">
      <div @click="add(0)" :class="ind == 0?'box':'sellcar_make'">预约卖车</div>
      <div @click="add(1)" :class="ind == 1?'box1':'sellcar_matching'">匹配买家</div>
      <div @click="add(2)" :class="ind == 2?'box2':'sellcar_sign'">签到付款</div>
      <div @click="add(3)" :class="ind == 3?'box3':'sellcar_deal'">交易完成</div>
    </div>
    <div class="sellcar">
      <div class="sellcar_item">
        <p v-for="(item,index) in sellcarInfor" :key="index" v-show="index == ind">{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ind: 0,
      flag: false,
      sellcarInfor: [
        "车辆信息快速提交，预约卖车极简体验",
        "借助优信全国的网络为车主找寻意向最强买家，上门验车，即时报价",
        "透明交易，在线签约，立刻打款，收款支付比例最高可达100%",
        "双方自行约定客户，交易完成车款尾款即时付"
      ]
      
    };
  },
  methods: {
    add(index) {
      this.ind = index;
      if (index == 0) {
        this.flag = true;
        
      }
    }
  }
};
</script>
<style scoped>
.box {
  width: 25%;
}
.box::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: -1.1rem 0rem;
}
.box::after {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  border: solid #ddd;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 0.46rem;
  left: 1.75rem;
}
.sellcartext h1 {
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.38rem;
  color: #333;
  padding: 0 0.4rem;
}
.sellcar_text {
  display: flex;
  margin-top: 0.2rem;
  width: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 0.3rem;
}
.sellcar_make {
  width: 25%;
  color: #aaa;
}
.sellcar_make::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: 0rem 0rem;
}
.sellcar_make::after {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  border: solid #ddd;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 0.46rem;
  left: 1.75rem;
}
.sellcar_matching {
  width: 25%;
  color: #aaa;
}
.sellcar_matching::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: 0rem -1.1rem;
}
.sellcar_matching::after {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  border: solid #ddd;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 0.46rem;
  left: 3.6rem;
}
.box1 {
  width: 25%;
  color: #f85d00;
}
.box1::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: -1.1rem -1.1rem;
}
.box1::after {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  border: solid #ddd;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 0.46rem;
  left: 3.6rem;
}
.sellcar_sign {
  width: 25%;
  color: #aaa;
}
.sellcar_sign::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: -2.2rem 0rem;
}
.sellcar_sign::after {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  border: solid #ddd;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 0.46rem;
  left: 5.5rem;
}
.box2 {
  width: 25%;
  color: #f85d00;
}
.box2::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: -2.2rem -1.1rem;
}
.box2::after {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  border: solid #ddd;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  display: block;
  position: absolute;
  top: 0.46rem;
  left: 5.5rem;
}
.sellcar_deal {
  width: 25%;
  color: #aaa;
}
.sellcar_deal::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: 0rem -2.2rem;
}
.box3 {
  width: 25%;
  color: #f85d00;
}
.box3::before {
  background-size: 3.3rem 3.2rem;
  background-image: url("../../assets/sellcar_home.png");
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto 0.18rem;
  background-position: -1.1rem -2.2rem;
}
.sellcar {
  width: 100%;
  border-bottom: #ddd 4px solid;
  margin-bottom: 0.5rem;
}
.sellcar_item {
  width: 90%;
  background: #fdf8ef;
  margin-bottom: 1rem;
  margin: 4%;
}
.sellcar_item p:first-child {
  padding: 0.3rem 0 0.3rem 0.3rem;
  background: #fdf8ef;
  line-height: 0.43rem;
  font-size: 0.25rem;
  color: #c5a879;
  position: relative;
}
.sellcar_item p:nth-child(2n) {
  padding: 0.3rem 0 0.3rem 0.3rem;
  background: #fdf8ef;
  line-height: 0.43rem;
  font-size: 0.3rem;
  color: #c5a879;
  position: relative;
}
.sellcar_item p:nth-child(3n) {
  padding: 0.3rem 0 0.3rem 0.3rem;
  background: #fdf8ef;
  line-height: 0.43rem;
  font-size: 0.3rem;
  color: #c5a879;
  position: relative;
}
</style>
