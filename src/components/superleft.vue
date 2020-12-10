<template>
  <div class="superleft" > 
        <span class="left-time" >{{gettime}}</span>
        <div class="left" >
            <span class="left-container" >70°超强洗</span>
            <span class="left-bottom" >1时55分</span>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            gettime:'',//当前时间
        }
    },
    methods:{
        getTime:function(){
        var _this = this;
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        _this.gettime = hh+':'+ mf; 
      },
      currentTime(){
        setInterval(this.getTime,500)
      },
    },
    mounted(){
      setTimeout(()=>{
        this.$store.commit('showMenu',1)
      },2500)
     
    }, 
    created() {
      this.currentTime();    
    },
}
</script>

<style>
    .superleft{
        flex: 1;
    }
    .left-time{
        font-size: 18px;
        position: absolute;
        left: 20px;
        top: 20px;    
        font-size: 32px;
    }
    .left-container{
        position: absolute;
        left: 20px;
        top: 120px;
        font-size: 32px;
    }
    .left-bottom{
        position: absolute;
        left: 20px;
        top: 220px;
        font-size: 32px;
    }
</style>