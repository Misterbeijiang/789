<template>
    <div class="bodyB">
        <ul class="left">
            <li class="left_class_list" v-for="(v,i) in arr" :key="i" @click="toggle(i)" :class="{'left_class_active': i == checkindex}">{{v.classift}}</li>
        </ul>
        <div class="height_class_list_footer">
            <span class="height_class_list_footer_cz" @click="chong" >重置</span>
            <span class="height_class_list_footer_zong" @click="zong">共{{gong}}辆车</span>
        </div>
        <div class="right" @scroll="onScroll">
            <!-- 品牌 -->
            <div class="right_class_pp scroll-item">
                品牌
                <span class="right_class_pp_bx right_class_pp_right_bx">
                    <router-link to="/brand" style="color:#cccccc">{{titleName}}</router-link>
                </span>
            </div> 
            <!-- 价格 -->
            <Optionkuai class="js-filter-price scroll-item" :listtitle="price" :title="prices"  @togglegf="funa" ref='myBox'></Optionkuai>
            <!-- 自定义价格 -->
            <div class="right_class_pp_zdyjg right_class_pp_right_zdyjg scroll-item">
                <span class="right_class_pp_zdyjg_title">
                    <span>自定义价格</span>
                    <span class="right_class_pp_zdyjg_title_dw">(万)</span>
                    <span class="right_class_pp_zdyjg_title_ramout" v-if="falser">{{info}}</span>
                    <Sider :valueFun="Val()" :min="0" :max="100"></Sider>
                    <div class="right_class_pp_zdyjg_title_num">
                        <span>0</span>
                        <span>10</span>
                        <span>20</span>
                        <span>30</span>
                        <span>40</span>
                        <span>50</span>
                        <span>无限</span>
                    </div>
                </span>
            </div>
            <!-- 首付 -->
            <Optionfourkuai class="js-filter-price scroll-item" :fucktitle="putdown" :title="putdowns" @toggleone="funb" ref='myBox1'></Optionfourkuai>
            <!-- 自定义首付 -->
            <div class="right_class_pp_zdyjg right_class_pp_right_zdyjg scroll-item">
                <span class="right_class_pp_zdyjg_title">
                    <span>自定义首付</span>
                    <span class="right_class_pp_zdyjg_title_dw">(万)</span>
                    <span class="right_class_pp_zdyjg_title_ramout" v-if="falsers">{{twoinfo}}</span>
                    <Sider :value-fun="Val" :min="0" :max="100"></Sider>
                    <div class="right_class_pp_zdyjg_title_num">
                        <span>0</span>
                        <span>2</span>
                        <span>4</span>
                        <span>6</span>
                        <span>8</span>          
                        <span>无限</span>
                    </div>
                </span>
            </div>
            <!-- 月供 -->
            <Optionfivekuai class="js-filter-price scroll-item" :bithtitle="monthly" :title="monthlys" @toggletwo="func" ref='myBox2'></Optionfivekuai>
            <!-- 自定义月供 -->
            <div class="right_class_pp_zdyjg right_class_pp_right_zdyjg scroll-item">
                <span class="right_class_pp_zdyjg_title">
                    <span>自定义月供</span>
                    <span class="right_class_pp_zdyjg_title_dw">(千)</span>
                    <span class="right_class_pp_zdyjg_title_ramout" v-if="falserb">{{threeinfo}}</span>
                    <Sider :value-fun="Val" :min="0" :max="100"></Sider>
                    <div class="right_class_pp_zdyjg_title_num">
                        <span>0</span>
                        <span>2</span>
                        <span>4</span>
                        <span>6</span>
                        <span>8</span>          
                        <span>无限</span>
                    </div>
                </span>
            </div>
            <!-- 车型 -->
            <div class="right_option_col_2_box scroll-item">
                <span class="right_option_col_2_boxtitle">车型</span>
                <ul class="right_option_box">
                    <li class="right_option_box_2_list js_option_list" v-for="(v,i) in car" :key="i">
                        <img :src="v.imgurl">
                        <span>{{v.title}}</span>        
                    </li>
                </ul> 
            </div>
            <!-- 车源类型 -->
            <Optionkuai class="js-filter-price scroll-item" :listtitle="type" :title="types" :more="mores"></Optionkuai>
            <!-- 变速箱 -->
            <Optionkuai class="js-filter-price scroll-item" :listtitle="gearbox" :title="gearboxs"></Optionkuai>
            <!-- 车龄 -->
             <div class="right_class_pp_zdyjg right_class_pp_right_zdyjg scroll-item">
                <span class="right_class_pp_zdyjg_title">
                    <span>车龄</span>
                    <span class="right_class_pp_zdyjg_title_dw">(年)</span>
                    <Sider :value-fun="Val" :min="0" :max="100"></Sider>
                    <div class="right_class_pp_zdyjg_title_num">
                        <span>0</span>
                        <span>2</span>
                        <span>4</span>
                        <span>6</span>   
                        <span>无限</span>
                    </div>
                </span>
            </div>
            <!-- 里程 -->
            <div class="right_class_pp_zdyjg right_class_pp_right_zdyjg scroll-item">
                <span class="right_class_pp_zdyjg_title">
                    <span>里程</span>
                    <span class="right_class_pp_zdyjg_title_dw">(万公里)</span>
                    <Sider :value-fun="Val" :min="0" :max="100"></Sider>
                    <div class="right_class_pp_zdyjg_title_num">
                        <span>0</span>
                        <span>3</span>
                        <span>6</span>
                        <span>9</span>
                        <span>12</span>          
                        <span>无限</span>
                    </div>
                </span>
            </div>
            <!-- 排量 -->
            <div class="right_class_pp_zdyjg right_class_pp_right_zdyjg scroll-item">
                <span class="right_class_pp_zdyjg_title">
                    <span>排量</span>
                    <span class="right_class_pp_zdyjg_title_dw">(L)</span>
                    <Sider :value-fun="Val" :min="0" :max="100"></Sider>
                    <div class="right_class_pp_zdyjg_title_num">
                        <span>0</span>
                        <span>1.0</span>
                        <span>2.0</span>
                        <span>3.0</span>
                        <span>4.0</span>          
                        <span>无限</span>
                    </div>
                </span>
            </div>
            <!-- 发动机 -->
            <Optionthreekuai class="js-filter-price scroll-item" :listtitle="engine" :title="engines"></Optionthreekuai>
            <!-- 排放标准 -->
            <Optionkuai class="scroll-item js-filter-price" :listtitle="emission" :title="emissions"></Optionkuai>
            <!-- 颜色 -->
            <Optioncolor class="scroll-item"></Optioncolor>
            <!-- 燃料类型 -->
            <Optionthreekuai class="js-filter-price scroll-item" :listtitle="Fueltype" :title="Fueltypes"></Optionthreekuai>
            <!-- 厂商类型 -->
            <Optionkuai class="js-filter-price scroll-item" :listtitle="genre" :title="genres"></Optionkuai>
            <!-- 座位数 -->
            <Optionkuai class="js-filter-price scroll-item" :listtitle="seating" :title="seatings"></Optionkuai>
            <!-- 国别 -->
            <Optionthreekuai class="js-filter-price scroll-item" :listtitle="nationality" :title="nationalitys"></Optionthreekuai>
            <!-- 驱动 -->
            <Optionthreekuai class="js-filter-price scroll-item" :listtitle="drive" :title="drives"></Optionthreekuai>
            <!-- 配置亮点 -->
            <Optionkuai class="js-filter-price scroll-item" :listtitle="configuration" :title="configurations" :more="mores"></Optionkuai>
        </div> 
    </div>
</template>
<script>

const Optioncolor = () => import("../optionfilter/optioncolor")
const Optionthreekuai = () => import("../optionfilter/optionthreekuai")
const Optionkuai = () => import("../optionfilter/optionkuai")
const Optionfourkuai = () => import("../optionfilter/optionfourkuai")
const Optionfivekuai = () => import("../optionfilter/optionfive")
const Sider = () => import("../optionfilter/slider")

export default {
    props:{
        listtitle:Array,
        fucktitle:Array
    },
    data() {
        return {
            value1: 50,
            mores:"（多选）",
            prices:"价格",
            putdowns:"首付",
            monthlys:"月供",
            types:"车源类型",
            gearboxs:"变速箱",
            engines:"发动机",
            emissions:"排放标准",
            Fueltypes:"燃料类型",
            genres:"厂商类型",
            seatings:"座位数",
            nationalitys:"国别",
            drives:"驱动",
            configurations:"配置亮点",
            checkindex:0,
            valure:0,
            info:"",
            twoinfo:"",
            threeinfo:"",
            falser:false,
            falsers:false,
            falserb:false,
            gundong:0,
            gong:"",
            lengths:"",
            titleName:this.$route.params.id,
            arr :[
                {"classift":"品牌"},
                {"classift":"价格"},
                {"classift":"首付"},
                {"classift":"月供"},
                {"classift":"车型"},
                {"classift":"车源类型"},
                {"classift":"变速箱"},
                {"classift":"年龄"},
                {"classift":"里程"},
                {"classift":"排量"},
                {"classift":"发动机"},
                {"classift":"排放标准"},
                {"classift":"颜色"},
                {"classift":"燃料类型"},
                {"classift":"厂商类型"},
                {"classift":"座位数"},
                {"classift":"国别"},
                {"classift":"驱动"},
                {"classift":"配置亮点"},
            ],
            price:[
                {"price":"5万以下","showme":false},
                {"price":"5-10万","showme":false},
                {"price":"10-15万","showme":false},
                {"price":"15-20万","showme":false},
                {"price":"20-30万","showme":false},
                {"price":"30-50万","showme":false},
                {"price":"50万以上","showme":false},             
            ],
            putdown:[
                {"price":"0-1万","showme1":false},
                {"price":"1-3万","showme1":false},
                {"price":"3-5万","showme1":false},
                {"price":"5-10万","showme1":false},
                {"price":"10万以上","showme1":false},
            ],
            monthly:[
                {"price":"0-2千","showme2":false},
                {"price":"2-5万","showme2":false},
                {"price":"5-8万","showme2":false},
                {"price":"8千-1万","showme2":false},
                {"price":"1万以上","showme2":false},
            ],
            car:[
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-sanxiang.png","title":"三厢轿车"},
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-suv.png","title":"SUV"},
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-liangxiang.png","title":"两厢轿车"},
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-mvp.png","title":"MVP"},
                {"imgurl":"https://c4.xinstatic.com/f3/20180711/1609/5b45bb2a3be56660508.png","title":"旅行车"},
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-paoche.png","title":"跑车"},
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-mianbao.png","title":"面包车"},
                {"imgurl":"https://s1.xinstatic.com/m/img/carshape-pika.png","title":"皮卡"},     
            ],
            type:[
                {"price":"一成购"},
                {"price":"分期购"},
                {"price":"视频检测"},
                {"price":"超值"},
                {"price":"优信金牌认证"},
                {"price":"优信银牌认证"},
                {"price":"VR车源"},
            ],
            gearbox:[
                {"price":"手动档"},
                {"price":"自动挡"},
            ],
            engine:[
                {"price":"自然吸气"},
                {"price":"涡轮增压"},
                {"price":"机械增压"},
                {"price":"电动"},
                {"price":"混合动力"},
            ],
            emission:[
                {"price":"国三及以上"},
                {"price":"国四及以上"},
                {"price":"国五及以上"},
                {"price":"国六"},
            ],
            Fueltype:[
                {"price":"汽油"},
                {"price":"柴油"},
                {"price":"电动"},
                {"price":"油电混合"},
            ],
            genre:[
                {"price":"合资"},
                {"price":"进口"},
                {"price":"国产"},
            ],
            seating:[
                {"price":"2座"},
                {"price":"4座"},
                {"price":"5座"},
                {"price":"6座"},
                {"price":"7座及以上"},
            ],
            nationality:[
                {"price":"德国"},
                {"price":"日本"},
                {"price":"韩国"},
                {"price":"美国"},
                {"price":"法国"},
                {"price":"中国"},
            ],
            drive:[
                {"price":"前驱"},
                {"price":"后驱"},
                {"price":"四驱"},
            ],
            configuration:[
                {"price":"座椅按摩"},
                {"price":"记忆后视镜"},
                {"price":"座椅通风"},
                {"price":"全息影像"},
                {"price":"无钥匙进入"},
                {"price":"自动泊车"},
                {"price":"并线辅助"},
                {"price":"电动后备箱"},
                {"price":"全景天窗"},
                {"price":"后独立空调"},
                {"price":"自动驻车"},
                {"price":"座椅记忆"},
                {"price":"感应雨刷"},
                {"price":"运动座椅"},
                {"price":"电动方向盘"},
                {"price":"方向盘换档"},
                {"price":"座椅加热"},
                {"price":"定速巡航"},
                {"price":"电动折叠后视镜"},
                {"price":"胎压检测"},
                {"price":"无钥匙启动"},
                {"price":"电动座椅"},
                {"price":"倒车影像"},
                {"price":"中控屏"},
                {"price":"后倒车雷达"},
                {"price":"自动空调"},
                {"price":"多功能方向盘"},
            ]
        }
    },
    methods: {
        toggle(index){
            this.checkindex = index;
            console.log(index)

            let target = document.querySelector('.left')
            let scrollItems = document.querySelectorAll('.scroll-item')
            // 判断滚动条是否滚动到底部
            if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
                this.gundong  = index
            }
            let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
            let distance = document.querySelector('.right').scrollTop // 滚动条距离滚动区域顶部的距离
            // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
        },   
        onScroll (e) {
            let scrollItems = document.querySelectorAll('.scroll-item')
            for (let i = scrollItems.length - 1; i >= 0; i--) {
                // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
                let judge = e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop
                if (judge) {    
                    this.checkindex  = i
                    break
                }
            }
        },
        Val(i){
            // console.log(i)
            // console.log("sss")   
        },
        funa(data,caos){
            console.log(caos)
            if(this.falser == false){
                this.falser = caos
            }else{
                this.falser = caos
            }
            this.info = data
            console.log(this.info)
            
        },
        funb(data,caos){
            console.log(caos)
            if(this.falser == false){
                this.falsers = caos
            }else{
                this.falsers = caos
            }
            this.twoinfo = data,
            console.log(this.twoinfo)
        },
        func(data,caos){
            console.log(caos)
            if(this.falserb == false){
                this.falserb = caos
            }else{
                this.falserb = caos
            }
            this.threeinfo = data,
            console.log(this.threeinfo)
        },
        zong(){
            this.axios({
                url:"/apis/choose?"+"carPriceRange="+this.info+"&carFirstPay="+this.twoinfo+"&carMonthPay"+this.threeinfo,
                methods:"get"
            }).then((data)=>{
                console.log(data)
                this.length = data
            })
        },
        chong(){
            // console.log("sss")
            for(var i=0;i<this.price.length;i++){
                this.$refs.myBox.$el.childNodes[2].childNodes[i].className = "right_option_box_2_list js_option_list";
                this.price[i].showme = false
                if(this.price[i].showme == true){
                    this.price[i].showme=false
                }
            }
            for(var i=0;i<this.putdown.length;i++){
                this.$refs.myBox1.$el.childNodes[2].childNodes[i].className = "right_option_box_5_list js_option_list";
                this.putdown[i].showme1 = false
                if(this.putdown[i].showme1 == true){
                    this.putdown[i].showme1 =false
                }
            }
            for(var i=0;i<this.monthly.length;i++){
                this.$refs.myBox2.$el.childNodes[2].childNodes[i].className = "right_option_box_6_list js_option_list";
                this.monthly[i].showme2 = false
                if(this.monthly[i].showme2 == true){
                    this.monthly[i].showme2=false
                }
            }
            this.falser = false;
            this.falsers =false;
            this.falserb = false;
        }
    },
    created() {
        console.log(this.titleName)
        this.axios({
            url:"/apis/getCount",
            methods:"get"
        }).then((data)=>{
            console.log(data.data.queryResult.total)
            this.gong = data.data.queryResult.total
            // this.gong = this.length
            console.log(this.gong)
        })
    },
    components:{
        Optionkuai,
        Sider,
        Optionthreekuai,
        Optioncolor,
        Optionfourkuai,
        Optionfivekuai
    }
}
</script>
<style scoped>
.bodyB{
    height: calc(100% - 1.78rem);
    background: #fff;
    width: 100%;
    overflow: hidden;
}
.left{
    float: left;
    width: 1.76rem;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling:touch;
}
.right{
    float: right;
    height: 100%;
    padding-left: .3rem;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    width: calc(100% - 1.76rem);
    -webkit-overflow-scrolling:touch;
}
.right .right_class_pp{
    font-size: .3rem;
    color: #1b1b1b;
    font-weight: 700;
    padding: .2rem .3rem .2rem 0;
    border-bottom: 1px solid #eeeeee;
    line-height: .7rem;
}
.right .right_class_pp .right_class_pp_bx{
    position: relative;
    max-width: 70%;
}
.right .right_class_pp .right_class_pp_right_bx{
    float: right;
    color: #c4c4c4;
    font-weight: 400;
    font-size: .28rem;
}
.right .right_class_pp .right_class_pp_bx::after{
    display: inline-block;
    content: "";
    width: 6px;
    height: 6px;
    border:solid #999999;
    border-width: 0 0 1px 1px;
    top:calc(50% - 4px);
    right: 1px;
    transform: rotate(-135deg);
}
.left .left_class_list{ 
    /* width: calc(100% - .36rem); */
    color: #585858;
    font-size: .26rem;
    padding: .23rem 0 .21rem .36rem;
    position: relative;
    line-height: .44rem;
    background: #f9f9f9;
}
.left .left_class_active{
    color: #1b1b1b;
    background: #ffffff;
}
.right_class_pp_zdyjg{
    float: left;
    width: 100%;
    padding-right: .3rem;
}
.right_class_pp_zdyjg .right_class_pp_zdyjg_title{
    font-size: .3rem;
    height: 1.1rem;
    line-height: 1.1rem;
    margin-bottom: .2rem;
    color: #1b1b1b;
    font-weight: 900;
}
.right_class_pp_zdyjg .right_class_pp_zdyjg_title_dw{
    font-size: .24rem;
    color: #999999;
    font-weight: 400;
}
.right_class_pp_zdyjg_title_num{
    width: 100%;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: space-between;
}
.right_class_pp_zdyjg .right_class_pp_zdyjg_title_ramout{
    float:right;
    font-size: .28rem;
    font-weight: 400;
    color: #f85d00;
    /* padding-right: .3rem; */
}
.right_class_pp_zdyjg .right_class_pp_zdyjg_title .right_class_pp_zdyjg_title_num span{
    display: inline-block;
    color: #b7b7b7;
    font-size: .24rem;
    font-style: normal;
}
.height_class_list_footer{
    display: flex;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    font-size: .32rem;
}
.right_option_col_2_box{
    overflow: hidden;
    float: left;
    margin-bottom: .18rem;
}
.right_option_col_2_boxtitle{
    display: block;
    font-size: .3rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-weight: 900;
    color: #1b1b1b;
}
.right_option_box_2_list img{
    display: block;
    width: 1.6rem;
    height: .58rem;
    margin: 0 auto;
}
.right_option_box .right_option_box_2_list{
    float: left;
    width: 2.4rem;
    border:1px solid #eeeeee;
    border-radius: 4px;
    text-align: center;
    line-height: .38rem;
    padding: .17rem 0 .13rem;
    color: #585858;
    font-size: .28rem;
    margin-bottom: .2rem;
}
.right_option_box .right_option_box_2_list:nth-child(2n-1){
    margin-right: .2rem;
}
.height_class_list_footer{
    height: .88rem;
    line-height: .88rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: .32rem;
    z-index: 20;
}
.height_class_list_footer_cz{
    width: 2.5rem;
    color: #f85d00;
    background: #ffffff;
    text-align: center;
    float: left;
}
.height_class_list_footer_zong{
    background: linear-gradient(90deg,rgba(252,150,0,1),rgba(248,93,0,1));
    text-align: center;
    color: #ffffff;
    width: calc(100% - 2.5rem);
    float: right;
}
</style>
