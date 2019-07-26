<template>
<div class="item" v-show="bool">
    <div class="item_c">
        <div class="item_a">
            
        </div>
        <div class="item_b">
            
            <div class="item_d">
                <p class="item_e">车况自评</p>
                <router-link to="./home">
                    <p class="item_f" @click="fun()">x</p>
                </router-link>
                
            </div>
            <div class="item_g">
                <h4>碰撞描述</h4>
                <span>从未有过碰撞</span>
                <span>轻微碰撞</span>
                <span>碰撞伤及骨架</span>
            </div>
            <br>
            <div class="item_g">
                <h4>外观描述</h4>
                <span>从未有损伤</span>
                <span>剐蹭/划痕可见</span>
                <span>剐蹭划伤已修复</span>
            </div>
            <br>
            <div class="item_g">
                <h4>其他描述</h4>
                <span>有过水泡</span>
                <span>有过火烧</span>
               
            </div>
            <div class="item_h">确定</div>

        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            bool:true
        }
    },
    methods: {
        fun(){
            this.bool = !this.bool            
        }
    },
}
</script>
<style scoped>
    

    .item_c{
        margin-left:-76%;
        height: 100%;
        font-family: "kaiti"
    }
    .item_a{
        width: 100%;
        height: 40%;
        background-color: black;
        position: fixed;
        opacity: .5;
        top:0;
        left: 0;
    }
    .item_b{
        width: 100%;
        height: 60%;
        /* border:1px solid red; */
        position: fixed;
        bottom:0;
        left: 0;
        background-color: #fff;
    }
    .item_d{
        width: 100%;
        height: 50px;
        float: left;
        /* border:1px solid red; */
    }
    .item_e{
        float: left;
        width: 87%;
        text-align: center;
        line-height: 50px;

    }
    .item_f{
        width: 10%;
        height: 50px;
        float: right;
        /* padding-right: 10%; */
        line-height: 50px;
        text-align: center;
        
    }
    .item_g{
        width: 100%;
        height: 100px;
        float: left;

    }
    h4{
        height: 40px;
        margin-left:5%;
        margin-top:5px;
        margin-bottom:5px;
        line-height: 40px;
    }
    span{
        display: flex;
        padding:0 2%;
        line-height: 30px;
        border:1px solid #ccc;
        float: left;
        margin-left:5%;
        font-size: 14px;
    }
    .item_h{
        width: 100%;
        height: 40px;
        background-color: #fb8100;
        float: left;
        text-align: center;
        line-height: 40px;
    }
</style>