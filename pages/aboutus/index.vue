<template>
    <div class="flex flex-col bg-[#181D23]">
        <navbar></navbar>
        <div class="flex lg:gap-10 gap-4 flex-col w-[75%] mx-auto py-8 lg:py-16">
            
            <img class="mx-auto img-fadebanner self-center lg:w-[60%] " src="../../assets/img/about/aboutbanner.webp" alt="">
            
            <h2 class="text-[#C59D5F] font-peyda-bold text-[22px] lg:text-[28px] text-center">درباره ما</h2>
            <div class="flex flex-col lg:gap-0 gap-4 lg:flex-row justify-between items-center borderline py-5">
                <img class="lg:w-[40%] img-fade" src="../../assets/img/about/1.webp" alt="">
                <p class="text-[14px] text-center lg:text-start lg:text-[18px] font-peyda-noraml  ">
                    زعفران به عنوان یک ادویه در غذا بدون محدودیت می تواند استفاده شود. اما برای استفاده از زعفران خالص و سالم باید بررسی‌های لازم انجام شود تا محصولات ارگانیک در سلامت کامل به بازار جهانی ارائه گردد. کمپانی لوکس سافرون با استاندارد های روز جهانی بر اساس مصوبات سازمان بین المللی استاندارد در سال ۱۹۹۴ زعفران رشته یا پودر شده محصولات خود را ارایه مینماید ..
                </p>
            </div>
            <div class="flex flex-col lg:gap-0 gap-4 lg:flex-row justify-between items-center borderline py-5">
                <p class="text-[14px] text-center lg:text-start lg:text-[18px] font-peyda-noraml order-2 lg:order-1 ">
                    بررسی کیفیت زعفران لوکس سافرون از جنبه های مختلف از جمله خصوصیات فیزیکی، شیمیایی، میکروبی، قارچ و غیره مورد بررسی و آزمون قرار می‌گیرد. اغلب این بررسی‌ها به جهت مطابقت با استاندارد بین المللی iso ۳۶۳۲ می‌باشد. چرا که این استاندارد در بین تمامی کشورها مورد قبول است.
                </p>
                <img class="lg:w-[40%] lg:order-2 order-1 img-fade" src="../../assets/img/about/3.webp" alt="">
            </div>
            <div class="flex flex-col lg:gap-0 gap-4 lg:flex-row justify-between items-center py-5">
                <img class="lg:w-[40%] img-fade" src="../../assets/img/about/2.webp" alt="">
                <p class="text-[14px] text-center lg:text-start lg:text-[18px] font-peyda-noraml ">
                    در سطح بین المللی تهیه محصولات مطابق با استاندارد بین المللی ISO 3632 و استانداردهای بین المللی ایمنی مواد غذایی ، 22000 ، FSSC HACCP تضمین کیفیت زعفران انجام می‌شود که به معیارهایی جهانی و یکسان برای تمامی کشورهای دنیا به شمار می‌آید.
                </p>
            </div>
            
        </div>
        <myfooter></myfooter>
    </div>
</template>
<style scoped>
.img-fadebanner{
  -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 90%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 90%);
  display: block;

}
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  display: block;
  margin: 0;
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
    ) 0 1  100%;

 }

</style>