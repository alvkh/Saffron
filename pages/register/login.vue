<template>
    <div class="flex flex-col ">
        <navbar></navbar>
        <div class="w-full h-screen bg-hero-pattern justify-center flex items-center bg-cover">
            <div class="flex flex-col p-8 gap-4 lg:w-[50%] lg:gap-10 lg:h-[60%] opa-div justify-center rounded-xl z-10">
                <h2 class="text-[24px] font-peyda-bold text-[#C59D5F] text-center">
                    ورود
                </h2>
                <form action="" class="flex opacity-100 gap-4 flex-col lg:w-[45%] self-center">
                    <div class="flex flex-col gap-2 font-peyda-bold">
                    <input class="p-[6px] rounded-md outline-none placeholder:text-[#C59D5F]"  placeholder="نام کاربری" type="text">
                    </div>
                    <div class="flex flex-col gap-2 font-peyda-bold">
                    <input class="p-[6px] rounded-md outline-none placeholder:text-[#C59D5F] " placeholder="کلمه عبور"  type="password">
                    </div>
<button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">ورود</button> 

                </form>
                <h2 class="font-peyda-bold text-center lg:text-[16px] text-[12px]"> حساب کاربری ندارید <nuxt-link to="/register/signin" class="px-2 font-peyda-bold text-[#C59D5F]"> ثبت نام </nuxt-link></h2>
            </div>
        </div>
    </div>
</template>
<style scoped>
.opa-div{
background-color: rgba(24, 29, 35, 0.548);
zoom: 1;
float: left;
clear: both;
/*opacity:0.4;
filter: alpha(opacity = 40);*/
}
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  display: block;
  margin: 0;
}
</style>