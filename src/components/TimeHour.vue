<!-- 设置时间的小组件 -->
<template>
<!--  @mousedown="m_down" -->
  <div class="wraper">
    <ul class="move_ul" ref="move_ele">
      <li
        v-for="item in counts"
        :key="item"
        :class="{
          activestyle: item === ActiveIndex  
        }"  >
        {{ item < 10 ? "0" + item : "" + item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['counts', 'active_i', 'pitch','timpindex','highactive','ActiveIndex'],
  data() {
    return {
      ActiveIndex: null,
    };
  },
  computed: {

  },
  watch: {},
  methods: {
        moveright(){
                this.$refs.move_ele.style['transition'] = 'all 0.5s'
                var ed_style = -60 * this.ActiveIndex;
                this.$refs.move_ele.style['-webkit-transform'] = 'translateY(' + ed_style + 'px)'

        },
        moveleft(){    
                this.$refs.move_ele.style['transition'] = 'all 0.5s' 
                var ed_style = -60 * this.ActiveIndex;
                this.$refs.move_ele.style['-webkit-transform'] = 'translateY(' + ed_style + 'px)'
        },
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37:             
                    if(this.pitch&&this.timpindex==0){
                        this.ActiveIndex <= 1 ?  this.ActiveIndex = 1 : this.ActiveIndex
                        this.ActiveIndex--;
                        console.log("this.ActiveIndex",this.ActiveIndex)
                        this.moveright();
                    }
                    
                break;
                case 39: 
                    console.log("this.ActiveIndex",this.ActiveIndex)
                    if(this.pitch&&this.timpindex==0){
                        this.ActiveIndex >= 23 ?  this.ActiveIndex = 23 : this.ActiveIndex
                        this.ActiveIndex++
                        
                        this.moveleft();
                    }
                break;
                case 13:
                   this.childClick ();
                break;               
            }
            })  
        },
         high(){
          if( this.pitch){
              this.ActiveIndex = 0 ;
          }
        },
        childClick () {
          this.$emit('ActiveIndex', this.ActiveIndex)
        }
    
  },
  created() {
      this.high();
  },
  mounted() {
      this.control();
  },
  beforeDestroy() {
  },

}
</script>

<style lang='css' scoped>
.wraper {
  position: absolute;
  top: 65px;
  width: 70px;
  letter-spacing: 4px;
}
.move_ul {
  -webkit-transform: translateY(0px);
  position: relative;
}
.move_ul li {
  font-size: 54px;
  width: 70px;
  height: 60px;
  line-height: 60px;
  color: #727272;
  
}
.move_ul li.activestyle {
  color: #ffffff;
}
.black{
}
</style>