<template>
  <div id="app">
    <Roots v-show="$store.state.isMenu == 0" ></Roots>
    <!-- <p>{{gettime}}</p> -->
    <router-view v-show="$store.state.isMenu == 1"  />
  </div>
</template>
<script>
import Roots from "./components/Roots"
export default {
    components:{
			Roots
    },
    data(){
      return{
         
      }
    },
    methods:{
      text_init(){
        window.addEventListener('keydown',(event)=>{
          switch (event.keyCode){
            case 32:
               console.log('空格');
              this.$router.back(-1)
              break;
            case 65:
              console.log('注释');
              this.$router.push('/annotation')
            break;
            case 49: 
              console.log()
              this.$router.push('/wifi')
            break;
          }
        })
      },
      
    },
    mounted(){
       this.text_init();
    }
   
}
</script>
<style>
  
  button:focus{outline:0;}
  #app {
    width: 800px;
    height: 320px;
    position: relative;
    overflow: hidden;
    background-color: green;
    color: white;
  }
  *{
    -webkit-user-select: none;
    user-select:none;
  }
  html,body,h1,h2,h3.p,ul,li{
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }
  .img-auto{
    width: 100%;
    height: auto;
  }
  .darkgreen{
    background-color: darkgreen;
  }
</style>
