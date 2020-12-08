<template>
  <div id="app">
    <Roots v-show="$store.state.isMenu == 0" ></Roots>
    <router-view v-show="$store.state.isMenu == 1"  />
  </div>
</template>
<script>
import Roots from "./components/Roots"
export default {
    components:{
			Roots
    },
    methods:{
      text_init(){
        window.addEventListener('keydown',(event)=>{
          //console.log("event",event)
          switch (event.keyCode){
            case 32:
               console.log('空格');
              this.$router.go(-1)
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
      }
    },
    mounted(){
      setTimeout(()=>{
        this.$store.commit('showMenu',1)
      },2500)
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
