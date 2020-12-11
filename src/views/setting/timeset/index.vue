<template>
    <div class="timeset">
        <p class="header" >
            设置时间
        </p>
        <div class="time-box" >
            <TimeYear  class=" year timeloop" :pitch="pitch" :counts="yearcounts" :timpindex ="timpindex[active] "  :class=" timpindex[active] == timpindex[0] ? 'active' : '' "  ></TimeYear>
            <span class="timeset-year" >年</span>
            <TimeMonth class=" month timeloop" :pitch="pitch" :counts="monthcounts" :timpindex ="timpindex[active] "  :class=" timpindex[active] == timpindex[1] ? 'active' : '' "  ></TimeMonth> 
            <span class="timeset-month" >月</span>
            <TimeDay class=" day timeloop" :pitch="pitch" :counts="daycounts" :timpindex ="timpindex[active] "  :class=" timpindex[active] == timpindex[2] ? 'active' : '' " ></TimeDay>
            <span class="timeset-day" >日</span>
            <TimeHour class=" hours timeloop" :pitch="pitch" :counts="daycounts" :timpindex ="timpindex[active] "  :class=" timpindex[active] == timpindex[3] ? 'active' : '' " ></TimeHour>
            <span class="timeset-time" >时</span>
            <TimeMinute class=" minute timeloop" :pitch="pitch" :counts="daycounts" :timpindex ="timpindex[active] "  :class=" timpindex[active] == timpindex[4] ? 'active' : '' " ></TimeMinute>
            <span class="timeset-minute" >分</span>
        </div>
    </div>
</template>

<script>
import TimeYear from '@/components/TimeYear.vue'
import TimeMonth from '@/components/TimeMonth.vue'
import TimeDay from '@/components/TimeDay.vue'
import TimeHour from '@/components/TimeHour.vue'
import TimeMinute from '@/components/TimeMinute.vue'

export default {
    components:{
        TimeYear,TimeMonth,TimeDay,TimeHour,TimeMinute
    },
    data(){
       return{
            yearcounts:null,
            monthcounts:null,
            daycounts:null,
            pitch:false,
            timpindex:['0','1','2','3','4'],
            active:0,
            bright:true,
       }
    },
    methods:{
      
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
                    }  
                break;
            }
            })  
        },
        inittimes(){
            var year_arr = [];
            var month_arr =[];
            var day_arr =[];
            for (var ii = 2000; ii <= 2030; ii++) {
                year_arr.push(ii)
            }
            for(var li = 1 ; li <= 12 ; li++){
                month_arr.push(li)
            }
            for(var ii = 1 ; ii <= 31 ; ii++){
                day_arr.push(ii)
            }
            this.daycounts = day_arr;   
            this.yearcounts = year_arr; 
            this.monthcounts = month_arr;
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
        display: -webkit-flex;
        align-items:baseline;
    }
     .timeset .header{
        font-size: 28px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
    .timeset>.time-box{
        position: absolute;
        right: 30px;
        width: 740px;
        height: 190px;
        overflow: hidden;
        top: 75px;
        /* background-color: burlywood; */
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
    .timeset .timeloop.active{
        background: lightpink;
    }
    .timeset .year{
        left: 20px;
    }
    .timeset .month{
        left: 260px;
    }
    .timeset .day{
        left: 400px; 
    }
    .timeset .hours{
        left: 530px; 
    }
    .timeset .minute{
        left: 630px;
    }
   
    .timeset-year{
        font-size: 45px;
        position: absolute;
        left: 180px;
        top: 60px;
    }
    .timeset-month{
        font-size: 45px;
        position: absolute;
        left: 340px;
        top: 60px;
    }
   .timeset-day{
        font-size: 45px;
        position: absolute;
        left: 480px;
        top: 60px;
    } 
     .timeset-time{
        font-size: 45px;
        position: absolute;
        left: 600px;
        top: 60px;
    }
    .timeset-minute{
        font-size: 45px;
        position: absolute;
        left: 695px;
        top: 60px;
    }
    
</style>