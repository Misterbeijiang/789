<template>
    <div class="body">
        <nav class="nav">
            <!-- 这个点击跳转首页 -->
            <router-link to="#" class="GoBack"></router-link>
            <span class="subTit">登录</span>
        </nav>
        <div class="banner type">
            <P class="banner_p1">购车无忧</P>
            <p class="banner_p2">优信专家提供一对一服务</p>
        </div>
        <div class="login_box">
            <div class="phone_ipt">
                <input type="text" placeholder="手机号码">
            </div>
            <div class="message_code">
                <input type="text" placeholder="密码">
                <!-- <a href="#">获取验证码</a> -->
            </div>
            <a href="javascript:void(0)" class="login">立即登录</a>
            <router-link to="./zhao">
                <span>找回密码</span>
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
.body{
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(top,#FFF8F2,#fff);
}
.nav{
    line-height: .9rem;
    background: #ffffff;
    font-size: .3rem;
    color: #1b1b1b;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ebe9e9;
}
.nav .GoBack{
    position: absolute;
    top: .35rem;
    left: .3rem;
    width: .24rem;
    height: .24rem;
    display: block;
    border:solid #ff5a37;
    transform: rotate(45deg);
    border-width: 0 0 1.5px 1.5px;
}
.banner{
    background: url(https://s2.xinstatic.com/static/newcar-m/imgs/login/banner1_2d6df7f.png)center right no-repeat;
    background-size: auto 100%;
}
.type{
    height: 1.94rem;
    padding: .4rem;
}
.banner_p1{
    position: relative;
}
.banner .banner_p1{
    color: #585858;
    font-size: .36rem;
    font-weight: 700;
    display: inline-block;
}
.banner .banner_p2{
    margin-top: .42rem;
    font-size: .28rem;
}
.banner .banner_p1::after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: .08rem;
    background: linear-gradient(90deg,rgba(252,151,0,1) 0,rgba(248,94,0,1) 100%);
    opacity: .5;
    bottom: -.18rem;
}
.login_box{
    width: calc(100% - .8rem);
    margin: 0 auto;
    padding: 0 .4rem .3rem;
    background: #ffffff;
    border-radius: .14rem;
    box-shadow: 0 0.06rem 0.12rem 0 rgba(228,190,169,.4);
}
.login_box .login{
    display: block;
    height: .88rem;
    line-height: .88rem;
    color: #ffffff;
    background: linear-gradient(90deg,#FC9600,#F85D00);
    text-align: center;
    border-radius: .44rem;
    font-size: .32rem;
    margin-top: .6rem;
}
.login_box .phone_ipt,
.login_box .message_code{
    position: relative;
    height: 1.2rem;
    font-size: .28rem;
}
.login_box .phone_ipt input,
.login_box .message_code input{
    border: 0;
    height: 1.2rem;
    font-size: .28rem;
    display: inline-block;
    background: #ffffff;
    line-height: .32rem;

}
.login_box .phone_ipt::after,
.login_box .message_code::after{
    content: "";
    display: block;
    width: 200%;
    border-bottom: 1px solid rgba(241,241,241,1);
    bottom: 1px;
    left: 0;
    transform: scale(.5);
    transform-origin: bottom left;
}
.login_box .message_code a{
    /* display: inline-block; */
    height: 1.2rem;
    line-height: 1.2rem;
    /* text-align: right; */
    float: right;
    font-size: .28rem;
    color: rgba(248,93,0,1);
}
.login_box span{
    /* float:right; */
    line-height: 1rem;
    margin-left:4.7rem;
}

</style> 
