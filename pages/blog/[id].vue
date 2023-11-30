<template>
    <div class="flex flex-col bg-[#181D23]">
        <navbar></navbar>
        <div class="w-full relative">
        <img class="img-fadebanner w-full h-auto border-t-4 border-[#C59D5F]" src="../../assets/img/blog/14.webp" alt="">
        <div class="bg-gradient-to-b from-transparent to-[#181D23] absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div class="flex lg:flex-row flex-col gap-8 lg:gap-24 px-10 w-full z-10 -mt-[200px] lg:-mt-[450px] mx-auto py-16 items-center">
            <img class="mx-auto img-fade self-center w-[60%] lg:w-[30%] " :src="imgsrc" alt="">
            <div class="flex flex-col gap-2 items-center lg:items-start">
                <h2  class="text-[#C59D5F] font-peyda-bold text-[28px] text-center">{{ json[id].title }}</h2>
            <p class="text-[14px] font-peyda-noraml lg:text-start text-center ">
             {{ json[id].text }} 
            </p>
            </div>
        </div>
        <Myfooter></Myfooter>
    </div>
</template>
<script setup>
import json from '../../json/blog.json'
import {computed} from 'vue'
const route = useRoute()
const imgsrc = computed(()=>`/_nuxt/assets/img/blog/${route.params.id}.webp`)
const id = computed(()=>route.params.id)
</script>
<style scoped>
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  display: block;
  margin: 0;
}
.img-fadebanner{
  -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 90%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 90%);
  display: block;

}
</style>