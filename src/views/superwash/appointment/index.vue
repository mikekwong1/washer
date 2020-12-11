<template>
  <div class="appointment" >
      <superlfet></superlfet>
      <div class="appointment-right" >
        <span class="cunxian" >预约</span>
        <div class="left" >结束时间</div>
        <div class="time-box" >
            <TimeHour class="minute timeloop" :pitch="pitch"  :timpindex ="timpindex[active] " :class=" timpindex[active] == timpindex[0] ? 'active' : '' "  :counts="Hourscounts" :activeindex="Hoursactive" ></TimeHour>
            <span class="appointment-time" >时</span>
             <TimeMinute class="second timeloop" :pitch="pitch"  :timpindex ="timpindex[active] " :class=" timpindex[active] == timpindex[1] ? 'active' : '' "  :counts="Secondcounts" :activeindex="Hoursactive" ></TimeMinute>
            <span class="appointment-fen" >分</span>
        </div>
      </div>
  </div>
</template>

<script>
import superlfet from '@/components/superleft.vue'
import TimeHour from '@/components/TimeHour.vue'
import TimeMinute from '@/components/TimeMinute.vue'
export default {
    components:{
        superlfet,TimeHour,TimeMinute
    },
    data(){
      return{
        pitch:false,
        timpindex:['3','4'],
        active:0,
        bright:true,
        Hourscounts:null,
        Secondcounts:null,
        Hoursactive:0,
        ed_style:0,
      }
    },
    watch:{
    },
    methods: {
        // 时间start
        inittimes(){
                var m_arr = [];
                var s_arr = [];
                for (var ii = 0; ii <= 24; ii++) {
                    m_arr.push(ii)
                }
                for (var ir = 0; ir < 60; ir++) {
                    s_arr.push(ir)
                }
                this.Hourscounts = m_arr;
                this.Secondcounts = s_arr;
        },
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37:   
                // console.log(this.active)
                    if(!this.pitch){
                        this.active<=0 ? this.active =2 : this.active
                        this.active--;
                    }
                break;
                case 39: 
                // console.log(this.active)
                    if(!this.pitch){
                        this.active++;
                        this.active>=2 ? this.active = 0 : this.active
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

<style lang="css" scoped  >
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
     .appointment-right>div.left{
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
        left: 160px;
    }
    .colon_hao {
        top: 50%;
        left: 50%;
        transform: translate(-55%, -50%);
        -webkit-transform: translate(-55%, -50%);
    }
    .timeloop.active{
        background: lightpink;
    }
    .time-box .appointment-fen {
        position: absolute;
        left: 240px;
        top: 60px;
        font-size: 45px;
    }
    .time-box .appointment-time{
        position: absolute;
        left: 100px;
        top: 60px;
        font-size: 45px;
    }
</style>