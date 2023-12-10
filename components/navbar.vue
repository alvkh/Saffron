<template>
  <!-- navbar -->
  <!-- mobile -->
  <div class="bg-[#0E1317] w-full overflow-x-hidden">
    <div class="lg:hidden flex h-[100px] justify-between bg-[#0E1317] items-center w-[85%] mx-auto">
      <img class="w-[90px] lg:self-start self-center img-fade" src="../assets/img/slide0.webp" alt="">
      <svg @click="Dropdown = true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 15 24"
        fill="none">
        <path
          d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
          fill="#C59D5F" />
        <path
          d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
          fill="#C59D5F" />
        <path
          d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
          fill="#C59D5F" />
      </svg>
      <div @click="Dropdown = false" v-if="Dropdown"
        class="fixed top-0 z-10 left-0 w-screen h-screen bg-black opacity-40" />
      <transition>
        <div v-if="Dropdown"
          class="fixed py-10 font-peyda-bold top-0 right-0 flex flex-col gap-4 items-center justify-center w-full z-20 bg-[#0E1317]">
          <nuxt-link to="/">خانه</nuxt-link>
          <nuxt-link to="/">کاخ زعفران</nuxt-link>
          <nuxt-link to="/store/">محصولات</nuxt-link>
          <nuxt-link to="/blog">وبلاگ</nuxt-link>
          <nuxt-link to="/aboutus/">درباره ما</nuxt-link>
          <nuxt-link to="/contactus/">تماس با ما</nuxt-link>
          <nuxt-link to="/register/login">ورود / ثبت نام</nuxt-link>
        </div>
      </transition>
    </div>
  </div>
  <!-- mobile end -->
  <!-- desktop -->
  <div class="bg-[#0E1317] h-[100px] hidden lg:flex relative items-center w-full overflow-hidden">

    <div class=" font-peyda-bold w-[85%] mx-auto text-[#ABB8C3] text-[18px] flex items-center justify-between h-[100px]">
      <!-- <img src="../assets/img/nav-img.svg" alt=""> -->
      <div class="flex gap-2 items-center">
        <img class="w-[90px] lg:self-start self-center img-fade" src="../assets/img/slide0.webp" alt="">
        <h1 class="text-[20px] font-peyda-bold text-[#C59D5F] "> سمبلی از ظرافت و اشرافیت</h1>
      </div>

      <div class="flex gap-10 text-[16px] items-center">
        <nuxt-link to="/">خانه</nuxt-link>
        <nuxt-link to="/">کاخ زعفران</nuxt-link>
        <nuxt-link to="/store/">محصولات</nuxt-link>
        <nuxt-link to="/blog">وبلاگ</nuxt-link>
        <nuxt-link to="/aboutus/">درباره ما</nuxt-link>
        <nuxt-link to="/contactus/">تماس با ما</nuxt-link>
        <!-- <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-4 px-5 rounded-xl text-[#181D23] w-fit">سبد خرید</button> -->
        <nuxt-link to="/register/login"
          class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[16px] shadow-sm shadow-[#C59D5F] p-3 px-4 rounded-xl text-[#181D23] w-fit">ورود
          به تالار سرخ</nuxt-link>
      </div>
    </div>
  </div>
  <!-- desktop end -->
  <!-- navbar end -->
</template>
<script setup>
import { ref } from 'vue'
var Dropdown = ref(false)
</script>
<style scoped>
.img-fade {
  -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
  display: block;
  margin: 0;
}

.router-link-exact-active {
  background: #C59D5F;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-text {
  background: linear-gradient(to right, #C59D5F, #FF9933, #FFCC66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>