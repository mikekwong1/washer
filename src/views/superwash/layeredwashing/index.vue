<template>
    <div class="layeredwashing" >
        <superlfet></superlfet>
         <div class="layeredwashing-right" >
            <div class="layeredwashing-container"  >
                <span class="cunxian" >分层洗涤</span>
                <div>
                    <span :class="activefen == index ? 'active' : ''"  v-for="(item,index) in  fencheng" :key="index" >{{item}}</span>
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
            fencheng:['上层','全层','下层'],
            activefen:0
        }
    },
       methods: {
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37:
                    // console.log(this.activefen)
                    this.activefen <=  0 ? this.activefen =  3 : this.activefen
                    if(this.fencheng){
                        this.activefen--;
                    }
                    
                    
                break;
                case 39: 
                    
                    // console.log(this.activefen)
                    this.activefen >=  2 ? this.activefen =  -1  : this.activefen
                     if(this.fencheng){
                        this.activefen++;
                     }
                    
                    
                break;
                case 13: 
                   // localStorage.setItem("savefresharr", this.naimi[this.activefen]);
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
    .layeredwashing{
        display: -webkit-flex;
    }
    .layeredwashing>div{
        height: 320px;
    }
    .layeredwashing>div.left{
        flex: 1;
    }
    .layeredwashing>div.layeredwashing-right{
        flex: 2;
        background:darkgreen;
        overflow: hidden;
    }
    /* indextwo start */
    .layeredwashing-container{
        width: 100%;
        height: 320px;
        position:   relative;
        padding-left: 50px;
        box-sizing: border-box;
        font-size: 28px;
    }
    .layeredwashing-container>.cunxian{
        position: absolute;
        top: 20px;
    }
    .layeredwashing-container>div{
        display: -webkit-flex;
        position: absolute;
        width: 500px;
        top: 130px;
    }
    .layeredwashing-container>div>span{
        flex: 1;
        opacity: 0.5;
    }
    .layeredwashing-container>div>span.active{
        opacity: 1;
    }
    .layeredwashing-container>.time-box{
        position: absolute;
        width: 300px;
        height: 180px;
        left: 200px;
        top: 60px;
        overflow: hidden;
    }
    /* indextwo end */
</style>