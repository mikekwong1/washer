<template>
  <div class="warningtone" >
        <p class="header" >提示音设置</p>
        <div class="container" >
            <span v-for="(item,index) in cleaningarr" :key="index" :class=" actives == index  ? 'active' : '' " >
                {{item}}
            </span>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            actives:0,
            cleaningarr:['开启','关闭']
        }
    },
    methods: {
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                    this.actives--;
                    this.actives<0 ? this.actives = 1 :this.actives;
                break;
                case 39: 
                    
                    this.actives++;
                    this.actives>1 ? this.actives = 0  :this.actives;
                break;
            }
            })  
        },
        click(index){
            this.$router.push(index)
        }
        
    },
    mounted () {
        this.control();  
    }
}
</script>

<style>
    .warningtone{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        position: relative;
    }
    .warningtone .header{
        width: 100%;
        font-size: 28px;
        text-align: center;
        position: absolute;
    }
    .warningtone .container{
        width: 100%;
        top: 50%;
        font-size: 28px;
        transform: translateY(-14px);
        position: absolute;
        display: -webkit-flex;
        justify-content: space-around;
    }
    .warningtone .container>span{
        opacity: 0.5;
    }
    .warningtone .container>span.active{
        opacity: 1;
    }
</style>