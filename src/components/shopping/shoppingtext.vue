<template>
  <div>
    <!-- 导航部分 -->
    <div class="text" :class="{'shopping_text_met':sttume}">
      <ul class="shopping_text">
        <li class="shopping" @click="add()" v-bind:class="{shopp_red:mend}">
          智能排序
          <span></span>
        </li>
        <li>
          <router-link to="/brand" class="shopping_li">
            品牌
            <span></span>
          </router-link>
        </li>
        <li class="shopping_li" @click="adc()" v-bind:class="{shopp_red:skt}">
          <b>{{this.infor}}</b>
          <span></span>
        </li>
        <li>
          <router-link to="/Filter" class="shopping_li">
            更多
            <span></span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 点击智能排序出现列表 -->
    <div v-show="flag" class="box">
      <li>
        <router-link to class="box_li">智能排序</router-link>
      </li>

      <router-link to>
        <li>价格最低</li>
      </router-link>

      <router-link to>
        <li>价格最高</li>
      </router-link>

      <router-link to>
        <li>车龄最短</li>
      </router-link>

      <router-link to>
        <li>里程最少</li>
      </router-link>

      <router-link to>
        <li>最新发布</li>
      </router-link>

      <router-link to>
        <li>首付最低</li>
      </router-link>

      <router-link to>
        <li>月供最低</li>
      </router-link>
    </div>
    <!-- 点击价格出现列表     -->
    <div v-show="math" class="box_price">
      <div class="price-btn-lists">
        <a href="#" @click="price('价格')">不限价格</a>
        <a href="#" @click="price('5万以下')">5万以下</a>
        <a href="#" @click="price('5-10万')">5-10万</a>
        <a href="#" @click="price('10-15万')">10-15万</a>
        <a href="#" @click="price('15-20万')">15-20万</a>
        <a href="#" @click="price('20-30万')">20-30万</a>
        <a href="#" @click="price('30-50万')">30-50万</a>
        <a href="#" @click="price('50万以上')">50万以上</a>
      </div>
      <div class="price-range">
        <div class="price-range-title">
          <span>自定义价格</span>
          <span>(万元)</span>
          <span>不限</span>
          <span>确定</span>
        </div>
        <Shoppingslider></Shoppingslider>
        <div class="price-range-span">
          <span>0</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>40</span>
          <span>50</span>
          <span>不限</span>
        </div>
      </div>
    </div>
    <div class="obscure show" v-show="mstat"></div>
  </div>
</template>
<script>
import Shoppingslider from "./shoppingslider";
export default {
  components: {
    Shoppingslider
  },
  data() {
    return {
      sttume: false,
      flag: false,
      math: false,
      mstat: false,
      mend: false,
      skt: false,
      infor: "价格",
      mettods: ""
    };
  },
  methods: {
    add() {
      // this.flag = true;
      // this.sttume = true;
      this.sttume = true;
      this.flag = !this.flag;
      this.math = false;
      this.skt = false;
      //第二次s
      if (this.mend == true) {
        this.mend = false;
      } else {
        this.mend = true;
      }
    },
    adc() {
      this.sttume = true;
      if (this.math == false) {
        this.math = true;
      } else {
        this.math = false;
      }
      this.mend = false;
      this.flag = false;
      if (this.skt == true) {
        this.skt = false;
      } else {
        this.skt = true;
      }
    },

    showIcon() {
      if (
        document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 90
      ) {
        this.sttume = true;
      } else {
        this.sttume = false;
      }
    },
    created() {
      console.log(111)
    },
    // 选择显示汽车价位对应的汽车信息
    price(index) {
      this.infor = index;
      console.log(this.infor);
      // this.axios({
      //       url:"/apis/loadAll",
      //       methods:"get"
      //   }).then((ok)=>{
      //       this.mettods=ok.data;
      //       console.log(this.mettods)
      //       this.$emit('chiend',this.mettods)
      //   })
      if (index == "价格") {
        this.axios({
          url: "/apis/loadAll",
          methods: "get"
        }).then(ok => {
          this.mettods = ok.data;
          console.log(this.mettods);
          this.$emit("chiend", this.mettods,true);
        });
      } else if (index == "5万以下") {
        this.axios({
          url: "/apis/carByprice",
          methods: "get"
        }).then(ok => {
          this.mettods = ok.data;
          console.log(this.mettods);
          this.$emit("chiend", this.mettods,true);
        });
      } else if (index == "5-10万") {
        this.axios({
          url: "/apis/loadByPriceRange/" + "5-8万",
          methods: "get"
        }).then((ok) => {
          this.mettods = ok.data.queryResult.list;
          console.log(this.mettods);
          this.$emit("chiend", this.mettods,true);
        });
      }
      // this.math = !this.math;
      if (this.math == false) {
        this.math = true;

        // this.axios({
        //   url:"",
        //   methods:"get"
        // }).then((data)=>{
        //   console.log(data)
        // })
      } else {
        this.math = false;
      }
      if (this.skt == false) {
        this.skt = true;
      } else {
        this.skt = false;
      }
      // 把 index 发送到后端，返回相应的汽车信息  index 是字符串
      // this.axios
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showIcon);
  }
};
</script>
<style scoped>
/* 导航部分 */
.text {
  border-bottom: #c5c5c5 1px solid;
  width: 100%;
  background: #fff;
  z-index: 999;
}
.shopping_text {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.shopping_text li {
  font-size: 0.28rem;
  color: #333;
  width: 25%;
  text-align: center;
  padding: 3%;
}
.shopping_text span {
  position: absolute;
  margin-left: 10px;
  margin-top: 8px;
  width: 5px;
  height: 5px;
  border-right: 1px solid #585858;
  border-bottom: 1px solid #585858;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  content: "";
}
.shopping_li {
  font-size: 0.28rem;
  color: #333;
  text-align: center;
}
.shopping_li b {
  font-weight: 400;
}
.shopping {
  font-size: 0.28rem;
  color: #333;
  text-align: center;
}
.shopping_li::before {
  content: "";
  width: 0.03rem;
  height: 0.26rem;
  background: #e5e5e5;
  display: block;
  position: absolute;
  top: 22px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.shopping_text_met {
  position: fixed;
  top: 0;
  left: 0;
}
/* 点击智能排序出现列表 */
.box {
  width: 100%;
  background: #fff;
  position: absolute;
  z-index: 999;
  top: 44px;
}
.box li {
  font-size: 0.28rem;
  padding: 0.36rem;
  border-bottom: #e5e5e5 1px solid;
  color: #3c3c3c;
}
.box_li::after {
  content: "";
  width: 0.25rem;
  height: 0.25rem;
  background: url("../../assets/z-6.png") no-repeat 50%;
  background-size: 100%;
  display: inline-block;
  position: absolute;
  top: 1.1em;
  right: 0.5rem;
}
.box_li {
  color: #ff5a37;
}
.shopping_text .shopp_red {
  color: red;
}
/* 点击价格出现列表 */
.box_price {
  width: 100%;
  background: #fff;
  position: absolute;
  z-index: 999;
  top: 44px;
}
.price-btn-lists {
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  padding-top: 0.3rem;
  z-index: 4;
}
.price-btn-lists a {
  display: block;
  width: 2.16rem;
  height: 0.72rem;
  line-height: 0.72rem;
  background: #fff7f5;
  border-radius: 0.08rem;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  color: #3c3c3c;
  font-size: 0.28rem;
  margin-bottom: 0.2rem;
  margin-left: 0.25rem;
  box-sizing: border-box;
  float: left;
}
/* 自定义价格 */
.price-range-title {
  color: #1b1b1b;
  padding: 0 0.3rem;
  font-weight: 400;
  position: relative;
  font-size: 0.3rem;
  margin: 0.2rem 0;
}
.price-range-title span:nth-child(2) {
  margin-left: 0.08rem;
  font-size: 0.24rem;
  color: #999;
}
.price-range-title span:nth-child(3) {
  position: absolute;
  right: 1.8rem;
  color: #f85d00;
}
.price-range-title span:nth-child(4) {
  position: absolute;
  right: 0.3rem;
  top: 50%;
  padding: 0.12rem 0.28rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 0.26rem;
  color: #fff;
  border-radius: 0.08rem;
  text-align: center;
  background: -webkit-linear-gradient(left, #fc9600, #f85d00);
  background: linear-gradient(90deg, #fc9600, #f85d00);
}
.obscure {
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: block;
}

.price-range-span {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.6rem 0.3rem 0.55rem;
  color: #c5c5c5;
}
</style>
