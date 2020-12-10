<template>
    <div class="setting" >
        <div class="setting-container" v-for="(item,index) in settings " :key="index" v-show="settingindex==0" >
            <span :class="indexs == index ? 'active': ''" >{{item.title}}</span> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{ 
            settings:[{title:'时间设置',url:'/timeset'},{title:'亮碟剂设置',url:'/luminance'},{title:'屏幕亮度',url:'/dishsetting'},{title:'提示音',url:'/warningtone'},{title:'软水盐设置',url:'/saline'},{title:'关于本机',url:'/aboutmachine'}],
            indexs:0,
            settingindex:0,
            settingcurrent:false
        }
    },
    methods: {
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                    
                    this.indexs<=0 ? this.indexs = 6 : this.indexs;
                    if(this.settingcurrent){
                        this.indexs--;
                    }
                    
                break;
                case 39: 
                    
                    this.indexs>=5 ? this.indexs = -1  : this.indexs;
                    if(this.settingcurrent){
                         this.indexs++;
                    }
                   
                break;
                case 13: 
                    if(this.settingcurrent){
                        this.click(this.settings[this.indexs].url);
                    }
                    
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
    },created(){
        this.settingcurrent = true;
    },beforeDestroy(){
        this.settingcurrent = false;
    }

}
</script>

<style  >
    .setting{
        width: 800px;
        height: 320px;
        background-color: darkgreen;
        color: white;
        display: -webkit-flex;
        flex-wrap:wrap;
        font-size: 28px;
    }
    .setting .setting-container{
        width: 33.3%;
        height: 160px;
        line-height: 160px;
        text-align: center;
    }
    .setting .setting-container span{
        opacity: 0.5;
    }
    .setting .setting-container span.active{
        opacity: 1;
    }
</style>