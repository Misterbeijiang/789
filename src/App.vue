<template>
  <div id="app">
    <transition name="fade">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app{
      height: 100%;
      width: 100%;
      }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        font-size: 12px;
        margin: 0 auto;
        height: 100%;
        background-color: #f4f4f4;
    }
    html {
      font-family: Hiragino Sans GB,Microsoft Yahei UI,Microsoft Yahei,微软雅黑,Segoe UI,Tahoma,宋体b8b体,SimSun,sans-serif;
      -webkit-text-size-adjust: none;
      -webkit-font-smoothing: antialiased;
      font-size: 50px;
    }
    body,html {
      height: 100%;
      background-color: #ffffff;
    }  
    a {
      background: transparent;
      text-decoration: none;
      outline: none;
    } 
    li, ol, ul {
      list-style: none;
    }
    img {
      border: none;
      outline: none;
      text-decoration: none;
      display: block;
    }
    /* .fade-enter-active,.fade-leave-active{
      transition: opacity .5s;
    }
     .fade-enter,.fade-leave-active{
      opacity: 0;
    } */
.fade{
  position: absolute;left:0;right: 0;
}
.fade-enter-active {
  transition: all 1.2s ease;
}
.fade-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.fade-enter,.fade-leave-active
{
  left:0;right: 0;
  transform: translateX(600px);
  opacity: 0;
}
</style>
