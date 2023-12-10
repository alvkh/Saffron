<script setup>
import { onMounted } from 'vue'
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

onMounted(() => {
    const option = new Splide("#splide2", {
        type: 'loop',
        direction: 'rtl',
        arrows: false,
        pagination: false,
        autoplay: true,
        perPage: 3,
        breakpoints:{
            1024:{
                perPage:2,
            },720:{
                perPage:1,
            }
        } ,
        
        width: "100%",
        padding: '10px',
    })
    option.mount()
})
</script>
<template>
    <div class="">
        <section class="splide" id="splide2">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide ">
                        <partnercard class="flex-col p-4" style="width: 350px;">
                            <img class="w-[100px] h-[120px]" src="../assets/img/partners/arttizens.svg" alt="">
                            <h2 class="text-[20px] font-peyda-bold text-[#C59D5F] h-[40px]">شرکت نرم افزاری آرتیزنس</h2>
                        </partnercard>
                    </li>
                    <li class="splide__slide ">
                        <partnercard class="flex-col p-4" style="width: 350px;">
                            <img class="w-[100px] h-[120px] img-fadebanner"   src="../assets/img/partners/golchekan.jfif" alt="">
                            <h2 class="text-[20px] font-peyda-bold text-[#C59D5F] h-[40px]">گلچکان خراسان</h2>
                        </partnercard>
                    </li>
                    <!-- <li class="splide__slide ">
                        <Saffroncard class="flex-col" style="width: 350px;">
                            <img class="w-[100px] h-[120px] " src="../assets/img/partners/hoseini.png" alt="">
                            <h2 class="text-[20px] font-peyda-bold text-[#C59D5F]">برادران حسینی</h2>
                        </Saffroncard>
                    </li> -->
                </ul>
            </div>
        </section>
    </div>
</template>
<style scoped>
.img-fade {
    -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
    display: flex;
    margin: 0 auto;

}
</style>



