<template>
    <div class="w-[80%] contet mx-auto borderline flex justify-between gap-2">
        <div class="flex py-4 justify-around flex-col items-center ">
            <h2 class="text-[#C59D5F] font-peyda-bold text-[18px]" >محصول خریداری شده</h2>
            <p class="text-[13px] font-peyda-normal">زعفران</p>
            <p class="text-[13px] font-peyda-normal">تاریخ ارسال سفارش</p>
            <button  class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-1 px-4 rounded-xl text-[#181D23] w-fit">جزئیات </button>
        </div>
        <img class="w-[30%] h-[100%] img-fade" src="../assets/img/blog/4.webp" alt="">
    </div>
</template>
<style>
    .borderline {
        border-width: 1px;
        border-style: solid;
        border-image:
            linear-gradient(to right,
                transparent 0%,
                #C59D5F 50%,
                transparent 100%) 1 1 100%;

    }

</style>