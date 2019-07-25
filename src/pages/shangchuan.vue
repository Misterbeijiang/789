<template>
	<div>
		<Head title="上传图片"></Head>
        <div class="push">
            <input type="file" class="push-inp" value="选择图片"  multiple="multiple">
            <!-- <span>选择图片</span> -->
            <span class="push-sp2">上传</span>
        </div>
        <div class="fanhui">
            <router-link to class="linkto">返回首页</router-link>
        </div>  
	</div>
</template>

<script>
    // import Head from "../components/head/head"
    const Head = () => import("../components/head/head")
	export default{
		components:{
			Head
		}
	}
</script>
	
<style scoped>
.push{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    padding: 0 15px;
}
.push-inp{
    margin-top:9px;
    width: 60%;
    height: 20px;
}
.push span:nth-child(2){
    border-radius: 5px;
    margin: 10px 10px 0;
    color: white;
    line-height: 20px;
    text-align: center;
    float: left;
    display: block;
    width: 20%;
    background: #ff5a37;
    height: 20px;
    
}
.push-sp2{
     color: white;
    border-radius: 5px;
    width: 10%;
    height:20px;
    
    line-height: 20px;
    text-align: center;
    float: left;
    margin:10px 10px 0 0;
    display: block;
    background: #ff5a37;
    
}
.linkto{
    display: inline-block;
    margin: 80px 35%;
    text-decoration: none;
    width: 100px;
    height: 25px;
    text-align: center;
    font-size: 18px;
    background: #ff5a37;
    border-radius: 5px;
    color: white;

}
.fanhui{
    width: 100%;
}
</style>