<template>
    <!-- navbar -->
        <!-- mobile -->
  <div class="bg-[#0E1317] w-full">
    <div class="lg:hidden flex h-[80px] justify-between bg-[#0E1317] items-center w-[85%] mx-auto">
          <img src="../assets/img/nav-img.svg" alt="">
          <svg @click="Dropdown = true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 15 24" fill="none">
            <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#C59D5F"/>
          <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#C59D5F"/>
          <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#C59D5F"/>
       </svg>
       <div @click="Dropdown=false" v-if="Dropdown" class="fixed top-0 z-10 left-0 w-screen h-screen bg-black opacity-40" />
        <transition>
          <div v-if="Dropdown" class="fixed py-10 font-peyda-bold top-0 right-0 flex flex-col gap-4 items-center justify-center w-full z-20 bg-[#0E1317]">
          <nuxt-link to="/">خانه</nuxt-link>
          <nuxt-link to="/store/">فروشگاه</nuxt-link>
          <nuxt-link to="/blog">وبلاگ</nuxt-link>
          <nuxt-link to="/aboutus/">درباره ما</nuxt-link>
          <nuxt-link to="/contactus/">تماس با ما</nuxt-link>
          <nuxt-link to="/register">ورود / ثبت نام</nuxt-link>
      </div>
        </transition>      
        </div>
  </div>
       <!-- mobile end -->
        <!-- desktop -->
        <div class="bg-[#0E1317] h-[100px] hidden lg:flex items-center w-full">
            <div class=" font-peyda-bold w-[85%] mx-auto text-[#ABB8C3] text-[18px] flex items-center justify-between bg-[#0E1317] h-[100px]">
        <!-- <img src="../assets/img/nav-img.svg" alt=""> -->
        <img class="w-[90px] lg:self-start self-center img-fade" src="../assets/img/slide0.png" alt="">
        <div class="flex gap-10 items-center">
          <nuxt-link to="/">خانه</nuxt-link>
          <nuxt-link to="/store/">فروشگاه</nuxt-link>
          <nuxt-link to="/blog">وبلاگ</nuxt-link>
          <nuxt-link to="/aboutus/">درباره ما</nuxt-link>
          <nuxt-link to="/contactus/">تماس با ما</nuxt-link>
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
<!-- <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl text-[#181D23] w-fit">سبد خرید</button> -->
<nuxt-link to="/register" class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl text-[#181D23] w-fit">ورود / ثبت نام</nuxt-link>
        </div>
        </div>
        </div>
        <!-- desktop end -->
        <!-- navbar end -->
</template>
<script setup>
import {ref} from 'vue'
var Dropdown = ref(false)

</script>
<style scoped>
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  display: block;
  margin: 0;
}
.router-link-exact-active {
background: #C59D5F;
    background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
</style>