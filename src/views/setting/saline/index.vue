<template>
  <div class="saline" >
      <p class="header" >盐水设置</p>
      <div class="contianer" >
          <div class=" circle" v-for="(item,index) in degreearr " :class=" index == active ? 'active' :'' " >
            {{item}}
            </div>
      </div>
      
      <div class="bottom" v-for=" (item,index) in salinearr " :key="index" >
          <div class="bottom-text" v-show="index == active"  >{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:2,
            degreearr:['1','2','3','4','5','6'],
            salinearr:[{title:"适合水硬度0-90pm"},{title:"适合水硬度91-200pm"},{title:"适合水硬度201-300pm"},{title:"适合水硬度301-400pm"},{title:"适合水硬度401-600pm"},{title:"适合水硬度600+pm"}]
        }
    },
    methods:{
         control(){
            window.addEventListener('keydown',(event)=>{
                switch (event.keyCode){
                    case 37: 
                        this.active <= 0 ? this.active = 6 : this.active 
                        this.active--;
                    break;
                    case 39: 
                        this.active >= 5 ? this.active = -1 : this.active 
                        this.active++;  
                    break;
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
    .saline{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
    .saline .header{
        font-size: 28px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
    .bottom .bottom-text{
        font-size: 28px;
        bottom: 10px;
        left: 50%;
        margin-left:-130px;
        position: absolute;
    }
    .contianer{
        width: 800px;
        display: -webkit-flex;
        justify-content: space-around;
        position: absolute;
        top: 110px;
        
    }
    .contianer .circle.active{
        opacity: 1;
    }
    .circle{
        border-radius: 50%;
        width: 100px;
        height: 100px;
        line-height: 100px;
        opacity: 0.5;
        font-size: 28px;
        text-align: center;
        
        background-color: white;
        color: black;
        
    }
</style>