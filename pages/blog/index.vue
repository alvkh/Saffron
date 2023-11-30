<template>
    <div class="flex flex-col">
        <navbar></navbar>
        <div class="bg-[#181D23] flex flex-col lg:flex-row ">
          <div class="flex lg:flex-row flex-col lg:w-[85%] gap-4 lg:gap-16 mx-auto py-10">
            <div class="grid order-2 lg:grid-cols-3 gap-1 gap-y-6 lg:gap-7 p-4 lg:p-0 lg:w-[75%]">
             <Blogitems :imgsrc="img1" link="/blog/1" :text="json[1].title">
              </Blogitems>
              <Blogitems :imgsrc="img2" link="/blog/2" :text="json[2].title">
              </Blogitems>
              <Blogitems :imgsrc="img3" link="/blog/3" :text="json[3].title">
              </Blogitems>
              <Blogitems :imgsrc="img4" link="/blog/4" :text="json[4].title">
              </Blogitems>
              <Blogitems :imgsrc="img5" link="/blog/4" :text="json[4].title">
              </Blogitems>
              <Blogitems :imgsrc="img6" link="/blog/4" :text="json[4].title">
              </Blogitems>
            </div>
          <div class="flex order-1 flex-col lg:w-[25%] p-4 lg:p-0 gap-10">
            <div class="flex">
              <input placeholder="جستجو..." class="w-full focus:outline-none font-peyda-bold p-2" type="text">
              <div class="bg-[#C59D5F] p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#ffffff"/>
              <path d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z" fill="#ffffff"/>
               </svg>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              
              <h2 class="text-[20px] font-peyda-bold py-2 border-b-[3px] border-[#C59D5F] lg:w-fit">دسته بندی ها</h2>
              
              <ul class="flex flex-col gap-4 items-center">
                <Catagorys text="نگین"></Catagorys>
                <Catagorys text="پوشال"></Catagorys>
              </ul>
            </div>
            <div class="lg:flex flex-col gap-4 hidden">
                          <h2 class="text-[20px] font-peyda-bold py-2 border-b-[3px] border-[#C59D5F] lg:w-fit">پستهای اخیر</h2>
              
              <ul class="flex flex-col gap-4 ">
                <Pastpost :imgsrc="img1">

                </Pastpost>
                <Pastpost :imgsrc="img3">

                </Pastpost>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4 gap-4 lg:hidden">
                        <h2 class="text-[20px] font-peyda-bold py-2 border-b-[3px] border-[#C59D5F] lg:w-fit">پستهای اخیر</h2>
            
            <ul class="flex flex-col gap-4 ">
              <Pastpost :imgsrc="img1">

              </Pastpost>
              <Pastpost :imgsrc="img3">

              </Pastpost>
            </ul>
          </div>
        </div>
        <Myfooter></Myfooter>
    </div>
</template>
<script setup>
import json from '../../json/blog.json'
import img1 from '../../assets/img/blog/1.webp'
import img2 from '../../assets/img/blog/2.webp'
import img3 from '../../assets/img/blog/3.webp'
import img4 from '../../assets/img/blog/5.webp'
import img5 from '../../assets/img/blog/6.webp'
import img6 from '../../assets/img/blog/7.webp'


</script>