<template>
    <div class="flex flex-col gap-4">
        <!-- <slot name="img"></slot> -->
        <img class="rounded-lg border border-[#C59D5F]" :src="imgsrc" />
        <div class="flex flex-col gap-2 self-center w-[85%]">
            <h3 class="text-[15px] font-peyda-bold text-[#9AA3A7]">{{sent}}</h3>
            <h2 class="lg:text-[26px] text-[16px]  font-peyda-bold ">{{text}}</h2>
            <nuxt-link class="underline-offset-[10px] text-[12px] lg:text-[16px] font-peyda-noraml text-[#C59D5F] underline" :to="{path:link}"> ادامه خواندن</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
 props: ['imgsrc','sent','text','link']
}
</script>
<style>
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 85%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 85%);
  display: block;
  margin: 0;
}
</style>