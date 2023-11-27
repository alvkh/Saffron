<template>
    <div class="flex flex-col bg-[#181D23]">
        <navbar></navbar>
        <div class="w-full relative">
        <img class="img-fadebanner w-full h-auto border-t-4 border-[#C59D5F]" src="../../assets/img/blog/14.png" alt="">
        <div class="bg-gradient-to-b from-transparent to-[#181D23] absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div class="flex gap-24  px-10  w-full z-10 -mt-[450px] mx-auto py-16 items-center">
            <img class="mx-auto img-fadebanner self-center w-[30%] " :src="imgsrc" alt="">
            <div class="flex flex-col gap-2 items-start">
                <h2  class="text-[#C59D5F] font-peyda-bold text-[28px] text-center">{{ json[id].title }}</h2>
            <p  class="text-[16px] font-peyda-noraml ">
             {{ json[id].text }} 
            </p>
            </div>
        </div>
        
    </div>
</template>
<script setup>
import json from '../../json/blog.json'
import {computed} from 'vue'
const route = useRoute()
const imgsrc = computed(()=>`/_nuxt/assets/img/blog/${route.params.id}.png`)
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