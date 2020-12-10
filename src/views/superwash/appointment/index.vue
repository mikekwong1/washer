<template>
  <div class="appointment" >
      <superlfet></superlfet>
      <div class="appointment-right" >
        <span class="cunxian" >预约</span>
        <div class="left" >结束时间</div>
        <div class="time-box" >
            <!-- <Colon class="colon_hao">:</Colon> -->
            <TimeHour
                key="'mi'"
                :counts="Minutecounts"
                class="minute timeloop"
                :class=" timpindex[active] == timpindex[0] ? 'active' : '' "
                :timpindex ="timpindex[active] "
                :active_i="h"
                :pitch="pitch"
                :ActiveIndex="ActiveIndex"
                @loop1="loop1"
                @loop2="loop2"
                @loop3="loop3"
            ></TimeHour>
                <span class="time" >时</span>
            <TimeMinute
                key="'si'"
                :counts="Secondcounts"
                class="second timeloop"
                :class=" timpindex[active] == timpindex[1] ? 'active' : '' "
                :timpindex ="timpindex[active] "
                :active_i="m"
                :pitch="pitch"
                @loop1="loop1"
                @loop2="loop2"
                @loop3="loop3"
            ></TimeMinute>
            <span class="fen" >分</span>
        </div>
      </div>
  </div>
</template>

<script>
import Colon from '@/components/colon.vue'
import superlfet from '@/components/superleft.vue'
import TimeHour from '@/components/TimeHour.vue'
import TimeMinute from '@/components/TimeMinute.vue'
export default {
    components:{
        superlfet,TimeHour,Colon,TimeMinute
    },
    data(){
      return{
        timpindex:[0,1],
        active:0,
        Minutecounts:null,
        Secondcounts:null,
        m:0,
        h:0,
        pitch:false,
        bright:true,
        ActiveIndex:0,
        getHourNum: null, //获取当前设置小时
        isTime: false, //是否是时间页面设置的小时与分钟
      }
    },
    watch:{
    },
    methods: {
        // 时间start
        inittimes(){
                var m_arr = [];
                var s_arr = [];
                var ii = 0;
                var ir = 0
                for (; ii <= 24; ii++) {
                    m_arr.push(ii)
                }
                for (; ir < 60; ir++) {
                    s_arr.push(ir)
                }
                this.Minutecounts = m_arr;
                this.Secondcounts = s_arr;
        },
        loop1(msg) {
            // 设置分钟
            this.m = msg;
        },
        loop2(msg) {
            // 设置小时
            this.h = msg;
        },
        loop3(msg) {
            console.log('loop3')
            console.log(msg)
        },
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                console.log("this.active",this.active)
                    
                    if(!this.pitch){
                        this.active<=0 ? this.active =2 : this.active
                        this.active--;
                    }
                break;
                case 39: 
                console.log("this.active",this.active)
                   
                    if(!this.pitch){

                        this.active++;
                        this.active>=2 ? this.active = 0 : this.active
                    }
                     
                break;
                case 13: 
                  if(this.bright){
                    this.pitch = !this.pitch;
                    // 存储
                        localStorage.setItem("appointment", )
                  }   
                break;
            }
            })  
        },
    },mounted(){
       this.control();
    },created () {
      this.inittimes();
      this.bright = true;
    },
    destroyed(){
      this.bright = false;
    }
}
</script>

<style>
    .appointment{
        display: -webkit-flex;
    }
    .appointment>div{
        height: 320px;
    }
    .appointment>div.left{
        flex: 1;
    }
    .appointment>div.appointment-right{
        flex: 2;
        background:darkgreen;
        overflow: hidden;
        height: 320px;
        padding-left: 50px;
        box-sizing: border-box;
    }
   /* indextwo start */
    .appointment-right{
        width: 100%;
        height: 320px;
        position:   relative;
        padding-left: 50px;
        box-sizing: border-box;
        font-size: 28px;
    }
    .appointment-right>.cunxian{
        position: absolute;
        top: 20px;
    }
    .appointment-right>div{
        display: -webkit-flex;
        position: absolute;
        width: 500px;
        top: 130px;
    }
    .appointment-right>div>span{
        flex: 1;
        text-align: center;
    }
    .appointment-right>.time-box{
        position: absolute;
        width: 300px;
        height: 180px;
        left: 200px;
        top: 60px;
        overflow: hidden;
    }
    /* indextwo end */
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
    .time-box .fen {
        position: absolute;
        left: 230px;
        top: 65px;
        font-size: 45px;
    }
</style>