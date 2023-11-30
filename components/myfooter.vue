<template>
    <div class="w-full bg-[#0E1317] relative">
      <img class="absolute opacity-10 top-[120px] -right-[40px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">
      <div class="lg:w-[75%] flex-col lg:flex-row lg:px-0 px-4 items-center lg:items-start justify-between mx-auto flex py-12 gap-10">
        <div class="flex flex-col lg:w-[33%] gap-7">
          <div class="flex gap-2 lg:justify-normal justify-between">
            <img class="w-[100px] lg:self-start self-center img-fade" src="../assets/img/slide0.webp" alt="">
          <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=428313&Code=c3xZMM6aDW01TsCAC51YbNPjwxh6XB3R'><img id="imgenamad" class="w-[100px] lg:self-start self-center" referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=428313&Code=c3xZMM6aDW01TsCAC51YbNPjwxh6XB3R' alt='' style='cursor:pointer' Code='c3xZMM6aDW01TsCAC51YbNPjwxh6XB3R'></a>
          </div>
          <p class="text-[16px] font-peyda-bold lg:text-start text-center text-[#9AA3A7]"> تالار سرخ معتبر ترین مرجع خرید و فروش زعفران در ایران</p>
          <div class="flex gap-2 items-center lg:self-start self-center">
            <img src="../assets/img/Rectangle1.svg" alt="">
            <img src="../assets/img/Rectangle2.svg" alt="">
            <img src="../assets/img/Rectangle3.svg" alt="">
            <img src="../assets/img/Rectangle4.svg" alt="">
          </div>
        </div>
        <div class="flex lg:w-[30%] flex-col gap-4">
          <h2 class="text-[26px] font-peyda-bold text-white">لینکهای مفید</h2>
          <div class="flex flex-col gap-4 text-[18px] items-center lg:items-start font-peyda-bold  text-[#9AA3A7]">
            <h3>درباره ما</h3>
            <h3>وبلاگ</h3>
            <h3>خرید</h3>
            <h3>تماس با ما </h3>
          </div>
        </div>
        <div class="flex flex-col lg:w-[34%] gap-4">
            <h2 class="text-[26px] font-peyda-bold lg:text-start text-center text-white">راه های ارتباطی</h2>
            <div class="flex flex-col gap-4 text-[18px] font-peyda-bold  text-[#9AA3A7]">
              <div class="flex gap-2 items-center">
                <div class=" w-12 h-12 rounded-full justify-center items-center flex bg-[#C59D5F]">
                   <svgs-call></svgs-call>
                </div>
                <h2 class="text-[14px] font-peyda-bold text-[#9AA3A7]"><a href="tel:05138660072">0513-8660072</a></h2>
              </div>
              <div class="flex gap-2 items-center">
                <div class=" w-12 h-12 rounded-full justify-center items-center flex bg-[#C59D5F]">
                   <svgs-location></svgs-location>
                </div>
                <div class="">
                  <h2 class="text-[14px] font-peyda-bold text-[#9AA3A7]">آدرس : مشهد شهرک صنعتی توس </h2>
                <h2 class="text-[14px] font-peyda-bold text-[#9AA3A7]">فاز دوم اندیشه 8 پلاک 310 </h2>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <div class=" w-12 h-12 rounded-full justify-center items-center flex bg-[#C59D5F]">
                   <svgs-mail></svgs-mail>
                </div>
                <h2 class="text-[14px] font-peyda-bold text-[#9AA3A7]"><a href="mailto:info@luxsaffron.ir">info@luxsaffron.ir</a></h2>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>
<style>
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
<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
  if(process.client){
  // var img = document.getElementById("imgenmad")
  // console.log(img);
  setTimeout(() => {
    if(document.getElementById("imgenamad").naturalWidth==1){
      document.getElementById("imgenamad").src = "https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777"
    }
  }, 2000);
}
})
</script>