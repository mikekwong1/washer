<template>
   <div class="superwash" >
        <superleft></superleft>
       <div class="superwash-right" >
           <div  v-show="indexs==0" class="swiper" ref="move_wraper" >
                <div  class="indexsone" v-for="(item,index) in arr " :key="index" >
                    <span :class=" classindex == index ? 'active': ''" >{{item.title}}  </span>             
                </div>
                <div  v-show=" classindex == 1" class="savetitle" >{{savetitle}}</div>
                <span v-show=" classindex == 5"  class="appointmenttitle" >{{appointmenttime}}</span> 
           </div>
       </div>
   </div>
</template>

<script>
import superleft from '@/components/superleft.vue'
import { gettime } from "@/lib/gettime.js"
export default {
    components: {
      superleft
   },
   data () {
      return {
            
            indexs:0,
            classindex:0,
            hours:0,
            month:0,
            arr:[{title:'智能投放'},{title:'智能鲜存',num:'/savefresh'},{title:'纳米净泡',num:'/bubble'},{title:'离子热烘'},{title:'分层洗涤',num:'/layeredwashing'},{title:'预约时间',num:'/appointment'}],
            
            //选中
            pitch:false,
            savetitle :null,
            appointmenttime:null,
            // 判断进出回车按钮
            arrnull:true,
            
      };
   },

  

   computed: {},

    methods: {

        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                console.log("classindex")
                    this.classindex <=  0 ? this.classindex =  this.arr.length : this.classindex
                    if(this.arrnull){
                        this.classindex--;
                        this.move();
                    }
                    
                break;
                case 39: 
                    this.classindex >=  5 ? this.classindex =  -1  : this.classindex
                    if(this.arrnull){
                        this.classindex++;
                        this.move();
                    }
                    

                break;
                case 13: 
                    if(this.arrnull){
                        this.click(this.arr[this.classindex].num);
                    }
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
            this.$router.push(index)
        },
        getsavefresh(){
            if(localStorage.getItem("savefresharr")=="关闭"||localStorage.getItem("savefresharr")=="undefined"){
                return;
            }
            this.savetitle    = localStorage.getItem("savefresharr");
            console.log(localStorage.getItem("savefresharr"))
        },
        getsaveappointment(){            
            if(localStorage.getItem("oppointmenthours")=="undefined"||localStorage.getItem("oppointmentminute")=="undefined"||localStorage.getItem("oppointmenthours")==null ||localStorage.getItem("oppointmentminute")==null){
                return;
            }
            console.log(localStorage.getItem("oppointmenthours"),localStorage.getItem("oppointmentminute"))
            var housr = localStorage.getItem("oppointmenthours")
            var minute = localStorage.getItem("oppointmentminute")
            this.appointmenttime = housr + '时' + minute + '分'
        }
      
    },mounted(){
       this.control();
       
      
    },created(){
        this.arrnull = true
        this.getsavefresh();
        this.getsaveappointment();
        console.log(this.$root)      
    },beforeDestroy() {
        this.arrnull = false
    },
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
    .savetitle{
        color: white;
        font-size: 28px;
        position: absolute;
        bottom: 90px;
        left: 190px;
        width: 150px;
        text-align: center;
        background: green;
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
        height: 320px;
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
        width: 300px;
        height: 180px;
        left: 200px;
        top: 60px;
        overflow: hidden;
    }
    /* indextwo end */
    .minute {
        left: 17px;
    }
    .second {
        right: 17px;
    }
    .colon_hao {
        top: 50%;
        left: 50%;
        transform: translate(-55%, -50%);
        -webkit-transform: translate(-55%, -50%);
    }
    .timeloop.active{
        background: blue;
    }
    .appointmenttitle{
        color: white;
        font-size: 28px;
        position: absolute;
        bottom: 90px; 
        left: 895px;
        /* right: 20px;  */
        width: 150px;
        text-align: center;
        background: green;
    }
    
</style>