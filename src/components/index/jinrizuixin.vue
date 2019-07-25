<template>
  <div class="index_sku_wrap_aabb">
    <router-link :to="'/shopping/'+mast">
      <h5 class="index_sku_warp_h5">今日上新</h5>
      <p class="index_sku_warp_p">车源实时更新</p>
      <img src="../../assets/car.png" class="index_sku_warp_img" />
    </router-link>
    <router-link to="/shopping">
      <span class="indexB-a-pixel-img left-0"></span>
      <h5 class="index_sku_warp_h5">付一成开豪车</h5>
      <p class="index_sku_warp_p">首付低至5万↓</p>
      <img src="../../assets/aodi_1.png" class="index_sku_warp_img" />
      <span class="indexB-a-pixel-img right-0"></span>
    </router-link>
    <router-link to="/shopping">
      <h5 class="index_sku_warp_h5">省油代步</h5>
      <p class="index_sku_warp_p">油耗低 价格实惠</p>
      <img src="../../assets/haiyan_1.png" class="index_sku_warp_img" />
    </router-link>
  </div>
</template>

    <script>
    // newArrival
    export default {
      data(){
        return {
          mast:20190723
        }
      }
    };
    </script>

    <style scoped>
        .index_sku_wrap_aabb a {
        float: left;
        overflow: hidden;
        }
        .index_sku_wrap_aabb a:first-child {
        width: 2.33rem;
        }
        .index_sku_wrap_aabb a:nth-child(2) {
        width: 2.34rem;
        position: relative;
        }
        .index_sku_warp_h5 {
        font-size: 0.28rem;
        color: #262626;
        font-weight: 500;
        margin-top: 0.08rem;
        margin-left: 0.24rem;
        }
        .index_sku_warp_p {
        font-size: 0.2rem;
        line-height: 0.2rem;
        margin-top: 0.12rem;
        color: #999;
        font-weight: 300;
        display: inline-block;
        margin-bottom: 0.26rem;
        margin-left: 0.24rem;
        }
        .index_sku_wrap_aabb a:nth-child(2) .index_sku_warp_p {
        color: #fff;
        border-radius: 0.04rem;
        margin-bottom: 0.17rem;
        font-weight: 500;
        height: 0.28rem;
        line-height: 0.19rem;
        overflow: hidden;
        padding: 0.05rem 0.08rem 0;
        background: -webkit-linear-gradient(
            135deg,
            #ff5c33,
            #ff8f06 46%,
            #ff9b00 97%
        );
        background: linear-gradient(315deg, #ff5c33, #ff8f06 46%, #ff9b00 97%);
        box-shadow: 0 0.04rem 0.1rem 0 rgba(248, 93, 0, 0.3);
        }
        .index_sku_wrap_aabb a:nth-child(3) .index_sku_warp_h5:after {
        content: "\7701\94B1";
        font-size: 0.2rem;
        color: #fff;
        background: -webkit-linear-gradient(135deg, #ff8d8d, #f33);
        background: linear-gradient(315deg, #ff8d8d, #f33);
        box-shadow: 0 0.04rem 0.1rem 0 rgba(248, 0, 0, 0.3);
        border-radius: 0.04rem;
        padding: 0.04rem 0.05rem 0.01rem 0.03rem;
        margin-left: 0.08rem;
        position: relative;
        top: -0.02rem;
        line-height: 0.2rem;
        }
        .index_sku_warp_img {
        height: 1.2rem;
        margin-left: 0.21rem;
        }
        .indexB-a-pixel-img {
        display: inline-block;
        position: absolute;
        top: 0.16rem;
        bottom: 0.16rem;
        width: 1px;
        background-repeat: repeat-y;
        background: url("../../assets/123.png") repeat-y 50%;
        }
        .left-0 {
        left: 0;
        }
        .right-0 {
        right: 0;
        }
    </style>
