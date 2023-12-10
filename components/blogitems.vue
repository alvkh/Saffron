<template>
    <div class="flex flex-col justify-center items-center gap-4">
        <!-- <slot name="img"></slot> -->
        <img class="rounded-lg border w-[95%] img-fadebanner border-[#C59D5F]" :src="imgsrc" />
        <div class="flex flex-col gap-2 self-center w-[85%]">
            <h2 class="text-[24px] font-peyda-bold about ">{{text}}</h2>
            <h3 class="text-[14px] h-[100px] font-peyda-bold text-[#9AA3A7]">{{sent}}</h3>
            <nuxt-link class="underline-offset-[10px] text-[12px] lg:text-[16px] font-peyda-bold text-[#C59D5F] underline" :to="{path:link}"> ادامه خواندن</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
 props: ['imgsrc','sent','text','link']
}
</script>
<style>
.about1 {
  background: radial-gradient(
    70.71% 70.71% at 50% 50%,
    #fff 30%,
    rgba(255, 255, 255, 0.5) 60.77%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.about {
  background: radial-gradient(
    70.71% 70.71% at 50% 50%,
    #cecab5 30%,
   #C59D5F 84.77%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 85%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 85%);
  display: block;
  margin: 0;
}
.img-fadebanner{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 100%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 100%);
  display: block;
  margin: 0;
}
</style>