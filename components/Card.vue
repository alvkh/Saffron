<script setup>
import {onMounted} from 'vue'
import Splide from '@splidejs/splide';

import '@splidejs/splide/css';

onMounted(()=>{
    const option =new Splide("#splide1",{
        type : 'loop',
        direction:'rtl',
        arrows :false,
        pagination:false,
            autoplay : true,
    })
    option.mount()
})
</script>
<template>
    <div class="flex items-center ">
        <section id="splide1" class="splide" aria-label="Splide Basic HTML Example">
          <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide div-img img-fade" >
                        <img class="" src="../assets/img/slide0.webp" alt="">
                    </li>
                    <li class="splide__slide div-img img-fade" >
                        <img class="" src="../assets/img/slide1.webp" alt="">
                    </li>
                    <li class="splide__slide div-img img-fade">
                        <img src="../assets/img/slide2.webp" alt="">
                    </li>
                    <li class="splide__slide div-img img-fade">
                        <img src="../assets/img/slide3.webp" alt="">
                    </li>
                </ul>
          </div>
        </section>
    </div>
</template>
<style scoped>
.div-img{
background: skyblue;
padding: 0px;
}
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  display: block;
  margin: 0 auto
}
</style>



