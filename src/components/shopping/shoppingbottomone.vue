<template>
    <div>
    <div v-for="(v,i) in shopping" :key="i" class="item">
        <router-link to="/page"  >
            <div class="item_img">
                <span>
                    <img :src="v.imgone">
                    <img :src="v.imgtwo">
                    <img :src="v.imgthree">
                </span>
            </div>
            <div class="item_text">
                <ul class="item_li">
                    <li>{{v.text}}</li> 
                    <li>{{v.year}}</li>
                    <li>{{v.price}}</li>
                    <li class="item_span">
                        <span>一成购</span>
                        <span>{{v.down}}</span>
                        <span>{{v.monthly}}</span>
                    </li>
                </ul>
                
            </div>
                <p v-if="v.silver"  class="car-list-label">
                    <span class="label-box-box">
                        <img :src="v.yinpai">
                        <span class="label-box-silver">{{v.silver}}</span>
                        <span class="uxin-promise">{{v.retreat}}</span>
                    </span>
                </p>
                <p v-else class="label_gold">
                    <span class="label-box">
                        <span class="label-silver">{{v.gold}}</span>
                        <span class="label-promise">{{v.triduum}}</span>
                    </span>
                </p>
        </router-link>
    </div>
    <router-link to="/Bulekefu" class="enter-im-list">
    </router-link>
</div>
</template>
<script>
import Vue from 'vue'
import {Lazyload} from 'vant'
export default {
     data () {
        return {
            shopping:[
                {
                    imgone:require("../../assets/xiandai.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"丰田 RAV4 2009款 2.4 自动 豪华型四驱",
                    year:"2009年 / 13.9万公里 / 西北仓",
                    price:"6.9万",
                    down:"首付0.70万",
                    monthly:"月供1766元",
                    yinpai:require("../../assets/z-2.png"),
                    silver:"优信银牌认证",
                    retreat:"30天包退 6个月保修",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/xiandai.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"丰田 RAV4 2009款 2.4 自动 豪华型四驱",
                    year:"2009年 / 13.9万公里 / 西北仓",
                    price:"6.9万",
                    down:"首付0.70万",
                    monthly:"月供1766元",
                    yinpai:require("../../assets/z-2.png"),
                    silver:"优信银牌认证",
                    retreat:"30天包退 6个月保修",
                },

                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                {
                    imgone:require("../../assets/z-4.jpg"),
                    imgtwo:require("../../assets/cz.png"),
                    imgthree:require("../../assets/z-1.png"),
                    text:"大众 途观 2016款 1.8T 自动 300TSI风尚版前驱",
                    year:"2012年 / 8.7万公里 / 华北仓",
                    price:"9.17万",
                    down:"首付0.92万",
                    monthly:"月供2334元",
                    gold:"优信金牌认证",
                    triduum:"三天无理由",
                },
                
            ],
        }
    },
}
</script>
<style scopde>
.enter-im-list{
    position: fixed;
    bottom: 1.004rem;
    right: .18rem;
    width: 1.16rem;
    height: 1.16rem;
    background: url(//s6.xinstatic.com/u2-m-sta/media/newIm.c4075d83.png) no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.item{
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: #c5c5c5 1px solid;
    overflow: hidden;
}
.item_img{
    position: relative;
    width: 35%;
    float: left;

}
.item_img img{
    width: 2.98rem;
    height: 2.1rem;
    margin-left: .3rem;
    padding-top: .3rem;
}
.item_img img:nth-child(2n){
    width: .6rem;
    height: 1.1rem;
    position: absolute;
    top:-15px;
}
.item_img img:nth-child(3n){
    width: .6rem;
    height: .8rem;
    position: absolute;
    bottom: .08rem;
    left: 2.24rem;
}
.item_text{
    display: flex;
    width: 62%;
    margin-left: 2.9rem;
    margin-top: -.06rem;
}
.item_li{
    margin-top: .3rem;

}
.item_li li:first-child{
    padding-left: .6rem;
    font-size: .28rem;
    color: #1b1b1b;
    padding-bottom: .06rem; 
}
.item_li li:nth-child(2n){
    color: #999;
    font-size: .25rem;
    padding-left: .6rem;
    padding-bottom: .1rem;
}
.item_li li:nth-child(3n){
    padding-left: .6rem;
    font-size: .3rem;
    color: #333;
}
.item_span{
    width: 100%;
    margin-left: .04rem;
    padding-top: .04rem;
}
.item_span span:first-child{
    display: inline-block;
    text-align: center;
    width: .8rem;
    border-radius: 1px;
    background: #f85d00;
    color: #fff;
    font-size: .18rem;
    overflow: hidden;
    margin-bottom: -.02rem
}
.item_span span:nth-child(2n){
        color: #f85d00;
        font-size: .26rem;
        font-weight: 500;
        margin-right: .06rem;
}
.item_span span:nth-child(3n){
        color: #f85d00;
        font-size: .26rem;
        font-weight: 500;
        margin-right: .06rem;
}
.label-box-box img{
        width: .2rem;
        display: inline-block;
        position: absolute;
        left: .08rem;
        top: .2rem
}
.car-list-label{
    display: block;
    width: 50%;
    border-top: 1px solid #999;
    margin-left: 3.6rem;
    margin-top: .1rem;
    padding-top: .2rem;
    position: relative;
    font-size: .04rem;
    color: #999;
    margin-bottom: .1rem;
}
.label-box-silver::before{
    border: 1px solid #afb6c5;
    content: "";
    position: absolute;
    top: 0;
    left: -1.9rem;
    width: 200%;
    height: .56rem;
    border-radius: .08rem;
    transform: scale(.5);
}
.label-box-silver{
    padding-left: .38rem;
}

.uxin-promise::before{
    display: inline-block;
    content: "|";
    margin-right: .14rem;
    margin-left: .1rem;
}
label-box-silver::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 196%;
    height: .56rem;
    border-radius: .08rem;
}
.label_gold{
    width: 50%;
    font-size: .18rem;
    border-top: #afb6c5 1px solid;
    padding-top: .1rem;
    margin-left: 3.6rem;
}
.label-silver{
    border: #e0c189 1px solid;
    color: #e0c189;
    
}
.label-silver::before{
    content: "";
    display: inline-block;
    position: relative;
    top: .04rem;
    width: .22rem;
    height: .22rem;
    background: url(//s1.xinstatic.com/u2-m-sta/media/gold-icon.6662c4cf.png) no-repeat;
    background-size: 99%;
    margin-right: .08rem;
    color: #e0c189;

}
.label-promise{
    color: #abd5ff;
    border: #abd5ff 1px solid;
}
</style>
