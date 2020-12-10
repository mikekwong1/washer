<template>
  <div class="luminance" >
        <p class="header" >
            亮碟剂设置
        </p>
        <div class="contianer" >
          <div class=" circle" v-for="(item,index) in degreearr " :class=" index == active ? 'active' :'' " >
            {{item}}
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        active:2,
        degreearr:['1','2','3','4','5'],
    }
  },
  methods:{
        control(){
            window.addEventListener('keydown',(event)=>{
                switch (event.keyCode){
                    case 37: 
                        this.active <= 0 ? this.active = 5 : this.active 
                        this.active--;
                    break;
                    case 39: 
                        this.active >= 4 ? this.active = -1 : this.active 
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
    .luminance{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
    .luminance .header{
        width: 100%;
        font-size: 28px;
        text-align: center;
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