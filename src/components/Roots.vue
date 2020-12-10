<template>
    <transition name="fade" >
        <div class="Roots" >
            <div class="Roots-text" >
                COLMO开机动画
            </div>   
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style>
    .Roots{
        width: 800px;
        height: 320px;
        background-color: green;
        position: relative;
        
    }
    .Roots-text{
        font-size: 64px;
        text-align: center;
        height: 320px;
        line-height: 320px;
        /* position: absolute; */

        color: white;
    }
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 2.5s ease-in-out;
    }
    .fade-enter-to{
        opacity: 1;
    }
</style>