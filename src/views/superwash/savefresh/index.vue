<template>
  <div class="Savefresh" >
        <superlfet></superlfet>
        <div class="Savefresh-right" >
            <div class="indexstwo" >
                <span class="cunxian" >智能鲜存</span>
                <div>
                    <span v-for="(item,index) in savefresharr" :key="index"  :class="index == active ? 'active': ''" >{{item}}</span>
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
            active:0,
            savefresharr:['24小时','72小时','168小时','关闭'],
            currentsave:true,
        }; 
    },
    methods: {
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37:
                    this.active <=  0 ? this.active =  this.savefresharr.length : this.active
                    this.active--;
                break;
                case 39: 
                    this.active >=  3 ? this.active =  -1  : this.active
                    this.active++;
                break;
                case 13: 
                    if(this.currentsave){
                        localStorage.setItem("savefresharr", this.savefresharr[this.active]);
                    }                  
                break;
            }
            })  
        },
    },
    created(){
        this.currentsave =  true
    },
    mounted(){
        this.control();
    },
    beforeDestroy(){
        this.currentsave =  false
    }
     
}
</script>

<style>
    .Savefresh{
        display: -webkit-flex;
    }
    .Savefresh>div{
        height: 320px;
    }
    .Savefresh>div.left{
        flex: 1;
    }
    .Savefresh>div.Savefresh-right{
        flex: 2;
        background:darkgreen;
        overflow: hidden;
        
    }
    .Savefresh-right{
        flex: 2;
        background:darkgreen;
        overflow: hidden;
    }
     /* indextwo start */
    .indexstwo{
        width: 100%;
        height: 320px;
        position:   relative;
        padding-left: 50px;
        box-sizing: border-box;
        font-size: 28px;
    }
    .indexstwo>.cunxian{
        position: absolute;
        top: 20px;
    }
    .indexstwo>div{
        display: -webkit-flex;
        position: absolute;
        width: 500px;
        top: 130px;
        justify-content: flex-start;
    }
    .indexstwo>div>span{
        flex: 1; 
        opacity: 0.5;
    }
    .indexstwo>div>span.active{
        opacity: 1;
    }
    .indexstwo>.time-box{
        position: absolute;
        width: 300px;
        height: 180px;
        left: 200px;
        top: 60px;
        overflow: hidden;
    }
    /* indextwo end */
</style>