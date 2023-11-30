<script setup>
import {onMounted} from 'vue'
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

onMounted(()=>{
    const option =new Splide("#splide3",{
        type : 'loop',
        direction:'rtl',
        arrows :false,
        pagination:false,
        autoplay : true,
        perPage: 4,
        width : '100%',
        height : "200px",
        padding : '4px'
    })
    option.mount()
})
</script>
<template>
    <div class="flex items-center ">
        <section class="splide" id="splide3" aria-label="Splide Basic HTML Example">
          <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide div-img p-3  " >
                        <Saffroncard>
                            <img class="img-fade w-[120px] h-[120px] !m-0" src="../assets/img/type/1.webp" alt="">
                            <div class="flex flex-col justify-between gap-7">
                                <p class="text-[13px] font-peyda-noraml text-[#C59D5F]">
                                زعفران برتر سال
                            </p>
                            <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[14px] shadow-sm just shadow-[#C59D5F] p-1 px-2 rounded-xl w-full text-[#181D23] ">خرید</button>
                            </div>
                        </Saffroncard>
                    </li>
                    <li class="splide__slide div-img p-3 " >
                        <Saffroncard>
                            <img class="img-fade w-[120px] h-[120px] !m-0" src="../assets/img/type/2.webp" alt="">
                            <div class="flex flex-col justify-between gap-7">
                                <p class="text-[13px] font-peyda-noraml text-[#C59D5F]">
                                زعفران برتر سال
                            </p>
                            <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[14px] shadow-sm just shadow-[#C59D5F] p-1 px-2 rounded-xl w-full text-[#181D23] ">خرید</button>
                            </div>
                        </Saffroncard>
                    </li>
                    <li class="splide__slide div-img p-3 " >
                        <Saffroncard>
                            <img class="img-fade w-[120px] h-[120px] !m-0" src="../assets/img/type/3.webp" alt="">
                            <div class="flex flex-col justify-between gap-7">
                                <p class="text-[13px] font-peyda-noraml text-[#C59D5F]">
                                زعفران برتر سال
                            </p>
                            <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[14px] shadow-sm just shadow-[#C59D5F] p-1 px-2 rounded-xl w-full text-[#181D23] ">خرید</button>
                            </div>
                        </Saffroncard>
                    </li>
                    <li class="splide__slide div-img p-3 " >
                        <Saffroncard>
                            <img class="img-fade w-[120px] h-[120px] !m-0" src="../assets/img/type/4.webp" alt="">
                            <div class="flex flex-col justify-between gap-7">
                                <p class="text-[13px] font-peyda-noraml text-[#C59D5F]">
                                زعفران برتر سال
                            </p>
                            <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[14px] shadow-sm just shadow-[#C59D5F] p-1 px-2 rounded-xl w-full text-[#181D23] ">خرید</button>
                            </div>
                        </Saffroncard>
                    </li>
                    <li class="splide__slide div-img p-3 " >
                        <Saffroncard>
                            <img class="img-fade w-[120px] h-[120px] !m-0" src="../assets/img/type/5.webp" alt="">
                            <div class="flex flex-col justify-between gap-7">
                                <p class="text-[13px] font-peyda-noraml text-[#C59D5F]">
                                زعفران برتر سال
                            </p>
                            <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[14px] shadow-sm just shadow-[#C59D5F] p-1 px-2 rounded-xl w-full text-[#181D23] ">خرید</button>
                            </div>
                        </Saffroncard>
                    </li>
                    <li class="splide__slide div-img p-3 " >
                        <Saffroncard>
                            <img class="img-fade w-[120px] h-[120px] !m-0" src="../assets/img/type/6.webp" alt="">
                            <div class="flex flex-col justify-between gap-7">
                                <p class="text-[13px] font-peyda-noraml text-[#C59D5F]">
                                زعفران برتر سال
                                </p>
                            <button class="bg-[#C59D5F] self-center lg:self-start font-peyda-bold text-[14px] shadow-sm just shadow-[#C59D5F] p-1 px-2 rounded-xl w-full text-[#181D23] ">خرید</button>
                            </div>
                        </Saffroncard>
                    </li>
                </ul>
          </div>
        </section>
    </div>
</template>
<style scoped>

.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  display: flex;
  margin: 0 auto;

}

</style>



