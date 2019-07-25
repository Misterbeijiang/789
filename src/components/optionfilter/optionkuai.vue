<template>
    <div class="right_option_col_2_box">
        <span class="right_option_col_2_boxtitle">
            {{title}}
        <span class="right_option_col_2_boxtitle_unit">{{more}}</span>    
        </span>
        <ul class="right_option_box">
            <li class="right_option_box_2_list js_option_list" v-for="(v,i) in listtitle" :key="i" @click="togglegf(i,v)" :class="{color: i == checkindex}" >
                <span>{{v.price}}</span>            
            </li>
        </ul> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            checkindex:-1,
            blues:false
        }
    },
    props:{
        title:String,
        listtitle:Array,
        more:String
    },
    methods: {
        two(){
            // console.log("sss")  
        },
        togglegf(index,value){      
            // console.log(index)
            for(let i=0 ; i<this.listtitle.length;i++){
                if(this.listtitle[index].showme == false){
                    this.blues = false
                    // console.log(this.blues)
                }else{
                    this.blues = true
                    // console.log(this.blues)
                }
            }
            if(index != this.checkindex){
                this.checkindex = index;
                this.listtitle[index].showme = !this.blues
                // console.log(this.listtitle[index].showme)
                this.$emit("togglegf",value.price,this.listtitle[index].showme)
            }else{
                this.checkindex = -1;
                this.listtitle[index].showme = !this.blues
                // console.log(this.listtitle[index].showme)
                this.$emit("togglegf",value.price,this.listtitle[index].showme)
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
.right_option_col_2_boxtitle_unit{
    font-size: .24rem;
    color: #999999;
    font-weight: 400;
}

</style>
