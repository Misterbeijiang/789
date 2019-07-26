<template>
  <div>
      <div v-if="bool">
        <Gif></Gif>
      </div>
      <div v-else>
        <div class="index_body_node">
    <!-- header部分 -->
          <div id="index_body"> 
              <swiper></swiper>
          </div>
          <!-- 合同 -->
          <router-link to="/serve" class="index_hetong">
            <span>
              <i class="index_hetong_icon"></i>315项专业检测
            </span>
            <span>
              <i class="index_hetong_icon"></i>全国联保服务
            </span>
            <span>
              <i class="index_hetong_icon"></i>高清视频挑车
            </span>
          </router-link>
          <!-- 买车商城五个小图标 -->
          <div class="index_five_fast">
            <section class="fast_index">
              <router-link :to="'/bottombar/shopping/'+v.title" v-for="(v,i) in playcar" :key="i" class="fast_img_box" >
                  <logocai :titlename="v.title" :titleimg="v.imgagr"></logocai>
              </router-link>
              <router-link to="/bottombar/sellcar" class="fast_img_box">
                <img :src="imgagr4" class="img_box_img" />
                <span class="img_box_text">{{title4}}</span>
              </router-link>
              <router-link to="/home" class="fast_img_box">
                <img :src="imgagr5" class="img_box_img" />
                <span class="img_box_text">{{title5}}</span>
              </router-link>
            </section>
          </div>
          <!-- 全部车源 -->
          <div class="index_All_vehicle">
            <h4>
              全部车源
              <router-link to="/Filter" class="quick-screen-right-btn">
                <img src="../assets/jiangbei.png" />精准筛选
              </router-link>
            </h4>
            <!-- 热门车 -->
            <ul class="car-brand">
              <li class="car-screen-li" v-for="(v,i) in money" :key="i">
                <router-link :to="'/bottombar/shopping/'+v.moey" class="car-price-a">{{v.moey}}</router-link>
              </li>
            </ul>
            <!-- 带logo的车 -->
            <ul class="car-brand">
              <li class="car-screen-li" v-for="(v,i) in car" :key="i">
                <router-link :to="'/bottombar/shopping/'+v.cartry" class="car-price-a">
                  <img class="car-brand-img" :src="v.imgagr" />
                  <span class="car-brand-text">{{v.cartry}}</span>
                </router-link>
              </li>
              <li class="car-screen-li">
                <router-link to="/brand" class="car-price-a">
                  <img class="car-brand-img" :src="gengduoimgagr" />
                  <span class="car-brand-text">{{gengduocartry}}</span>
                </router-link>
              </li>
            </ul>
            <router-link :to="'/bottombar/shopping/'+mast" class="indexB-Bottom-btn">查看全部{{count}}俩车</router-link>
          </div>
          <!-- 今日最新 -->
          <div class="index_sku_wrap">
              <jinrizuixin></jinrizuixin>
          </div>
          <!-- 淘好车 -->
          <router-link to class="xin-crunchies-wrap"></router-link>
          <!-- 防止塌陷 -->
          <div class="cockLoft-tabs-hidden-div" v-bind:class="{cockLoft_tabs_hidden_div_block:divHidden}"></div>
          <!-- 价格分类 -->
          <div class="idnex_tabs_wrap" v-bind:class="{idnex_tabs_wrap_fixed:tabs}">
            <div class="box">
              <ul class="index_tabs_ul" style="text-align:center">
                <li class="index_tabs_li" v-bind:class="{tab_type_active:tabstes1}" @click="func1()">5万以下开回家</li>
                <li class="index_tabs_li" v-bind:class="{tab_type_active:tabstes2}" @click="func2()">5-8万入手准新车</li>
                <li class="index_tabs_li" v-bind:class="{tab_type_active:tabstes3}" @click="func3()">8-10万买豪华品牌</li>
                <li class="index_tabs_li" v-bind:class="{tab_type_active:tabstes4}" @click="func4()">10-20万中大型车</li>
                <li class="index_tabs_li" v-bind:class="{tab_type_active:tabstes5}" @click="func5()">20万起高档车</li>
                <li class="index_tabs_li" v-bind:class="{tab_type_active:tabstes6}" @click="func6()">猜你喜欢</li>
              </ul>
            </div>
            <!-- v-bind:class="{tab-type-active:mutter}" -->
            <div class="index_tabs_div">
              <span></span>
            </div>
          </div>
          <!-- 5万以下开回家 -->
          <div class="index_home_bottom">
            <div class="index_home_title">
              <span>5万以下开回家</span>
            </div>
            <div class="index_home_body">
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
            </div>
            <router-link to="/shopping" class="index_home_btn">
              查看更多
              <img src="../assets/xiangyou.png" />
            </router-link>
          </div>
          <!-- 5-8万入手准新车 -->
          <div class="index_home_bottom">
            <div class="index_home_title">
              <span>5-8万入手准新车</span>
            </div>
            <div class="index_home_body">
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
            </div>
            <router-link to="/shopping" class="index_home_btn">
              查看更多
              <img src="../assets/xiangyou.png" />
            </router-link>
          </div>
          <!-- 8-10万买豪华品牌 -->
          <div class="index_home_bottom">
            <div class="index_home_title">
              <span>8-10万买豪华品牌</span>
            </div>
            <div class="index_home_body">
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
            </div>
            <router-link to="/shopping" class="index_home_btn">
              查看更多
              <img src="../assets/xiangyou.png" />
            </router-link>
          </div>
          <!-- 10-20万中大型车 -->
          <div class="index_home_bottom">
            <div class="index_home_title">
              <span>10-20万中大型车</span>
            </div>
            <div class="index_home_body">
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
            </div>
            <router-link to="/shopping" class="index_home_btn">
              查看更多
              <img src="../assets/xiangyou.png" />
            </router-link>
          </div>
          <!-- 20万起高档车 -->
          <div class="index_home_bottom">
            <div class="index_home_title">
              <span>20万起高档车</span>
            </div>
            <div class="index_home_body">
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
            </div>
            <router-link to class="index_home_btn">
              查看更多
              <img src="../assets/xiangyou.png" />
            </router-link>
          </div>
          <!-- 猜你喜欢 -->
          <div class="index_home_bottom">
            <div class="index_home_title">
              <span>猜你喜欢</span>
            </div>
            <div class="index_home_body">
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
              <router-link to="/page" class="index_home_body_a">
                <img src="../assets/123.jpg" />
                <i class="index_home_body_vido"></i>
                <div class="index_home_body_div">
                  <div class="index_home_body_div_title">宝骏 310 2016款 1.2 手动 超值型</div>
                  <div class="index_home_body_div_money">
                    <span class="list-detail-price">2.53万</span>
                  </div>
                </div>
              </router-link>
            </div>
            <router-link to="/shopping" class="index_home_btn">
              查看更多
              <img src="../assets/xiangyou.png" />
            </router-link>
          </div>
          <!-- 锚点 -->
          <a href="javascript:void(0);" class="totop" id="totop" v-if="truemett" @click="funcctict()"></a>
        </div>




      </div>

      
  </div>
  
 
</template>

<script>

import { Swipe, SwipeItem } from "mint-ui";
const Logocai = () => import("../components/index/logocai")
const Jinrizuixin = () => import("../components/index/jinrizuixin")
const Swiper = () => import("../components/index/swiper")
const Gif = () => import("../components/gif/loading")

export default {
    components:{
        Logocai,
        Jinrizuixin,
        Swiper,
        Gif
    },
  created(){
    this.axios({
      url: "/apis/loadAll",
      methods: "get"
    }).then((ok)=>{
      this.count = ok.data.length
      this.bool=false
    });
  },
  data() {
    return {
      dazhong:"",
      count:"",
      name:"",
      mast:"买车商城",
      // 买车商城
      playcar: [
        { title: "买车商城", imgagr: require("../assets/qiche.png") },
        { title: "一成购", imgagr: require("../assets/qian.png") },
        { title: "超值好车", imgagr: require("../assets/chaozhi.png") },
      ],
      truemett:false,
       title4: "卖车", 
       imgagr4: require("../assets/smallcar.png"),
       title5: "免费估价", 
       imgagr5: require("../assets/jisuanqi.png") ,
      // 全部车源
      money: [
        { moey: "5万以下" },
        { moey: "5-8万" },
        { moey: "8-10万" },
        { moey: "10-20万" },
        { moey: "热销SUV" },
        { moey: "三厢轿车" },
        { moey: "两厢轿车" },
        { moey: "MPV" },
        { moey: "商务出行" },
        { moey: "家有二胎" },
        { moey: "皮实耐用" },
        { moey: "撩妹神器" }
      ],
      car: [
        { cartry: "大众", imgagr: require("../assets/dazhong.png") },
        { cartry: "宝马", imgagr: require("../assets/baoma.png") },
        { cartry: "奔驰", imgagr: require("../assets/benchi.png") },
        { cartry: "奥迪", imgagr: require("../assets/aodi.png") },
        { cartry: "丰田", imgagr: require("../assets/fengtian.png") },
        { cartry: "本田", imgagr: require("../assets/bentian.png") },
        { cartry: "福特", imgagr: require("../assets/fute.png") },
      ],
      //更多
      gengduocartry:"更多",
      gengduoimgagr: require("../assets/更多.png"),
      //价格分类
      menerytop: [
        { title: "5万以下开回家", tabstes: true },
        { title: "5-8万入手准新车", tabstes: false },
        { title: "8-10万买豪华品牌", tabstes: false },
        { title: "10-20万中大型车", tabstes: false },
        { title: "20万起高档车", tabstes: false },
        { title: "猜你喜欢", tabstes: false }
      ],
      tabs: false,
      divHidden: false,
      tabstes1: true,
      tabstes2: false,
      tabstes3: false,
      tabstes4: false,
      tabstes5: false,
      tabstes6: false,
      bool:true
    };
  },
  methods: {
    showIcon() {
      if (document.documentElement.scrollTop &&document.documentElement.scrollTop > 849 &&document.documentElement.scrollTop < 1814) {
        this.tabs = true;
        this.divHidden = true;
        this.tabstes1 = true;
        this.tabstes2 = false;
        this.tabstes3 = false;
        this.tabstes4 = false;
        this.tabstes5 = false;
        this.tabstes6 = false;
        this.truemett = true;
        var ss = document.getElementsByClassName("index_tabs_ul")[0];
      } else if (document.documentElement.scrollTop &&document.documentElement.scrollTop >= 1814 &&document.documentElement.scrollTop < 2789) {
        this.tabstes1 = false;
        this.tabstes2 = true;
        this.tabstes3 = false;
        this.tabstes4 = false;
        this.tabstes5 = false;
        this.tabstes6 = false;
        this.truemett = true;
        this.tabs = true;
        this.divHidden = true;
        var ss = document.getElementsByClassName("index_tabs_ul")[0];
        ss.scrollLeft = 0;
      } else if (document.documentElement.scrollTop &&document.documentElement.scrollTop >= 2789 &&document.documentElement.scrollTop < 3765) {
        this.tabstes1 = false;
        this.tabstes2 = false;
        this.tabstes3 = true;
        this.tabstes4 = false;
        this.tabstes5 = false;
        this.tabstes6 = false;
        this.truemett = true;
        this.tabs = true;
        this.divHidden = true;
        var ss = document.getElementsByClassName("index_tabs_ul")[0];
        ss.scrollLeft = 140;
      } else if (document.documentElement.scrollTop &&document.documentElement.scrollTop >= 3765 &&document.documentElement.scrollTop < 4737) {
        this.tabstes1 = false;
        this.tabstes2 = false;
        this.tabstes3 = false;
        this.tabstes4 = true;
        this.tabstes5 = false;
        this.tabstes6 = false;
        this.truemett = true;
        this.tabs = true;
        this.divHidden = true;
        var ss = document.getElementsByClassName("index_tabs_ul")[0];
        ss.scrollLeft = 280;
      } else if (document.documentElement.scrollTop &&document.documentElement.scrollTop >= 4737 &&document.documentElement.scrollTop < 5715) {
        this.tabstes1 = false;
        this.tabstes2 = false;
        this.tabstes3 = false;
        this.tabstes4 = false;
        this.tabstes5 = true;
        this.tabstes6 = false;
        this.truemett = true;
        this.tabs = true;
        this.divHidden = true;
        var ss = document.getElementsByClassName("index_tabs_ul")[0];
        ss.scrollLeft = 600;
      } else if (document.documentElement.scrollTop &&document.documentElement.scrollTop >= 5715 &&document.documentElement.scrollTop < 8000) {
        this.tabstes1 = false;
        this.tabstes2 = false;
        this.tabstes3 = false;
        this.tabstes4 = false;
        this.tabstes5 = false;
        this.tabstes6 = true;
        this.truemett = true;
        this.tabs = true;
        this.divHidden = true;
      } else {
        this.tabs = false;
        this.divHidden = false;
        this.truemett = false;
      }
    },
    func1() {
      document.documentElement.scrollTop = 849;
      this.tabstes1 = true;
      this.tabstes2 = false;
      this.tabstes3 = false;
      this.tabstes4 = false;
      this.tabstes5 = false;
      this.tabstes6 = false;
    },
    func2() {
      var ss = document.getElementsByClassName("index_tabs_ul")[0];
      ss.scrollLeft = 0;
      console.log(ss.scrollLeft)
      document.documentElement.scrollTop = 1815;
      this.tabstes1 = false;
      this.tabstes2 = true;
      this.tabstes3 = false;
      this.tabstes4 = false;
      this.tabstes5 = false;
      this.tabstes6 = false;
    },
    func3() {
      var ss = document.getElementsByClassName("index_tabs_ul")[0];
      ss.scrollLeft = 147;
      document.documentElement.scrollTop = 2790;
      this.tabstes1 = false;
      this.tabstes2 = false;
      this.tabstes3 = true;
      this.tabstes4 = false;
      this.tabstes5 = false;
      this.tabstes6 = false;
    },
    func4() {
      var ss = document.getElementsByClassName("index_tabs_ul")[0];
      ss.scrollLeft= 380;
      document.documentElement.scrollTop = 3765;
      this.tabstes1 = false;
      this.tabstes2 = false;
      this.tabstes3 = false;
      this.tabstes4 = true;
      this.tabstes5 = false;
      this.tabstes6 = false;
    },
    func5() {
      var ss = document.getElementsByClassName("index_tabs_ul")[0];
      ss.scrollLeft = 380;
      document.documentElement.scrollTop = 4740;
      this.tabstes1 = false;
      this.tabstes2 = false;
      this.tabstes3 = false;
      this.tabstes4 = false;
      this.tabstes5 = true;
      this.tabstes6 = false;
    },
    func6() {
      document.documentElement.scrollTop = 5715;
      this.tabstes1 = false;
      this.tabstes2 = false;
      this.tabstes3 = false;
      this.tabstes4 = false;
      this.tabstes5 = false;
      this.tabstes6 = true;
    },
    funcctict(){
      document.documentElement.scrollTop = 0;
    },
    funD(mut){
      this.name = mut
    },
    funF(mut){
      this.name = mut
    },
    funT(mut){
      this.name = mut
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showIcon);
  }
};
</script>

<style scoped>
.index_body_node {
  background: #f4f4f4;
  overflow: hidden;
  margin-bottom:1.5rem;
}
/* header */
#index_body {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  position: relative;
}
/* 合同 */
.index_hetong {
  color: #585858;
  padding: 0 0.24rem;
  position: relative;
  padding-top: 0.17rem;
  font-size: 0.22rem;
  text-align: center;
  display: block;
  height: 0.22rem;
  background-color: #fff;
}
.index_hetong span {
  font-size: 0.22rem;
  line-height: 0.22rem;
  display: inline-block;
  vertical-align: middle;
}
.index_hetong span:nth-child(2) {
  margin: 0 0.6rem;
}
.index_hetong_icon {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background: transparent url("../assets/duihao_1.png") no-repeat 50%;
  background-size: 99%;
  vertical-align: middle;
  margin-right: 0.08rem;
  position: relative;
  top: -0.02rem;
}
/* 买车商城的五个小图标 */
.index_five_fast {
  background-color: #fff;
}
.fast_index {
  padding: 0.24rem 0 0.4rem;
  display: flex;
  background: #fff;
}
.fast_img_box {
  text-align: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  flex: 1 1;
  font-size: 0;
}
/* 全部车源 */
.index_All_vehicle {
  background-color: #fff;
  width: 7.02rem;
  margin: auto;
  border-radius: 0.16rem;
  box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.02);
  margin-top: 0.24rem;
  overflow: hidden;
}
.index_All_vehicle h4 {
  font-size: 0.28rem;
  color: #262626;
  font-weight: 700;
  padding: 0.32rem 0.24rem 0;
  line-height: 1;
}
.quick-screen-right-btn {
  float: right;
  font-size: 0.26rem;
  color: #7f7f7f;
  font-weight: 400;
  line-height: 1;
}
.quick-screen-right-btn img {
  display: inline-block;
  width: 0.24rem;
  height: 0.26rem;
  margin-right: 0.06rem;
  vertical-align: bottom;
}
/* 热门车 */
.car-brand {
  overflow: hidden;
}
.car-screen-li {
  height: 0.32rem;
  line-height: 0.32rem;
  margin-top: 0.32rem;
  text-align: center;
  float: left;
  width: 25%;
  font-size: 0;
}
.car-price-a {
  color: #1b1b1b;
  font-size: 0.26rem;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
/* 带logo的车 */
.car-brand-img {
  width: 0.32rem;
  position: static;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  margin-right: 0.12rem;
  left: 20%;
  padding-bottom: 0.03rem;
}
.indexB-Bottom-btn {
  display: block;
  margin: 0.4rem auto;
  text-align: center;
  width: 6.38rem;
  height: 0.7rem;
  line-height: 0.7rem;
  background: rgba(255, 140, 0, 0.12);
  border-radius: 0.08rem;
  font-size: 0.28rem;
  font-weight: 500;
  color: #ff4800;
}
/* 今日最新 */
.index_sku_wrap {
  width: 7.02rem;
  background-color: #fff;
  box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.02);
  border-radius: 0.16rem;
  margin: 0.24rem auto;
  padding: 0.17rem 0;
  overflow: hidden;
}

/* 淘好车 */
.xin-crunchies-wrap {
  display: block;
  width: 7.02rem;
  height: 3.06rem;
  text-align: center;
  margin: 0.24rem auto 0.2rem;
  background: transparent url("../assets/haoche1.png") no-repeat 50%;
  background-size: 100%;
}
/* 价格分类 */
.idnex_tabs_wrap {
  position: relative;
  top: 0;
  z-index: 20;
  width: 100%;
  box-shadow: 0.02rem 0.06rem 0.2rem 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.index_tabs_ul {
  padding: 0.36rem 0.3rem 0.54rem 0.4rem;
  white-space: nowrap;
  font-size: 0.28rem;
  line-height: 0.28rem;
  background-color: #fff;
  overflow-x: scroll;
  overflow-y: hidden;
}
.index_tabs_li {
  margin-right: 0.4rem;
  cursor: default;
  display: inline-block;
  position: relative;
}
.tab_type_active {
  font-size: 0.32rem;
  font-weight: 500;
  color: #f85d00;
}
.tab_type_active:after {
  content: "";
  display: inline-block;
  width: 0.68rem;
  height: 0.2rem;
  background: transparent url("../assets/henggan.png") no-repeat;
  background-size: 100%;
  position: absolute;
  bottom: -0.32rem;
  left: 50%;
  margin-left: -0.34rem;
}
.index_tabs_div {
  width: 0.5rem;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0.1rem 0.9rem #fff;
}
.index_tabs_div span {
  display: inline-block;
  width: 0.28rem;
  height: 0.16rem;
  background: url("../assets/xiangxia.png") no-repeat 50%;
  background-size: 100%;
  position: absolute;
  right: 0.12rem;
  top: 48.5%;
  margin-top: -0.16rem;
}
.idnex_tabs_wrap_fixed {
  position: fixed;
}
/* 3万以下开回家 */
.index_home_bottom {
  background-color: #fff;
  overflow: hidden;
}
.index_home_title {
  background: linear-gradient(
    180deg,
    rgba(255, 208, 150, 0.4),
    hsla(0, 0%, 100%, 0.06)
  );
  position: relative;
  overflow: hidden;
  font-size: 0.36rem;
  color: #404040;
  padding: 0.37rem 0;
  text-align: center;
}
.index_home_title span {
  display: inline-block;
  font-weight: 700;
  font-size: 0.36rem;
  color: #ff4a00;
  padding: 0 0.38rem 0 0.25rem;
  background: transparent url("../assets/xiahenggan_1.png") bottom no-repeat;
  background-size: 100%;
}
.index_home_body {
  text-align: center;
  background-color: #fff;
}
.index_home_body_a {
  display: inline-block;
  width: 3.43rem;
  overflow: hidden;
  text-align: left;
  margin-bottom: 0.21rem;
  border-radius: 0.08rem;
  position: relative;
  vertical-align: middle;
}
.index_home_body_a img {
  width: 100%;
  height: 2.28rem;
  border-radius: 0.08rem;
}
.index_home_body_vido {
  display: inline-block;
  width: 100%;
  position: relative;
}
.index_home_body_vido:after {
  background: url("../assets/video_1.png") no-repeat;
  background-size: 99%;
  content: "";
  position: absolute;
  right: 0.08rem;
  bottom: 0.08rem;
  width: 0.44rem;
  height: 0.44rem;
}
.index_home_body_div {
  background: #fff;
  box-shadow: 0 0.01rem 0.2rem 0 rgba(0, 0, 0, 0.02);
  padding-top: 0.16rem;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 1.58rem;
}
.index_home_body_div_title {
  font-size: 0.28rem;
  line-height: 0.36rem;
  color: #262626;
  font-weight: 400;
  min-height: 0.68rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.index_home_body_div_money {
  margin: 0.12rem 0;
  position: relative;
}
.list-detail-price {
  color: #ff4800;
  font-size: 0.32rem;
  font-weight: 500;
  line-height: 1;
}
/* 查看更多 */
.index_home_btn {
  display: block;
  margin: auto;
  text-align: center;
  font-size: 0.28rem;
  color: #404040;
  border-radius: 0.08rem;
  padding-bottom: 0.4rem;
  padding-top: 0.05rem;
  background-color: #fff;
}
.index_home_btn img {
  display: inline-block;
  width: 0.13rem;
  height: 0.21rem;
  margin-left: 0.08rem;
}
/* 防止塌陷 */
.cockLoft-tabs-hidden-div {
  display: none;
  padding: 0.32rem 0 0.54rem 0.4rem;
  font-size: 0.32rem;
  height: 0.32rem;
}
.cockLoft_tabs_hidden_div_block {
  display: block;
}
.totop{
    position: fixed;
    bottom: 2.1rem;
    right: .2rem;
    width: 1.16rem;
    height: 1.16rem;
    background: url("../assets/xiangshang1234.png") 50% no-repeat;
    background-size: 100%;
    z-index: 4;
}
</style>
<style>
/* 豆豆新 */
.mint-swipe-indicator {
  display: inline-block;
  background-color: #fff;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  margin: 0 4px;
  opacity: 1;
}
.is-active {
  width: 0.2rem;
  border-radius: 4px;
  background-color: #fff;
}
</style>
