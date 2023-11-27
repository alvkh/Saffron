<template>
    <div class="flex flex-col ">
        <navbar></navbar>
        <div class="w-full h-screen bg-hero-pattern justify-center flex items-center bg-contain">
            <div class="flex flex-col p-8 w-[50%] gap-10 h-[60%] opa-div bg-[#181D23] justify-center rounded-xl z-10">
                <h2 class="text-[24px] font-peyda-bold text-[#C59D5F] text-center">
                    ورود
                </h2>
                <form action="" class="flex opacity-100 gap-4 flex-col w-[45%] self-center">
                    <div class="flex flex-col gap-2 font-peyda-bold">
                        <label for="" class="font-peyda-bold text-[#C59D5F]">نام کاربری :</label>
                    <input class="p-[6px] rounded-md outline-none " type="text">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-peyda-bold text-[#C59D5F]" for=""> کلمه عبور: </label>
                    <input class="p-[6px] rounded-md outline-none " type="password">
                    </div>
<button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">ورود</button> 

                </form>
                <nuxt-link to="/" class="font-peyda-bold text-center"> حساب کاربری ندارید <span class="px-2 font-peyda-bold text-[#C59D5F]"> ثبت نام </span></nuxt-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.opa-div{
background-color: rgba(51, 169, 238, 0.048);
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