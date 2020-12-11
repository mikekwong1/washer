<template>
    <div class="wraper" >
      <ul class="move_ul" ref="move_ele" >
        <li v-for=" (item,index) in counts "  :key="index" :class="{ activestyle: index === activeindex && indexs[highindex] == 1  }"  >
           {{item}}
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
            highindex:0,
            indexs:['0','1'],
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
                if(this.pitch&&this.timpindex==0){
                    this.activeindex--;
                    this.ed_style  =  this.activeindex * -60 ;
                    this.move();
                } 
                break;
                case 39:  
                if(this.pitch&&this.timpindex==0){
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
        if(!this.pitch){
            var index =  this.counts.findIndex()
             //var index = this.counts.map(item=>item).indexOf('2')
            //console.log("this.counts",this.counts,index)
            //  for(let i = 0 ; i < this.counts.length; i++){
                
            //     console.log("this.counts[i]",this.counts[i])
            // }
            
           
            // this.activeindex = new Date().getFullYear;
            // this.ed_style  =  this.activeindex * -60 ;
            // this.$refs.move_ele.style['-webkit-transform'] = 'translateY(' + this.ed_style + 'px)'  
        }
    }
}
</script>

<style>
    .wraper{
        position: absolute;
        top: 60px;
        width: 140px;
        letter-spacing: 4px;
    }
  .move_ul{
    position: relative;
  }
  .move_ul li{
    font-size: 54px;
    width: 140px;
    height: 60px;
    line-height: 60px;
    color: #727272;
  }
  .move_ul li.activestyle{
    color: #ffffff;
  }
</style>