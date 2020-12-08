<template>
   <div class="superwash" >
       <span class="left-time" >{{hours}}:{{month}}</span>
        <div class="left" >
            <span class="left-container" >70°超强洗</span>
            <span class="left-bottom" >1时55分</span>
        </div>
       <div class="superwash-right" >
           <div  v-show="indexs==0" class="swiper" ref="move_wraper" >
            <div  class="indexsone" v-for="(item,index) in arr " :key="index" >
                <span :class=" classindex == index ? 'active': ''" >{{item.title}}</span>
            </div>
           </div>
            <div class="indexstwo"  v-show="indexs==2" >
                <span class="cunxian" >智能鲜存</span>
                <div>
                    <span v-for="(item,index) in xiancun" :key="index" >{{item}}</span>
                </div>
            </div>
            <div class="indexstwo"  v-show="indexs==3" >
                <span class="cunxian" >纳米净泡</span>
                <div>
                    <span v-for="(item,index) in  naimi" :key="index" >{{item}}</span>
                </div>
            </div>
            <div class="indexstwo"  v-show="indexs==5" >
                <span class="cunxian" >分层洗涤</span>
                <div>
                    <span v-for="(item,index) in  fencheng" :key="index" >{{item}}</span>
                </div>
            </div>
             <div class="indexstwo"  v-show="indexs==6" >
                <span class="cunxian" >预约</span>
                <div class="left" >结束时间</div>
                <div class="time-box" >
                    <!-- <Timeloop  :counts="Minutecounts"  class="minute" ></Timeloop> -->
                </div>
            </div>
       </div>
   </div>
</template>

<script>
import Timeloop from '../../components/Timeloop'
export default {
    
   data () {
      return {
            indexs:0,
            classindex:1,
            hours:0,
            month:0,
            arr:[{title:'智能投放',num:1},{title:'智能鲜存',num:2},{title:'纳米净泡',num:3},{title:'例子热烘',num:4},{title:'等曾洗涤',num:5},{title:'预约时间',num:6}],
            xiancun:['24小时','72小时','168小时','关闭'],
            naimi:['开始','关闭'],
            fencheng:['上层','全层','下层'],
            // Minutecounts: null,
            
      };
   },

   components: {
       Timeloop
   },

   computed: {},

    methods: {
        inittimes(){
            var m_arr = [];
            var ii = 0;
            for(; li < 24; ii++){
                m_arr.push(ii)
            }
            this.Minutecounts = m_arr;

        },

       control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                console.log("classindex")
                    this.classindex--;
                    this.move();
                break;
                case 39: 
                    this.classindex++;
                    this.move();
                break;
                case 13: 
                    this.click(this.arr[this.classindex].num);
                break;
                case 32:
                    this.indexs = 0;
                break;
            }
            })  
        },
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
        click(index){
            this.indexs = index;
        }
    },mounted(){
       this.control();
       this.hours =  String(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())
       this.month =  String(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
    },created(){
       // this.inittimes(); 
        console.log(this.$root)      
    }
}
</script>
<style lang='css' scoped>
    .superwash{
        display: -webkit-flex;
    }
    .superwash>div{
        height: 320px;
    }
    .superwash>div.left{
        flex: 1;
        
    }
    .superwash>div.superwash-right{
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
    /*   index two */
    .superwash-right .indexsone{
        text-align: center;
        float: left;
        line-height: 320px;
        font-size: 32px;
        width: 177px;
        
    }
    .indexsone span{
        opacity: 0.5;
    }
    .superwash-right .indexsone span.active{
        opacity: 1;
    } 
    .swiper{
        width: 6000px;
    }
    /* indexone end */
    /* indextwo start */
    .indexstwo{
        width: 100%;
        height: 320px;
        position:   relative;
        padding-left: 50px;
        box-sizing: border-box;
        font-size: 28px;
    }
    .indexstwo>.cunxian{
        position: absolute;
        top: 20px;
    }
    .indexstwo>div{
        display: -webkit-flex;
        position: absolute;
        width: 500px;
        top: 130px;
    }
    .indexstwo>div>span{
        flex: 1;
        text-align: center;
    }
    .indexstwo>.time-box{
        position: absolute;
        left: 200px;
        top: 40px;
    }
    /* indextwo end */

</style>