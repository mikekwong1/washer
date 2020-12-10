<template>
    <div class="timeset">
        <p class="header" >
            设置时间
        </p>
         <div class="time-box" >
            <!-- <Colon class="colon_hao">:</Colon> -->
            <TimeHour
                key="'mi'"
                :counts="Minutecounts"
                class="minute timeloop"
                :class=" timpindex[active] == timpindex[0] ? 'active' : '' "
                :timpindex ="timpindex[active] "
                :highactive ="highactive"
                :active_i="h"
                :pitch="pitch"
                @loop1="loop1"
                @loop2="loop2"
                @loop3="loop3"
                :ActiveIndex ="ActiveIndex"
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
</template>

<script>
import Colon from '@/components/colon.vue'
 import TimeHour from '@/components/TimeHour.vue'
import TimeMinute from '@/components/TimeMinute.vue'
export default {
    components:{
        TimeHour,Colon,TimeMinute
    },
    data(){
       return{
            timpindex:[0,1],
            active:0,
            Minutecounts:null,
            Secondcounts:null,
            highactive:0,
            m:0,
            h:0,
            pitch:false,
            bright:true,
            name:null
       }
    },
    methods:{
        ActiveIndex:function(ActiveIndex){
            this.name = ActiveIndex
            console.log(this.name)
        },
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
                    if(!this.pitch){
                        this.active--;
                    }
                break;
                case 39: 
                    if(!this.pitch){
                        this.active++;
                    }
                break;
                case 13: 
                  if(this.bright){
                    this.pitch = !this.pitch;
                    this.highactive = 0;
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
    .timeset{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
     .timeset .header{
        font-size: 28px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
    .time-box{
        position: absolute;
        right: 30px;
        width: 300px;
        height: 190px;
        overflow: hidden;
        top: 60px;
    }
    .time-box .time{
        position: absolute;
        left: 87px;
        top: 65px;
        font-size: 45px;
    }
    .time-box .fen{
        position: absolute;
        left: 87*2px;
        top: 65px;
        font-size: 45px;
    }
    .second{
        left: 150px;
    }
</style>