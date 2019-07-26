<template>
<div>
    <div class="sellcarbottom">
        <h3>卖车问答</h3>
        <div class="pattern" >
            <a href="javascript:void(0)" class="pattern_item"  @click="add()">
                <span>1</span>
                优信卖车模式是什么？
            </a>
               <p v-if="flge">借助优信全国的网络为主找寻意向最强的买家，上门验车，即时报价，立刻打款</p>
        </div>
        <div class="pattern">
            <a href="javascript:void(0);" class="pattern_item" @click="adc()">
                <span>2</span>
                为什么选择在优信卖车
                </a>
               <p v-if="math">
                  1. 价格高：优信全国超过270个城市的买家网络，最高帮您多卖25%
                  2. 卖的快：最快当天预约，当天成交，当天付款
                  3. 透明交易：买卖交易面对面，中间环节无干扰
                </p>
        </div>
        <div class="pattern">
            <a href="javascript:void(0);" class="pattern_item" @click="adb()">
                <span>3</span>
                在优信卖车个人信息是否安全
                </a>
               <p v-if="item">优信将对您的个人信息进行全程保密，确保安全信息不泄露</p>
        </div>
        <div class="pattern">
            <a href="javascript:void(0);" class="pattern_item" @click="ada()">
                <span>4</span>
                通过哪里可以找到优信卖车
                </a>
               <p v-if="sell">登录优信二手车APP或官网www.win.com预约卖车（支持自主或电话预约服务）</p>
        </div>
        
    </div>
    <router-link to="" class="appointment_a">
        <div class="appointment">
            预约卖车
        </div>
    </router-link>
            
</div>
</template>
<script>
export default {
    data() {
        return {
            flge:false,
            math:false,
            item:false,
            sell:false
        }
    },
    methods: {
        add(){
            if(this.flge==false){
                this.flge=true
            }else{
                this.flge=false
            }
        },
        adc(){
            if(this.math == false){
                this.math = true
            }else{
                this.math = false
            }
        },
        adb(){
            if(this.item == false){
                this.item = true
            }else{
                this.item = false
            }
        },
        ada(){
            if(this.sell == false){
                this.sell = true
            }else{
                this.sell = false
            }
        }
    },
}
</script>
<style scoped>

.sellcarbottom h3{
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .38rem;
    color: #333;
    padding: 0.4rem;
}
.pattern_item{
    height: 1rem;
    line-height: 1rem;
    font-size: .3rem;
    color: #333;
    display: block;
    padding: 0 .4rem;
}
.pattern_item span{
    display: inline-block;
    font-size: .36rem;
    color: #f85d00;
    font-weight: 500;
    margin-right: .14rem;
}
.pattern p{
    background: #fafafa;
    padding: .26rem .3rem .4rem .26rem;
    margin: 0 .4rem;
    font-size: .24rem;
    color: #585858;
    line-height: .38rem;
    white-space: pre-line;
}
.appointment{
    background: linear-gradient(90deg,rgba(255,146,67,1),rgba(255,100,46,1));
    display: inline-block;
    width: 90%;
    text-align: center;
    padding: .28rem 0;
    font-size: .32rem;
    border-radius: .04rem;
    color: #fff;
    margin: 5%;
    margin-bottom: 1.5rem;
}
appointment_a{
    position: fixed;
    left: .4rem;
    right: .4rem;
    bottom: .2rem;
    z-index: 99;
}
</style>
