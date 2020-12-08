<template>
    <div class="annotation" >
        <span class="left-time" >12:00</span>
        <div class="left" >
            <span class="left-container" >70°超强洗</span>
            <span class="left-bottom" >1时55分</span>
        </div>
        <div class="right darkgreen" >
           清洗胀污成都较重的餐具，如果油污的餐盘、锅具等; 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
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
    .annotation{
        display: flex;
        position: relative;
    }
    .annotation>div{
        height: 320px;
    }
    div.left{
        flex: 1;
    }
    div.right{
        flex: 2;
        padding-left: 60px;
        padding-right: 30px;
        padding-top: 100px;
        box-sizing: border-box;
        font-size: 32px;
        
    }

    
</style>