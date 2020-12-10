<template>
  <div class="defined" >
       <span class="left-time" >12:00</span>
        <div class="left" >
            <span class="left-container" >自定义</span>
            <span class="left-bottom" >1时55分</span>
        </div>
        <div class="defined-right" >
           <div  v-show="indexs==0" class="swiper" ref="move_wraper" >
            <div  class="indexsone" v-for="(item,index) in arr " :key="index" >
                <span :class=" classindex == index ? 'active': ''" >{{item.title}}</span>
            </div>
           </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[{title:'时间'},{title:'温度'},{title:'智能投放'},{title:'分层洗涤'},{title:'纳米净泡'},{title:'智能鲜存'},{title:'时间'},{title:'智能投放'},],
            classindex:1,
            indexs:0,
        }
    },
    methods:{
         move(){
            var index = this.classindex-1;
            index = index < 0 ? 0 : index;
            index = index > this.arr.length -2 ? this.arr.length -2 :index;  
            var ed_style = -177.66*index ;
            if(this.$refs.move_wraper){
                this.$refs.move_wraper.style['transition'] = '-webkit-transform 0.3s' 
                this.$refs.move_wraper.style['-webkit-transform']  = 'translateX(' + ed_style + 'px)'
            }
            
        },
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                    this.classindex<= 0 ? this.classindex=8 : this.classindex
                    this.classindex--;
                    this.move();
                break;
                case 39: 
                    this.classindex>= 7 ? this.classindex= -1 : this.classindex
                    this.classindex++;
                    this.move();
                break;
                // case 13: 
                //     //this.click(this.arr[this.classindex].num);
                // break;
            }
            })  
        },
    },
    mounted(){
        this.control();
    }
}
</script>

<style>
    .defined{
        display: -webkit-flex;
    }
    .defined>div{
        height: 320px;
    }
    .defined>div.left{
        flex: 1;
        
    }
    .defined>div.defined-right{
        flex: 2;
        background:darkgreen;
        overflow: hidden;
        
    }
     .left-time{
        font-size: 18px;
        position: absolute;
        left: 20px;
        top: 20px;    
        font-size: 32px;
    }
    .left-container{
        position: absolute;
        left: 20px;
        top: 120px;
        font-size: 32px;
    }
    .left-bottom{
        position: absolute;
        left: 20px;
        top: 220px;
        font-size: 32px;
    }
    .swiper{
        width: 6000px;
    }
    /* indexone end */
    /* indextwo start */
    .defined-right .indexsone{
        text-align: center;
        float: left;
        line-height: 320px;
        font-size: 32px;
        width: 177px;
        
    }
    .indexsone span{
        opacity: 0.5;
    }
    .defined-right .indexsone span.active{
        opacity: 1;
    } 
    .swiper{
        width: 6000px;
    }
    /* indexone end */
</style>