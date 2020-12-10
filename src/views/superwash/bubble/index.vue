<template>
  <div class="bubble" >
        <superlfet></superlfet>
        <div class="bubble-right" >
            <div class="bubble-container">
                <span class="cunxian" >纳米净泡</span>
                <div class="bubble-right-container" >
                    <span :class="naimiactive == index ? 'active' : '' " v-for="(item,index) in  naimi" :key="index" >{{item}}</span>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import superlfet from '@/components/superleft.vue'
export default {
    components:{
        superlfet
    },
    data(){
        return{
             naimi:['开始','关闭'],
             naimiactive : 1,
        }
    },
    methods: {
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37:
                     this.naimiactive <=  0 ? this.naimiactive =  2 : this.naimiactive
                    if(this.naimiactive){
                   
                    this.naimiactive--;
                    }
                break;
                case 39: 
                    this.naimiactive >  0 ? this.naimiactive =  -1  : this.naimiactive
                    if(this.naimiactive){
                        
                        this.naimiactive++;
                    }
                break;
                case 13: 
                    if(this.naimiactive){
                        localStorage.setItem("naimiactive", this.naimi[this.naimiactive]);
                    }
                    
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
    .bubble{
        display: -webkit-flex;
    }
    .bubble>div{
        height: 320px;
    }
    .bubble>div.left{
        flex: 1;      
    }
    .bubble>div.bubble-right{
        flex: 2;
        background:darkgreen;
        overflow: hidden;     
    }
    .cunxian{
        position: absolute;
        top: 50px;
    }
    .bubble-container{
        width: 100%;
        height: 320px;
        position:   relative;
        padding-left: 50px;
        box-sizing: border-box;
        font-size: 28px;
        
    }
    .bubble-right>.bubble-container>.bubble-right-container{
        display: -webkit-flex;
        position: absolute;
        width: 420px;
        top: 150px;
        justify-content: space-between;
    }
    .bubble-right-container>span{
        opacity: 0.5;
    }
    .bubble-right-container>span.active{
        opacity: 1;
    }
</style>