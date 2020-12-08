<template>
  <div class="aboutmachine" >
      <p class="header" >关于本机</p>
      <div class="container" v-show="index ==indexs" v-for="(item,index) in msgarr" :key="index" >
            <div class="aboutmachine-left" >{{item.title}}</div>
            <div class="aboutmachine-right" >{{item.msg}}</div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            indexs:0,
            msgarr:[{title:"产品名称",msg:"COLMO图灵系列洗碗机"},{title:"产品型号",msg:"CDS12G06"},{title:"国标条码",msg:"*********"},{title:"服务热线",msg:"400-969-9999"}]
        }
    },
    methods:{
         control(){
            window.addEventListener('keydown',(event)=>{
                switch (event.keyCode){
                    case 37: 
                        this.indexs <=0 ? this.indexs=3 : this.indexs;
                        this.indexs--;
                    break;
                    case 39: 
                        this.indexs>2 ? this.indexs=0 : this.indexs;
                        this.indexs++;
                        
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
    .aboutmachine{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
    .aboutmachine .header{
        font-size: 28px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
    .aboutmachine>.container{
        font-size: 32px;
        display:  flex;
        justify-content: space-between;
        position: absolute;
        width: 800px;
        top: 160px;
    }
    .aboutmachine>.container>div{
        flex: 1;
        text-align: center;
    }
</style>