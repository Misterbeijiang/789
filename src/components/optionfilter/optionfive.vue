<template>
    <div class="right_option_col_6_box">
        <span class="right_option_col_6_boxtitle">
            {{title}}
        <span class="right_option_col_6_boxtitle_unit">{{more}}</span>    
        </span>
        <ul class="right_option_box">
            <li class="right_option_box_6_list js_option_list" v-for="(v,i) in bithtitle" :key="i" @click="toggletwo(i,v)" :class="{color: i == check}" >
                <span>{{v.price}}</span>            
            </li>
        </ul> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            check:-1,
            falserb:false
        }
    },
    props:{
        title:String,
        bithtitle:Array,
        more:String
    },
    methods: {
        two(){
            // console.log("sss")  
        },
        toggletwo(index,value){      
            // console.log(index)
            if(this.bithtitle[index].showme2 == false){
                this.falserb = false
            }else{
                this.falserb = true
            }
            if(index != this.check){
                this.check = index;
                this.bithtitle[index].showme2 = !this.falserb
                // console.log(this.listtitle[index].showme)
                this.$emit("toggletwo",value.price,this.bithtitle[index].showme2)
            }else{
                this.check = -1;
                this.bithtitle[index].showme2 = !this.falserb
                // console.log(this.listtitle[index].showme)
                this.$emit("toggletwo",value.price,this.bithtitle[index].showme2)
            }
            
        }
    },
}
</script>
<style scoped>
.right_option_box .color{
    background: rgba(248,93,0,.1);
    color: #F85D00 !important;
    border-color: transparent ;
}
.right_option_col_6_box{
    overflow: hidden;
    float: left;
    margin-bottom: .18rem;
}
.right_option_col_6_boxtitle{
    display: block;
    font-size: .3rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-weight: 900;
    color: #1b1b1b;
}
.right_option_box .right_option_box_6_list{
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
.right_option_box .right_option_box_6_list:nth-child(2n-1){
    margin-right: .2rem;
}
.right_option_col_6_boxtitle_unit{
    font-size: .24rem;
    color: #999999;
    font-weight: 400;
}
</style>
