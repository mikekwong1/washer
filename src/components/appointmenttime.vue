<template>
    <div  class="appointmenttime" >  
        <div class="wraper hours" >
            <ul class="move_ul" ref="move_ele_hours" >
                <li v-for=" (item,index) in Hourscounts "  :key="index" :class="{ activestyle: index === activeindex_hours && indexs[highindex] == 0  }"  >
                    {{item < 10 ? "0" + item : " " + item }}
                </li>
            </ul>
        </div>
        <span class="appointment-time" >时</span>
        <div class="wraper Minutes" >
            <ul class="move_ul" ref="move_ele_Minutes" >
                <li v-for=" (item,index) in Minutescounts "  :key="index" :class="{ activestyle: item === activeindex_Minutes && indexs[highindex] == 0  }"  >
                    {{item < 10 ? "0" + item : " " + item }}
                </li>
            </ul>
        </div>
         <span class="appointment-Minutes" >分</span>
    </div>  
</template>

<script>
export default {
  props:['Hourscounts','Minutescounts','pitch','timpindex','highindex'],
  data(){
    return{
      ed_style_hours:null,
      activeindex_hours:0,
      activeindex_Minutes:0,
      indexs:['0','1'],
    }
  },
  methods:{
      move__hours(){
        this.$refs.move_ele_hours.style['transition'] = 'all 0.5s'
        this.$refs.move_ele_hours.style['-webkit-transform'] = 'translateY(' + this.ed_style_hours + 'px)'     
      },
      control(){
        window.addEventListener('keydown',(event)=>{
          switch(event.keyCode){
            case 37: 
            if(this.pitch&&this.timpindex==3){
              this.activeindex_hours--;
              this.ed_style_hours  =  this.activeindex_hours * -60 ;
              this.move__hours();
            } 
            break;
            case 39:  
            if(this.pitch&&this.timpindex==3){
              this.activeindex_hours++;
              this.ed_style_hours  =  this.activeindex_hours* -60 ;
              this.move__hours();
            }             
            break;
            case 13:  
            if(this.highindex == 0){
              this.highindex = 1
            }else {
              this.highindex = 0
            }      
              
            break;
          }
        })
      }
  },
  mounted(){
    this.control();
    // if(!this.pitch){
    //     this.activeindex_hours = new Date().getHours();
    //     this.ed_style_hours  =  activeindex_hours * -60 ;
    //     this.$refs.move_ele_hours.style['-webkit-transform'] = 'translateY(' + this.ed_style_hours + 'px)'  
    // }
  }
}
</script>

<style lang='css' scoped >
    .appointmenttime{
         width: 300px;
        height: 180px;
    }
  .wraper{
    position: absolute;
    width: 60px;
    letter-spacing: 4px;
  }
  .move_ul{
    position: relative;
  }
  .move_ul li{
    font-size: 54px;
    width: 70px;
    height: 60px;
    line-height: 60px;
    color: #727272;
  }
  .move_ul li.activestyle{
    color: #ffffff;
  }
  .Minutes{
        position: absolute;
        top: 60px;
        left: 130px;
  }
  .appointmenttime  .appointment-time{
      position: absolute;
      top: 60px;
      left: 70px;
      font-size: 40px;
  }
  .appointmenttime .appointment-Minutes{
    position: absolute;
    top: 60px;
    left: 200px;
    font-size: 40px;
  }
</style>