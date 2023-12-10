<template>
<div class="flex w-[95%] mx-auto  bg-[#0E1317] overflow-y-scroll p-4 overflow-x-hidden flex-col h-[88%] shadow-[#C59D5F] shadow rounded-lg font-peyda-bold gap-5 text-[16px]  relative py-[30px] ">
    <img class="absolute opacity-10 -top-[45px] -left-[45px] w-[100px] rotate-45"
                    src="../../../assets/img/pattern.svg" alt="">
    <h2 class="text-[#C59D5F] font-peyda text-[24px]" >حساب کاربری</h2>
    <div class="flex w-[90%] justify-between">
    <p class="text-[14px] font-peyda-noraml w-[50%]">در صورتی که هنگام ثبت نام اطلاعات خود را به اشتباه وارد کرده اید یا قصد تغییر آنها را دارید به راحتی می توانید در این قسمت به تنظیم دوباره اطلاعات خود بپردازید</p>
        <div class="flex flex-col gap-2 items-center">
            <div class="rounded-full img-fadebanner w-20 h-20 bg-[#C59D5F]"/>
            <h3>تصویر کاربر</h3>
        </div>
    </div>
    <button @click="change" class="bg-[#C59D5F] font-peyda-bold text-[16px] shadow-sm shadow-[#C59D5F] p-2 px-2 rounded-xl text-[#181D23] w-fit">{{ btnText }}</button>
    <div class="w-[90%] mx-auto flex gap-4 borderline p-4">
        <form class="flex items-center w-full justify-between " action="">
            <div class="flex flex-col w-[49%] gap-8">
                <input type="text" :disabled="dis" v-model="username" placeholder="نام"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="نام خانوادگی"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="نام کاربری"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="استان"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="شهر"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
            </div>
            <div class="flex flex-col w-[49%] gap-8">
                <input type="text" disabled v-model="username" placeholder="شماره تماس"
                     oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="تاریخ تولد"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="جنسیت"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="نوع همکاری"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                <input type="text" :disabled="dis" v-model="username" placeholder="ارگان"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
            </div>
        </form>
    </div>
    <p class="text-[14px] font-peyda-noraml">اگر قصد تغییر رمز عبور خود را دارید با استفاده از دکمه زیر نست به تغییر آن اقدام کنید</p>
    <button @click="change" class="bg-[#C59D5F] font-peyda-bold text-[16px] shadow-sm shadow-[#C59D5F] p-2 px-2 rounded-xl text-[#181D23] w-fit">تغییر رمز عبور</button>
</div>
</template>
<style>
.borderline {  
    border-width: 2px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to right,
      transparent 0%, 
      #C59D5F 50% , 
      transparent 100%
    ) 1 1  100%;

 }</style>
 <script setup>
 import {ref} from 'vue'
 const btnText = ref('تغییر مشخصات')
 const ischange = ref(false)
 const dis = ref(true)
 function change(){
    ischange.value = !ischange.value
    if(ischange.value == false){
        btnText.value = 'تغییر مشخصات'
        dis.value = true
    }else{
        btnText.value = 'ثبت تغییرات'
        dis.value = false
    }
 }

</script>