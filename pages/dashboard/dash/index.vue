<template>
    <div class="flex flex-col">
        <div class="flex relative  flex-col gap-4">
            <slider1></slider1>
                </div>
                <div class="flex gap-2">
                        <div
                        class="flex w-[20%] bg-[#0E1317] relative overflow-y-scroll mr-[20px] p-4 overflow-x-hidden flex-col h-[80%] shadow-[#C59D5F] shadow rounded-lg font-peyda-bold gap-10 text-[16px] justify-between py-[30px] px-5 text-[#C59D5F]">
                        <img class="absolute opacity-10 -top-[50px] -right-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                        <img class="absolute opacity-10 -bottom-[50px] -right-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                            <img class="absolute opacity-10 bottom-[200px] -left-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                            <h2 class="z-20">زعفران 1</h2>
                            <h2 class="z-20">زعفران 2</h2>
                            <h2 class="z-20">زعفران 3</h2>
                            <h2 class="z-20">زعفران 4</h2>
                            <h2 class="z-20">زعفران 15</h2>
                            <h2 class="z-20">زعفران 15</h2>
                            <h2 class="z-20">زعفران 5</h2>
                            <h2 class="z-20">زعفران 5</h2>
                            <h2 class="z-20">زعفران 5</h2>
                            <h2 class="z-20">زعفران 5</h2>
                        </div>
                    <div class="bg-[#0E1317] flex relative p-4 mr-[20px] overflow-hidden w-[72%] h-[80%] shadow-[#C59D5F] shadow rounded-lg ">
                        <canvas id="myChart"></canvas>
                        <img class="absolute opacity-10 -top-[50px] -right-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                        <img class="absolute opacity-10 -top-[50px] -left-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                        <img class="absolute opacity-10 -bottom-[50px] -left-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                        <img class="absolute opacity-10 -bottom-[50px] -right-[50px] w-[100px] rotate-45"
                        src="../../../assets/img/pattern.svg" alt="">
                    </div>
                </div>
    </div>
</template>
<script setup> 
import {ref,onMounted } from 'vue'
const appear = ref(false)
onMounted(()=>{
    setTimeout(()=>{
        appear.value = true
    },1000)
})
</script>