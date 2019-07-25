<template>
  <div id="app">
    <router-view/>
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
</style>
