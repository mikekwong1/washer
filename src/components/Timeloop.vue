<template>
  <!-- 设置小时页面 -->
  <div class="wraper" >
      <ul class="move_ul" ref="move_ele">
            <li><div>23</div></li>
            <li v-for="(item,index) in num" :key="index" :class="[]" > <div>{{item}}</div></li>
            <li><div>00</div></li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['counts', 'active_i', 'type'],
    data(){
        return{
            ActiveIndex:0,
            
        }
    },
    mounted(){
        for(let i = 0;i<=9;i++){
            for(let j = 0;j<=2;j++){
                let val = j + "" + i;
                if(val < "24"){
                    this.num.push(val)
                }

                this.num.sort(function(a,b){
                    return a-b;
                })
            }
        }

    }
}
</script>

<style>
    .wraper {
        position: absolute;
        top: 0;
        width: 70px;
        font-family: "num_r";
        letter-spacing: 4px;
    }
    .move_ul {
        -webkit-transform: translateY(0px);
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
    .move_ul li.yearactive {
        color: #ffffff;
    }
</style>