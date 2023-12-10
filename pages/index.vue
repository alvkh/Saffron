<template>
    <div class="flex flex-col relative overflow-hidden ">
        <navbar></navbar>
        <img class="absolute opacity-10 top-[200px] -right-[40px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">
        <div class="w-full py-10 bg-[#181D23] ">
         <div class=" lg:flex-row flex-col flex lg:gap-6">
          <div class="w-[230px] lg:hidden self-center lg:self-start font-peyda-bold h-10 bg-[#33383D] text-[#C59D5F]" style="clip-path: polygon(0 0%, 100% 0, 94% 50%, 100% 100%, 0 100%, 7% 50%);">
          <h2 class="self-center flex justify-center py-[10px]"> به زعفران لوکس خوش آمدید</h2>
          </div>
          <div class="flex px-[15px] lg:px-[100px] lg:pb-[50px] pb-[25px] flex-col justify-center w-full lg:w-[50%] order-2 lg:order-1 gap-6">
            <svgs-animations-s1></svgs-animations-s1>
            <div class="w-[230px] animate-bounce hidden lg:block self-center lg:self-start font-peyda-bold h-10 bg-[#33383D] text-[#C59D5F]" style="clip-path: polygon(0 0%, 100% 0, 94% 50%, 100% 100%, 0 100%, 7% 50%);">
          <h2 class="self-center flex justify-center py-[10px] "> به زعفران لوکس خوش آمدید</h2>
        </div>
        <div class="flex items-start">
        </div>
        <div class="flex lg:justify-normal  justify-center">
          <h3 id="typing" class="text-center  lg:text-start text-[30px] lg:text-[50px] font-peyda-bold text-white" style="-webkit-text-stroke: 1px #C59D5F ;">
         
        </h3>
        </div>
        <transition name="p">
          <p v-if="apper1" class="text-[17px] leading-8 lg:text-start text-center font-peyda-noraml text-[#9AA3A7]">
         تالار سرخ معتبرترین مجموعه در زمینه خرید وفروش و توزیع انواع زعفران از کشاورز تا خانه شما 
        </p>
        </transition>
        <transition name="p">
          <button v-if="apper2" class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl text-[#181D23] w-fit">ادامه خواندن</button>
        </transition>
      </div>
        <div class=" justify-center items-center flex order-1 lg:order-2 w-full lg:w-[50%] p-[60px]">
            <card ></card>
        </div>
        
      </div>
        <div class="bg-[#0E1317] w-full flex relative">
        <img class="absolute opacity-10 top-[200px] -left-[40px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">

          <div class="flex flex-wrap gap-10 py-20 items-center w-[75%] mx-auto justify-between text-[#9AA3A7]">
            <items>
              <img class="w-[50%] h-[120px] img-fade" src="../assets/img/slide2.webp" alt="">
              <h2 class="text-[22px] text-center font-peyda-bold about">مشخصات زعفران زراعی</h2>
              <p class="text-[14px] h-[170px] font-peyda-noraml text-center   ">زعفران مزروعی مانند زعفران های زینتی گیاهی است علفی، دائمی و دارای ساقههای زیر زمینی یا بنه میباشد که در بین کشاورزان به پیاز زعفران مشهور است. پوشش روی بنه از نوع الیاف طولی موازی به رنگ قهوه ای است ... </p>
              <nuxt-link to="blog/1" class="underline-offset-[10px] font-peyda-bold text-[15px] text-[#C59D5F] underline"> اطلاع بیشتر</nuxt-link>
            </items>
            <items>
              <img class="w-[50%] h-[120px] img-fade" src="../assets/img/slide4.webp" alt="">
              <h2 class="text-[22px] text-center font-peyda-bold about ">موارد مصرف زعفران</h2>
              <p class="text-[14px] h-[170px] font-peyda-noraml text-center  "> موارد استفاده از زعفران در جهان بسیار متعدد است و به سبب رنگ زیبا، عطر و طعم دلپذیر و خواص دارویی که دارد، کاربردهای عمده زیر را می توان برای آن برشمرد</p>
              <nuxt-link to="blog/2" class="underline-offset-[10px] font-peyda-bold text-[15px] text-[#C59D5F] underline "> اطلاع بیشتر</nuxt-link>
            </items>
            <items>
              <img class="w-[50%] h-[120px] img-fade" src="../assets/img/slide3.webp" alt="">
              <h2 class="text-[22px] text-center font-peyda-bold about ">نگه داری زعفران</h2>
              <p class="text-[14px] h-[170px] font-peyda-noraml text-center  "> زعفران را باید در یک محیطی که خشک و تاریک است و از آب و هوایی خنک و مرطوب برخوردار است نگه داری کنید و هرگز آنرا در مقابل تابش مستقیم نور خورشید قرار ندهید چراکه موجب کاهش رنگ زعفران می شود ...</p>
              <nuxt-link to="blog/3" class="underline-offset-[10px] font-peyda-bold text-[15px] text-[#C59D5F] underline"> اطلاع بیشتر</nuxt-link>
            </items>
          </div>
        </div>
        <div class="flex relative lg:flex-row flex-col mx-auto justify-center w-full gap-2 ">
        <img class="absolute opacity-10 top-[200px] -right-[40px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">

          <!-- <div class="flex flex-col justify-center py-[100px] lg:items-start items-center lg:w-[15%] gap-4 ">
            <h2 class="text-[20px] font-peyda-bold border-b-2 w-fit border-[#C59D5F] pb-2 text-[#C59D5F] ">
              معرفی اعضا
            </h2>
            <div class="flex flex-col  ">
              <div class="flex  items-center gap-2">
                <img class="w-10 rounded-full" src="../assets/img/sadegh.jpg" alt="">
              <h2 class="text-[18px] font-peyda-bold">علی حقانی</h2>
              </div>
              <p class="text-[14px] text-[#C59D5F] font-peyda-noraml pr-12">مدیر عامل</p>
            </div>
            <div class="flex gap-2 items-center lg">
              <img class="w-10 rounded-full" src="../assets/img/sadegh.jpg" alt="">
              <h2 class="text-[18px] font-peyda-bold">صادق ملول</h2>
            </div>
          </div> -->
          <img class="lg:w-[60%] w-full img-fadebanner " src="../assets/img/banner.webp" alt="">
          <div class="flex flex-col w-full py-[50px] lg:py-[100px] justify-center gap-4 items-center lg:items-start lg:w-[22%]">
            <h2 class="text-[20px] font-peyda-bold border-b-2 border-[#C59D5F] pb-2  text-[#C59D5F] ">
              اطلاعات مجموعه
            </h2>
            <div class="flex lg:flex-row flex-col gap-2 lg:w-fit w-[70%] mx-auto items-center">
              <svgs-location></svgs-location>
<h2 class="lg:text-[14px] text-[14px] leading-7 font-peyda-bold about lg:text-start text-center ">آدرس : مشهد شهرک صنعتی توس فاز دوم اندیشه 8 پلاک 310 </h2>
            </div>
            <div class="flex lg:flex-row flex-col items-center gap-2">
              <svgs-call></svgs-call>
<h2 class="lg:text-[14px] text-[14px] font-peyda-bold about ">شماره تماس : <a href="tel:05138660072"> 8660072-0513 </a></h2>
            </div>
          </div>
        </div>
        <div class="flex w-full borderline mt-20 py-4">
          <div class="flex mx-auto">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <img class=" top-[260px] opacity-30 -left-[40px] w-[35px] rotate-45" src="../assets/img/pattern.svg" alt="">
          </div>
        </div>
        <div class="relative">
          <img class="absolute top-[260px] opacity-10 -left-[40px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">
          <div class="flex flex-col lg:flex-row py-10 mx-auto items-center w-[75%] gap-10 justify-between ">
            <img class="img-fade w-full lg:w-[50%] h-[50%]" src="../assets/img/slide6.webp" alt="">
            <div class="flex flex-col py-6 lg:py-20 gap-6 lg:gap-3 lg:w-[50%] ">
              <h2 class="text-[#C59D5F] text-[22px] font-peyda-bold lg:text-start text-center">درباره ما</h2>
              <h2 class="lg:text-[45px] text-[30px] text-center lg:text-start font-peyda-bold about1 ">بهترین و تازه ترین زعفران ها را در تالار سرخ بیابید</h2>
              <p class=" text-[#9AA3A7] text-center lg:text-start font-peyda-noraml"> تمامی محصولات ما دارای نشان سلامت و استاندارد بوده و هست پس با خیال راحت و آسوده خرید کنید </p>
              <div class="flex lg:flex-row flex-col gap-4">
                <black-card>
                  <div class="flex  flex-col items-center gap-6">
                    <img class="w-[120px] img-fade" src="../assets/img/card1.webp" alt="">
                    <h2 class="text-[15px] font-peyda-bold text-[#C59D5F]">زعفران نگین</h2>
                  </div>
                  <p class="text-[12px] text-center  lg:text-[14px] font-peyda-noraml">این مدل زعفران دارای کلاله بدون خامه مادگی گیاه میباشد، دارای کلاله پهن ، بدون رگهای سیاه ...</p>
                </black-card>
                <black-card>
                  <div class="flex  flex-col items-center gap-6">
                  <img  class="w-[120px] img-fade" src="../assets/img/card2.webp" alt="">
                    <h2 class="text-[15px] whitespace-nowrap font-peyda-bold text-[#C59D5F]">زعفران پوشال </h2>
                  </div>
                  <p class="text-[12px] text-center  lg:text-[14px]  font-peyda-noraml" >این مدل زعفران دارای کلاله همراه با قسمتی از خامه مادگی گیاه زعفران 2 میلیمتر خامه میباشد ... </p>
                </black-card> 
              </div>
  
            </div>
          </div>
        </div>
    </div>
    
    <div class="relative">
      <img class="absolute top-[260px] opacity-10 -left-[40px] w-[100px] rotate-45" src="../assets/img/pattern.svg" alt="">
    <div class="flex  lg:flex-row flex-col lg:w-[75%] w-[90%] py-10 lg:py-16 justify-between mx-auto" >
      <form class="flex flex-col lg:order-1 order-2 border-[20px] rounded-[10px] border-[#12151a] p-8 gap-6 lg:w-[40%]">
        <h2 class="text-[30px] font-peyda-bold text-[#C59D5F]">نظر سنجی</h2>
        <div class="flex flex-col gap-4">
        <input placeholder="نام" class="bg-[#181D23] placeholder:font-peyda-bold placeholder:text-[#C59D5F]   w-full py-2 rounded-md lg:py-4 px-2" type="text">
        <input placeholder="تلفن" class="bg-[#181D23] placeholder:font-peyda-bold placeholder:text-[#C59D5F]   w-full py-2 rounded-md lg:py-4 px-2" type="number" >
        <input placeholder="ایمیل" class="bg-[#181D23] placeholder:font-peyda-bold placeholder:text-[#C59D5F]   w-full py-2 rounded-md lg:py-4 px-2" type="email">
        <input placeholder="نظر" class="bg-[#181D23] placeholder:font-peyda-bold placeholder:text-[#C59D5F]   w-full py-2 rounded-md lg:py-4 px-2" type="text">
        <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl w-full text-[#181D23] ">ثبت نظر</button>

        </div>
              
      </form>
      <img class="img-fade lg:order-2 order-1 lg:w-[40%] " src="../assets/img/form.webp">
      </div>
    </div>
      <div class=" w-[80%] mx-auto">
        <h2 class="text-[#C59D5F] text-[22px] font-peyda-bold lg:text-start text-center"> شرکای تجاری :</h2>
        
      </div>
      <Partnersslider class="py-10"></Partnersslider>
      <myfooter></myfooter>
        </div>
</template>
<style scoped>
.router-link-exact-active {
background: #C59D5F;
    background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.img-class{
  
  background: linear-gradient(285deg, #050302 0%, #424242 44.78%, #050302 100%);
  /* border-top: 1px solid var(--gray-color-white, #FBC16A);   */
  /* box-shadow: 3.1762px 3.1762px 6.3524px 0px rgba(255, 255, 255, 0.25), -3.1762px -3.1762px 6.3524px 0px rgba(255, 255, 255, 0.25); */
  }
  .v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
  .p-enter-active,
.p-leave-active {
  transition: all 0.75s ease;
}

.p-enter-from,
.p-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

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
<script setup>
import {ref,onMounted,onUpdated,onUnmounted} from 'vue'
var i = ref(0);
var txt = ref('هلدینگ طلای سرخ مهستان')
var speed = ref(60);
var intervaltest = ""
let apper1 = ref(false)
let apper2 = ref(false)
onUnmounted(() => {
  try {
    clearInterval(intervaltest)
    document.getElementById("typing").innerHTML=""
  } catch {
  }
}),
onMounted(()=>{
    setTimeout(()=>{
      apper1.value = true
      apper2.value = true
    },1800)

  
  function typeWriter() {
    try {
      document.getElementById("typing").innerHTML=""
      clearInterval( intervaltest);
    } catch {}
    var ntext = txt.value;
    i.value = 0;
    intervaltest = setInterval(() => {
    document.getElementById("typing").innerHTML += ntext.charAt(i.value);
    i.value++;
    if(i.value >= ntext.length){
      clearInterval(intervaltest);
    }
    }, speed.value);
}
typeWriter()

})
var Dropdown = ref(false)
</script>