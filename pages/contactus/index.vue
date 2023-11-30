<template>
    <div class="flex h-screen flex-col">
        <navbar></navbar>
        <div class="flex items-center lg:justify-normal justify-center lg:p-8 bg-contactus bg-cover">
            <div class="flex flex-col lg:w-[40%] h-[670px] justify-center lg:justify-normal lg:h-[750px] gap-4 rounded-lg p-6 opa-div ">
                <h2 class="lg:text-[32px] lg:text-start text-center text-[20px] font-peyda-bold text-[#C59D5F]">
                    ارتباط با ما
                </h2> 
                <p class="text-[12px] lg:text-[18px] lg:w-[60%] leading-7 lg:text-start text-center font-peyda-noraml">در صورت وجود هر گونه انتقاد و پیشنهاد میتواند با استفاده از فرم زیر ما را در جریان قرار بدهید .</p>
                <form action="" class="flex gap-4 flex-col caret-[#C59D5F] lg:w-[80%] ">
                    <div class="flex flex-col gap-2 font-peyda-bold">
                    <input class="p-[6px] rounded-md outline-none placeholder:text-[#C59D5F] " placeholder="نام" type="text">
                    </div>
                    <div class="flex flex-col gap-2 font-peyda-bold">
                    <input class="p-[6px] rounded-md outline-none placeholder:text-[#C59D5F] " type="email" placeholder="ایمیل">
                    </div>
                    <div class="flex flex-col gap-2 font-peyda-bold">
                    <textarea :rows="5" class="p-[6px] rounded-md outline-none resize-none placeholder:text-[#C59D5F]" type="text" placeholder="متن پیام"></textarea>
                    </div>
<button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit my-10">ثبت</button> 
                </form>
            </div>
        </div>
        <Myfooter></Myfooter>
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
</style>