<template>
    <div class="wraper" >
      <ul class="move_ul" ref="move_ele" >
        <li v-for=" (item,index) in counts "  :key="index" :class="{ activestyle: index === activeindex  }"  >
           {{item < 10 ? "0" + item : " " + item }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    props:['counts','pitch','timpindex'],
    data(){
        return{
            ed_style:null,
            activeindex:0,
        }
    },
    methods:{
        move(){
            this.$refs.move_ele.style['transition'] = 'all 0.5s'
            this.$refs.move_ele.style['-webkit-transform'] = 'translateY(' + this.ed_style + 'px)'     
        },
        control(){
            window.addEventListener('keydown',(event)=>{
            switch(event.keyCode){
                case 37: 
                if(this.pitch&&this.timpindex==2){
                    this.activeindex--;
                    this.ed_style  =  this.activeindex * -60 ;
                    this.move();
                } 
                break;
                case 39:  
                if(this.pitch&&this.timpindex==2){
                    this.activeindex++;
                    this.ed_style  =  this.activeindex * -60;
                    this.move();
                }             
                break;
            }
        })
      }
    },
    mounted(){
        this.control();
    }
}
</script>

<style>
    .wraper{
        position: absolute;
        top: 60px;
        width: 70px;
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
</style>