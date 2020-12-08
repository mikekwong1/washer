<template>
  <div class="dishsetting" >
        <p class="header" >
            亮碟剂设置
        </p>
        <div class="slider" >
          <div class="line" :style="'width:' + width + '%'" >
              
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      width:50,
    }
  },
  methods:{
         control(){
            window.addEventListener('keydown',(event)=>{
                switch (event.keyCode){
                    case 37: 
                        this.width <0 ? this.width = 0 : this.width ;
                        this.width--;
                    break;
                    case 39: 
                        this.width>101 ? this.width= 101 : this.width;
                        this.width++;
                        
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
    .dishsetting{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
    .dishsetting .header{
        width: 100%;
        font-size: 28px;
        text-align: center;
        position: absolute;

    }
    .slider{
      width: 600px;
      height: 50px;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0.3;
      border-radius: 25px;
      top: 150px;
      left: 100px;
      overflow: hidden;
      position: absolute;
    }
    .line{
      /* width: 300px; */
      height: 100%;
      background : white;
      border-right: 3px solid orange;
      box-sizing: border-box;
      transition: all .2s ;
    }
</style>