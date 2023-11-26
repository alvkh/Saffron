
import Dropdown from 'primevue/dropdown';
<template>
    <div class="flex flex-col ">
        <!-- navbar -->
        <!-- mobile -->
        <div  class="lg:hidden flex h-[80px] justify-between bg-[#0E1317] items-center w-[85%] mx-auto">
          <img src="../assets/img/nav-img.svg" alt="">
          <svg @click="Dropdown = true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 15 24" fill="none">
            <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#C59D5F"/>
          <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#C59D5F"/>
          <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#C59D5F"/>
       </svg>
       <div @click="Dropdown=false" v-if="Dropdown" class="fixed top-0 z-10 left-0 w-screen h-screen bg-black opacity-40" />
        <transition>
          <div v-if="Dropdown" class="fixed py-10 font-peyda-bold top-0 right-0 flex flex-col gap-4 items-center justify-center w-full z-20 bg-[#0E1317]">
          <nuxt-link to="/newpage">خانه</nuxt-link>
          <nuxt-link to="/">صفحات</nuxt-link>
          <nuxt-link to="/">منو</nuxt-link>
          <nuxt-link to="/">فروشگاه</nuxt-link>
          <nuxt-link to="/">وبلاگ</nuxt-link>
          <nuxt-link to="/">تماس با ما</nuxt-link>
      </div>
        </transition>      
        </div>
       <!-- mobile -->
        <!-- desktop -->
        <div class="bg-[#0E1317] h-[80px] hidden lg:flex items-center w-full">
            <div class=" font-peyda-bold w-[85%] mx-auto text-[#ABB8C3] text-[18px] flex items-center justify-between bg-[#0E1317] h-[100px]">
        <img src="../assets/img/nav-img.svg" alt="">
        <div class="flex gap-10 items-center">
            <nuxt-link to="/newpage">خانه</nuxt-link>
            <nuxt-link to="/">صفحات</nuxt-link>
            <nuxt-link to="/">منو</nuxt-link>
            <nuxt-link to="/">فروشگاه</nuxt-link>
            <nuxt-link to="/">وبلاگ</nuxt-link>
            <nuxt-link to="/">تماس با ما</nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#C59D5F"/>
       <path d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z" fill="#C59D5F"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="#C59D5F"/>
  <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="#C59D5F"/>
  <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#C59D5F"/>
  <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="#C59D5F"/>
</svg>
<button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl text-[#181D23] w-fit">سبد خرید</button>

        </div>
        </div>
        </div>
        <!-- desktop end -->
        <!-- navbar end -->
        <div class="w-full py-10 bg-[#181D23] ">
         <div class=" lg:flex-row flex-col flex lg:gap-10 " >
          <div class="w-[230px] lg:hidden self-center lg:self-start font-peyda-bold h-10 bg-[#33383D] text-[#C59D5F]" style="clip-path: polygon(0 0%, 100% 0, 94% 50%, 100% 100%, 0 100%, 7% 50%);">
          <h2 class="self-center flex justify-center py-[10px]"> به تالار سرخ خوش آمدید</h2>
          </div>
          <div class="flex px-[100px] lg:p-[100px] pb-[25px] lg:pb-0 lg:py-[30px] flex-col justify-center w-full lg:w-[50%] order-2 lg:order-1 gap-8">
            <div class="w-[230px] hidden lg:block self-center lg:self-start font-peyda-bold h-10 bg-[#33383D] text-[#C59D5F]" style="clip-path: polygon(0 0%, 100% 0, 94% 50%, 100% 100%, 0 100%, 7% 50%);">
          <h2 class="self-center flex justify-center py-[10px]"> به تالار سرخ خوش آمدید</h2>
          </div>
        <h3 class="text-center lg:text-start text-[35px] lg:text-[50px] font-peyda-bold text-white">
        تالار سرخ ارائه دهنده سرویس ها و خدمات زعفران 
        </h3>
        <p class="text-[17px] leading-8 lg:text-start text-center  font-peyda-noraml text-[#FDFDFD]">
         تالار سرخ معتبرترین مجموعه در زمینه خرید وفروش و توزیع انواع زعفران از کشاورز تا خانه شما 
        </p>
        <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl text-[#181D23] w-fit">ادامه خواندن</button>
        </div>
        <div class=" justify-center items-center flex order-1 lg:order-2 w-full lg:w-[50%] p-[60px]">
            <card ></card>
        </div>
         </div>
        <div class="bg-[#0E1317] w-full flex">
          <div class="flex flex-wrap gap-14 py-20 items-center w-[75%] mx-auto justify-between text-[#9AA3A7]">
            <items>
              <img class="w-[50%] img-fade" src="../assets/img/slide2.png" alt="">
              <h2 class="text-[30px] font-peyda-bold">محصولات تازه</h2>
              <p class="text-[16px] font-peyda-noraml text-center lg:text-start "> لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است</p>
              <a href="#" class="underline-offset-[10px] underline"> اطلاع بیشتر</a>
            </items>
            <items>
              <img class="w-[50%] img-fade" src="../assets/img/slide4.png" alt="">
              <h2 class="text-[30px] font-peyda-bold">محصولات تازه</h2>
              <p class="text-[16px] font-peyda-noraml text-center lg:text-start "> لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است</p>
              <a href="#" class="underline-offset-[10px] underline"> اطلاع بیشتر</a>
            </items>
            <items>
              <img class="w-[50%] img-fade" src="../assets/img/slide3.png" alt="">
              <h2 class="text-[30px] font-peyda-bold">محصولات تازه</h2>
              <p class="text-[16px] font-peyda-noraml text-center lg:text-start "> لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است</p>
              <a href="#" class="underline-offset-[10px] underline"> اطلاع بیشتر</a>
            </items>
            <items>
              <img class="w-[50%] img-fade" src="../assets/img/slide5.png" alt="">
              <h2 class="text-[30px] font-peyda-bold">محصولات تازه</h2>
              <p class="text-[16px] font-peyda-noraml text-center lg:text-start "> لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است لورم اپیسوم یک متن ساختگی است</p>
              <a class="underline-offset-[10px] underline" href="#"> اطلاع بیشتر</a>
            </items>
          </div>
        </div>
        <div class="flex lg:flex-row flex-col mx-auto justify-center w-full gap-2 ">
          <div class="flex flex-col justify-center py-[100px] lg:items-start items-center lg:w-[15%] gap-4 ">
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
          </div>
          <img class="lg:w-[60%] w-full img-fadebanner " src="../assets/img/banner.png" alt="">
          <div class="flex flex-col w-full py-[100px] justify-center gap-4 items-center lg:items-start lg:w-[15%]">
            <h2 class="text-[20px] font-peyda-bold border-b-2 border-[#C59D5F] pb-2  text-[#C59D5F] ">
              اطلاعات مجموعه
            </h2>
            <div class="flex gap-1 items-center">
              <svgs-location></svgs-location>
<h2 class="text-[16px]">ادرس : مشهد </h2>
            </div>
            <div class="flex items-center gap-1">
              <svgs-call></svgs-call>
<h2 class="text-[16px]">شماره تماس : 0999999999</h2>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row py-10 mx-auto w-[75%] gap-10 justify-between">
          <img class="img-fade w-full lg:w-[50%]" src="../assets/img/slide6.png" alt="">
          <div class="flex flex-col py-20 gap-6 lg:gap-3 lg:w-[50%]">
            <h2 class="text-[#C59D5F] text-[22px] font-peyda-bold lg:text-start text-center">درباره ما</h2>
            <h2 class="lg:text-[50px] text-[36px] text-center lg:text-start font-peyda-bold  ">بهترین و تازه ترین زعفران ها را در تالار سرخ بیابید</h2>
            <p class=" text-[#9AA3A7] text-center lg:text-start font-peyda-noraml"> تمامی محصولات ما دارای نشان سلامت و استاندارد بوده و هست پس با خیال راحت و آسوده خرید کنید </p>
            <div class="flex gap-4">
              <black-card>
                <div class="flex lg:flex-row flex-col items-center gap-10">
                  <img class="w-[120px] img-fade" src="../assets/img/card1.png" alt="">
                  <h2 class="text-[22px] font-peyda-bold text-[#C59D5F]">زعفران 1</h2>
                </div>
                <p class="text-[12px] text-center lg:text-start lg:text-[14px] font-peyda-noraml">زعفران مرغوب اصیل ایرانی مناسب هر مزاج برای بهبمود عملکرد عصبی و حال بهتر</p>
              </black-card>
              <black-card>
                <div class="flex lg:flex-row flex-col items-center gap-10">
                <img  class="w-[120px] img-fade" src="../assets/img/card2.png" alt="">
                  <h2 class="text-[22px] font-peyda-bold text-[#C59D5F]">زعفران 2</h2>
                </div>
                <p class="text-[12px] text-center lg:text-start lg:text-[14px]  font-peyda-noraml" >زعفران مرغوب اصیل ایرانی مناسب هر مزاج برای بهبمود عملکرد عصبی و حال بهتر</p>
              </black-card> 
            </div>

          </div>
        </div>
    </div>
    <div class="flex lg:flex-row flex-col lg:w-[75%] w-[90%] py-10 lg:py-16 justify-between mx-auto" >
      <form class="flex flex-col lg:order-1 order-2 border-[20px] rounded-[10px] border-[#181D23] p-8 gap-10 lg:w-[40%]">
        <h2 class="text-[30px] font-peyda-bold text-[#C59D5F]">نظر سنجی</h2>
        <div class="flex flex-col gap-4  ">
        <input placeholder="متن تست" class="bg-[#181D23] placeholder:font-peyda-noraml placeholder:p-2 w-full py-4" type="text">
        <input placeholder="متن تست" class="bg-[#181D23] placeholder:font-peyda-noraml placeholder:p-2 w-full py-4" type="text">
        <input placeholder="متن تست" class="bg-[#181D23] placeholder:font-peyda-noraml placeholder:p-2 w-full py-4" type="text">
        <input placeholder="متن تست" class="bg-[#181D23] placeholder:font-peyda-noraml placeholder:p-2 w-full py-4" type="text">
        <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl w-full text-[#181D23] ">ثبت نظر</button>

        </div>
              
      </form>
      <img class="img-fade lg:order-2 order-1 lg:w-[40%] " src="../assets/img/form.png">
      </div>

    <div class="w-full bg-[#0E1317]">
      <div class="lg:w-[75%] flex-col lg:flex-row lg:px-0 px-4 items-center lg:items-start justify-between mx-auto flex  py-12 gap-10">
        <div class="flex flex-col  gap-7">
          <img class="w-[100px] lg:self-start self-center img-fade" src="../assets/img/slide0.png" alt="">
          <p class="text-[16px] font-peyda-bold text-[#9AA3A7]"> تالار سرخ معتبر ترین مرجع خرید و فروش زعفران در ایران</p>
          <div class="flex gap-2 items-center lg:self-start self-center">
            <img src="../assets/img/Rectangle1.svg" alt="">
            <img src="../assets/img/Rectangle2.svg" alt="">
            <img src="../assets/img/Rectangle3.svg" alt="">
            <img src="../assets/img/Rectangle4.svg" alt="">
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h2 class="text-[26px] font-peyda-bold text-white">لینکهای مفید</h2>
          <div class="flex flex-col gap-4 text-[18px] items-center lg:items-start font-peyda-bold  text-[#9AA3A7]">
            <h3>درباره ما</h3>
            <h3>وبلاگ</h3>
            <h3>خرید</h3>
            <h3>تماس با ما </h3>
          </div>
        </div>
        <div class="flex flex-col gap-4">
            <h2 class="text-[26px] font-peyda-bold lg:text-start text-center text-white">راه های ارتباطی</h2>
            <div class="flex flex-col gap-4 text-[18px] font-peyda-bold  text-[#9AA3A7]">
              <div class="flex gap-2 items-center">
                <div class=" w-12 h-12 rounded-full justify-center items-center flex bg-[#C59D5F]">
                   <svgs-call></svgs-call>
                </div>
                <h2 class="text-[16px] font-peyda-bold text-[#9AA3A7]">099-999-9999</h2>
              </div>
              <div class="flex gap-2 items-center">
                <div class=" w-12 h-12 rounded-full justify-center items-center flex bg-[#C59D5F]">
                   <svgs-location></svgs-location>
                </div>
                <h2 class="text-[16px] font-peyda-bold text-[#9AA3A7]">ادرس : مشهد بلوار معلم</h2>
              </div>
              <div class="flex gap-2 items-center">
                <div class=" w-12 h-12 rounded-full justify-center items-center flex bg-[#C59D5F]">
                   <svgs-mail></svgs-mail>
                </div>
                <h2 class="text-[16px] font-peyda-bold text-[#9AA3A7]">info@luxsaffron.ir</h2>
              </div>
              
            </div>
          </div>
      </div>
    </div>
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
import {ref} from 'vue'
var Dropdown = ref(false)
</script>