<template>
<div class="w-[280px] relative h-[180px] p-4 bg-[#0E1317] rounded-lg img-fadebanner   flex items-center gap-6">
    <img class="absolute opacity-10 top-[40px] -left-[55px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">

    <slot></slot>
</div>
</template>
<script>

</script>
<style scoped>
.img-fadebanner{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 100%);
  display: flex;
  margin: 0;
}
.borderline {  
    border-width: 3px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to right,
      transparent 0%, 
      #C59D5F 50% , 
      transparent 100%
    ) 1 1  100%;

 }
</style>