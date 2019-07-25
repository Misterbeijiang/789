<template>
  <div>
    <nav class="nav">
      <!-- 这个点击跳转首页 -->
      <a href="javascript:history.go(-1);" class="GoBack"></a>
      <span class="subTit">登录</span>
    </nav>
    <div class="banner type">
      <P class="banner_p1">购车无忧</P>
      <p class="banner_p2">优信专家提供一对一服务</p>
    </div>
    <div class="login_box">
      <div class="phone_ipt">
        <input v-model="textid" type="text" placeholder="请输入用户名" />
      </div>
      <div class="phone_ipt">
        <input v-model="pasword" type="text" placeholder="请输入密码" />
      </div>
      <div class="phone_ipt">
        <input v-model="email" type="email" placeholder="请输入邮箱" />
      </div>
      <div class="message_code">
        <input v-model="emailmde" type="number" placeholder="验证码" />
        <a href="javascript:void(0)" @click="func()"><span v-text="emailmiao" v-if="matest"></span>{{emailchongfa}}</a>
      </div>
      <a href="javascript:void(0)" class="login" @click="funb()">立即获取</a>
      <div class="footer">
        登录即视为己同意
        <a>《用户注册协议》</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      emaildata:"",
      emailmiao: 0,
      emailchongfa:"获取验证码",
      matest:false,
      timer:"",
      emailmde:"",
      textid:"",
      pasword:""
    };
  },
  methods: {
    func() {
      if(this.email !=""){
        var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
         if(!reg.test(this.email)){
	              alert(new Error('请输入有效的邮箱'));
	            }
          this.axios({
                url: "/apis/user/sendEmail?"+'name='+this.textid+'&pwd='+this.pasword+'&email='+this.email,
                methods: "get",
                // data: {
                //           'email':this.email  
                      
                // },
                emulateJSON:false
              }).then((data) => {
                console.log(data);
                this.emaildata = data.data
                if(this.emaildata ==data.data){
                  this.emailchongfa="s后重发"
                  this.matest = true
                  this.emailmiao = 120
                }else{
                  alert("请输入正确的邮箱")
                }
      });
      }else{
         alert("请输入正确的邮箱")
      }
   
    },
    funb(){
      if(this.emailmde==""){
          alert("请输入验证码")
      }else{
        console.log(this.emailmde)
       var metast=Number(this.emailmde)
        this.axios({
                url: "/apis/aDiscount?"+"carPercentId="+1,
                methods: "put",
                // user:{
                    
                //     'name':this.textid ,
                //      'pwd':this.pasword,
                //     'email':this.email,
                //     'code':this.emailmde    
                // },

                emulateJSON:true
              }).then((data) => {
                console.log(data.data)
                // if(data.data=="注册成功"){
                  // next({path:"/Bulekefu"})//跳转到目的路由
                // }
              })
      }
    },
    get(){
      if(0<this.emailmiao&&this.emailmiao<121){
        this.emailmiao --;
        console.log(this.emailmiao)
      }else if(this.emailmiao == 0){
        this.emailchongfa="发送验证码";
        this.matest=false
      }
    }
  },
  mounted(){
    this.timer =setInterval(this.get,1000)
  },
  beforeDestroy() {
      clearInterval(this.timer);
  }
};
</script>
<style scoped>
.nav {
  line-height: 0.9rem;
  background: #ffffff;
  font-size: 0.3rem;
  color: #1b1b1b;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #ebe9e9;
}
.nav .GoBack {
  position: absolute;
  top: 0.35rem;
  left: 0.3rem;
  width: 0.24rem;
  height: 0.24rem;
  display: block;
  border: solid #ff5a37;
  transform: rotate(45deg);
  border-width: 0 0 1.5px 1.5px;
}
.banner {
  background: url(https://s2.xinstatic.com/static/newcar-m/imgs/login/banner1_2d6df7f.png)
    center right no-repeat;
  background-size: auto 100%;
}
.type {
  height: 1.94rem;
  padding: 0.4rem;
}
.banner_p1 {
  position: relative;
}
.banner .banner_p1 {
  color: #585858;
  font-size: 0.36rem;
  font-weight: 700;
  display: inline-block;
}
.banner .banner_p2 {
  margin-top: 0.42rem;
  font-size: 0.28rem;
}
.banner .banner_p1::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.08rem;
  background: linear-gradient(
    90deg,
    rgba(252, 151, 0, 1) 0,
    rgba(248, 94, 0, 1) 100%
  );
  opacity: 0.5;
  bottom: -0.18rem;
}
.login_box {
  width: calc(100% - 0.8rem);
  margin: 0 auto;
  padding: 0 0.4rem 0.3rem;
  background: #ffffff;
  border-radius: 0.14rem;
  box-shadow: 0 0.06rem 0.12rem 0 rgba(228, 190, 169, 0.4);
}
.login_box .login {
  display: block;
  height: 0.88rem;
  line-height: 0.88rem;
  color: #ffffff;
  background: linear-gradient(90deg, #fc9600, #f85d00);
  text-align: center;
  border-radius: 0.44rem;
  font-size: 0.32rem;
  margin-top: 0.6rem;
}
.login_box .phone_ipt,
.login_box .message_code {
  position: relative;
  height: 1.2rem;
  font-size: 0.28rem;
}
.login_box .phone_ipt input,
.login_box .message_code input {
  border: 0;
  height: 1.2rem;
  font-size: 0.28rem;
  display: inline-block;
  background: #ffffff;
  line-height: 0.32rem;
}
.login_box .phone_ipt::after,
.login_box .message_code::after {
  content: "";
  display: block;
  width: 200%;
  border-bottom: 1px solid rgba(241, 241, 241, 1);
  bottom: 1px;
  left: 0;
  transform: scale(0.5);
  transform-origin: bottom left;
}
.login_box .message_code a {
  /* display: inline-block; */
  height: 1.2rem;
  line-height: 1.2rem;
  /* text-align: right; */
  float: right;
  font-size: 0.28rem;
  color: rgba(248, 93, 0, 1);
}
.login_box .footer {
  text-align: center;
  height: 0.84rem;
  line-height: 0.84rem;
  color: #c5c5c5;
}
.login_box .footer a {
  color: #333333;
}

</style> 
