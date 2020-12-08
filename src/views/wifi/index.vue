<template>
  <div class="wifi" >
        <span class="left-time" >{{hours}}:{{month}}</span> 
        <div class="container" >
             <div class="left-text" v-show="index == 0"  >扫码下载美居App进行WI-FI配网第一步:手机扫码安装美居APP</div>
            <div class="left-text" v-show="index == 1" >第二部：美居APP，登录成功扫码机身二维码或者手动加设备导向</div>
            <div class="left-text" v-show="index == 2" >第三步:几台你完成，按返回键返回洗碗机.</div>
            <div class="saoma" v-show="index == 0 || index == 1 || index == 2 "   >

            </div>
        </div>
         <div  v-show="index == 3" >
             配置中
        </div>
  </div>
   
</template>

<script>
export default {
    data(){
        return{
            index:0,
            hours:0,
            month:0
        }
    },
    methods:{
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                    this.next();    
                break;
                case 39: 
                    this.prev();
                break;
            }
            })  
        },
        next(){
            this.index--;
        },
        prev(){
            this.index++;
        }
    },
    mounted(){
        this.control();
        this.hours =  String(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())
        this.month =  String(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
    }
}
</script>

<style>
    .wifi{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
    .wifi .left-time{
        font-size: 28px;
        position: absolute;
        left: 20px;
        top: 20px; 
    }
    .container>.left-text{
        line-height: 60px;
        width: 600px;
        font-size: 32px;
        top: 90px;
        left: 30px;
        position: absolute;
    }
    .saoma{
        width: 150px;
        height: 150px;
        background-color: darkorange;
        position: absolute;
        top: 90px;
        right: 30px;
    }
</style>