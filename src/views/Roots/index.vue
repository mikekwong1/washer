<template>
    <div class="root" >
        <span class="left-time" >{{gettime}}</span> 
        <div class="slide active" ref="move_wraper" >
            <div v-for="(item,index) in arr" :key="index" :class="index == activeindex ? 'darkgreen':'' "   >
                <span class="text" > {{item.title}}</span>
            </div>
        </div>
        
        <span class="text-bottom" >{{activeindex+1}}/{{arr.length}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            gettime: "",
            activeindex:0,
            msg:1,
            arr:[{title:'快速洗',url:''},{title:'超强洗',url:'/Superwash'},{title:'节能洗',url:''},{title:'静音洗',url:''},{title:'标准洗',url:''},{title:'预充洗',url:''},{title:'除菌洗',url:''},{title:'油网洗',url:''},{title:'火锅洗',url:''},{title:'海鲜洗',url:''},{title:'瓜果洗',url:''},{title:'自定义',url:'/defined'},{title:'设置',url:'/setting'}],
            rootsactive:true,
        }
    },
    methods: {
        control(){
            window.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case 37: 
                    console.log('左箭头');  
                    if( this.rootsactive ){
                        this.moveleft();
                    }
                break;
                case 39: 
                    console.log('右箭头');
                    if( this.rootsactive ){
                        this.moveright();
                    }
                break;
                case 13:
                    if( this.rootsactive ){
                        this.click(this.arr[this.activeindex].url);
                    }
                    
                break;
            }
            })  
        },
         getTime:function(){
            var _this = this;
            let hh =  new Date().getHours() 
            let mf =  new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes()
            _this.gettime = hh+':'+ mf; 
        },
        currentTime(){
            setInterval(this.getTime,500)
        },
        moveright(){
            this.activeindex++;
            if(this.activeindex >= 12){
                this.activeindex = 12
                return;         
            }   
            var index = this.activeindex-1;
            index = index < -1 ? -1 :index;
            index = index > this.arr.length -2 ? this.arr.length -2 :index;
            var ed_style =  -266.66*index ; 
            if(this.$refs.move_wraper){
                this.$refs.move_wraper.style['transition'] = '-webkit-transform 0.3s' 
                this.$refs.move_wraper.style['-webkit-transform']  = 'translateX(' + ed_style + 'px)'
            }
            
 
        },
        moveleft(){      
             this.activeindex--;      
            if(this.activeindex > 0 ){
                this.activeindex
            }else{
                this.activeindex = 0
                return;
            }
           
            var index = this.activeindex-1;
            index = index < -1 ? -1 :index;
            index = index > this.arr.length -2 ? this.arr.length -2 :index;
            var ed_style =  -266.66*index ; 
            if(this.$refs.move_wraper){
                this.$refs.move_wraper.style['transition'] = '-webkit-transform 0.3s' 
                this.$refs.move_wraper.style['-webkit-transform']  = 'translateX(' + ed_style + 'px)'
            }
        },
        click(index){
            this.$router.push(index);
        },
        getsaveappointment(){            
            if(localStorage.getItem("oppointmenthours")=="undefined"||localStorage.getItem("oppointmentminute")=="undefined"||localStorage.getItem("oppointmenthours")==null ||localStorage.getItem("oppointmentminute")==null){
                return;
            }
            console.log(localStorage.getItem("oppointmenthours"),localStorage.getItem("oppointmentminute"))
            var housr = localStorage.getItem("oppointmenthours")
            var minute = localStorage.getItem("oppointmentminute")
            this.arr[1].title = '超强洗' + housr + '时' + minute + '分'
        }
    },
    computed:{
       
    },
    mounted () {
        this.control();
    },
    created () {
        this.getsaveappointment();
        this.currentTime();
        this.rootsactive =true;
    },
    beforeDestroy(){
        this.rootsactive = false;
    }
}
</script>

<style>
    .root{
        overflow: hidden; 
        position: relative;
    }
    .root>.slide{
        width: 8000px;
    }
    .root>div>div{
        float: left;
        width: 266.66px;
        height: 320px;
        position: relative;
    }
    
    .root>div>div>span.text{
        width: 100%;
        text-align: center;
        font-size: 28px;
        position: absolute;
        top: 60%; /*偏移*/
    }
    .slide{
        width: 8000px;
        height: 100%;
    }
    .text-bottom{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 280px;
        left: 0px;
        color: darkorange;
        font-size: 28px;
    }
    .left-time{
        font-size: 18px;
        position: absolute;
        left: 20px;
        top: 20px;
        z-index: 1;    
    }
</style>