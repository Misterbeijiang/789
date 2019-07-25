<template>
  <div>
    <header class="shoppingtop">
      <router-link to="/index">
        <i></i>
      </router-link>
      <router-link to="/sousuo" class="shoppingtop_seach">
        <span class="shoppingtop-search-text">
          <span class="text">搜索你想要的车</span>
        </span>
      </router-link>
      <router-link to="/locationStr" class="shoppingtop-city">北京</router-link>
    </header>
  </div>
</template>
<script>
export default {
};
</script>
<style socped>
/* header */
.shoppingtop {
  padding: 0.14rem 0;
  position: relative;
  z-index: 1;
  border-bottom: #c5c5c5 1px solid;
}
.shoppingtop i {
  display: inline-block;
  height: 0.46rem;
  width: 1rem;
  background: url("../../assets/youxin.png") no-repeat;
  background-size: 100%;
  vertical-align: middle;
  margin-top: 0.1rem;
  margin-left: 0.3rem;
}
.shoppingtop_seach {
  display: inline-block;
  width: 4.5rem;
  height: 0.6rem;
  padding: 0.08rem 0;
  padding-left: 0.34rem;
  margin-left: 0.2rem;
  margin-top: .06rem;
  box-sizing: border-box;
  background-color: #eceaea;
  border-radius: 0.1rem;
  text-align: left;
  vertical-align: middle;
  line-height: 0.5rem;
}
.shoppingtop-search-text {
  position: relative;
  color: #c5c5c5;
  font-size: 0.3rem;
}
.shoppingtop-search-text:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0.24rem;
  height: 0.24rem;
  margin-top: -0.12rem;
  background: url("../../assets/sousuo.png") no-repeat 50%;
  background-size: 100%;
}
.shoppingtop .text {
  padding-left: 0.3rem;
  width: 3.6rem;
}
.shoppingtop-city {
  font-size: 0.35rem;
  vertical-align: middle;
  text-align: right;
  float: right;
  margin-top: 0.11rem;
  margin-right: 0.24rem;
  color: #888;
}
.shoppingtop-city:after {
  content: "";
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
  background: url("../../assets/xiangxia.png") no-repeat;
  background-size: 100%;
  margin-left: 0.08rem;
  vertical-align: middle;
}
</style>