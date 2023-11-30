<template>
    <div class="flex flex-col ">
        <navbar></navbar>
        <div class="w-full h-screen bg-hero-pattern justify-center flex items-center bg-cover img-fadebanner">
            <div class="flex flex-col p-8 lg:w-[50%] gap-10 lg:h-[60%] opa-div rounded-xl z-10">
                <h2 class="text-[24px] font-peyda-bold text-[#C59D5F] text-center">
                    ثبت نام
                </h2>
                <form action="" class="flex flex-col gap-8 justify-center font-peyda-bold">
                    <div v-if="step == 1"  class="flex flex-col gap-10">
                        <div class="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between w-[60%] mx-auto ">
                        <div class="flex lg:flex-row lg:gap-0 gap-2 flex-col items-center">
                        <input id="default-radio-1" v-model="radio" type="radio" value="مصرف کننده" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-1"
                            class="ms-2 text-[18px] font-peyda-noraml lg:w-fit w-full text-white lg:text-start text-center dark:text-[#C59D5F]">مصرف کننده</label>
                    </div>
                    <div class="flex items-center lg:flex-row lg:gap-0 gap-2 flex-col">
                        <input checked id="default-radio-2" v-model="radio" type="radio" value="تأمین کننده" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] lg:text-start text-center !shadowtext">تأمین کننده</label>
                    </div>
                </div>
                <input type="number" v-model="number" class="lg:w-[70%] p-[6px] rounded-lg mx-auto text-[#C59D5F] placeholder:text-[#C59D5F] " placeholder="شماره تماس" >
                <div class="text-[14px] self-center flex gap-2">
                    <p><span class="text-[#C59D5F] px-1">قوانین و مقررات</span> را خوانده ام</p>
                    <input type="checkbox" v-model="check">
                </div>
                <button @click.prevent="nextstep"
                    class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">ثبت
                    نام</button> 
                    </div>
                    <div class="flex flex-col gap-2 p-4" v-else-if="step == 2">
                        <input type="password" v-model="password" class="w-[70%] p-[6px] rounded-lg mx-auto text-[#C59D5F] placeholder:text-[#C59D5F] " placeholder="رمز عبور" >
                        <input type="password" v-model="passwordagain" class="w-[70%] p-[6px] rounded-lg mx-auto text-[#C59D5F] placeholder:text-[#C59D5F] " placeholder="نکرار رمز عبور" >
                        <button @click.prevent="nextstep2"
                    class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله بعد</button> 
                    </div>
                    <div class="flex flex-col gap-2 p-4" v-else-if="step == 3">
                        <h2 class="text-[18px] text-[#C59D5F] font-peyda-bold">نحوه آشنایی شما با ما چگونه است؟</h2>
                        <div class="flex items-center">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="سایت های خبری و اموزشی" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">سایت های خبری و اموزشی</label>
                        </div>
                        <div class="flex items-center">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="معرفی دوستان و آشنایان" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">معرفی دوستان و آشنایان</label>
                        </div>
                        <div class="flex items-center">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="شبکه های اجتماعی" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">شبکه های اجتماعی</label>
                        </div>
                        <div class="flex items-center">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="جستجو گوگل" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">جستجو گوگل</label>
                        </div>
                        <div class="flex items-center">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="سایر روش ها" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">سایر روش ها</label>
                        </div>
                        <p>{{ introradio }}</p>
                        
                        <button @click.prevent="nextstep3"
                    class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله بعد</button> 
                    </div>
                    <div class="grid grid-cols-2 items-center gap-2 " v-if="step == 4">
                        <div class="flex flex-col gap-2 ">
                        <input type="text"  placeholder="نام" class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                        <input type="text"  placeholder="نام خانوادگی" class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                        <input type="text"  placeholder="نام کاربری" class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                        <select class="text-[#C59D5F] p-[3px] rounded-lg" name="" id="">
                            <option v-for="items in states" :value="items">{{ items }}</option>
                        </select>
                        <input type="text"  placeholder=" شهر یا روستا (دستی وارد کنید)" class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                        </div>
                        <div class="flex flex-col gap-2 ">
                        <input type="text"  placeholder="ایمیل" class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                        <input type="text"  placeholder="تاریخ تولد" class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                        <div class="flex justify-between w-[60%] mx-auto">

                            <div class="flex items-center ">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="سایر روش ها" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">مرد</label>
                        </div>
                            <div class="flex items-center">
                        <input checked id="default-radio-2" v-model="introradio" type="radio" value="سایر روش ها" name="default-radio"
                            class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                        <label for="default-radio-2"
                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">زن</label>
                        </div>
                        </div>
                        <div class="flex">
                        
                        </div>
                        </div>
                        <button @click.prevent="nextstep3"
                    class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله بعد</button> 
                    </div>
                </form>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<style scoped>
    .opa-div {
        background-color: rgba(24, 29, 35, 0.548);
        zoom: 1;
        float: left;
        clear: both;
        /*opacity:0.4;
filter: alpha(opacity = 40);*/
    }
    .img-fadebanner{
  -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 90%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 90%);
  display: flex;

}

    .img-fade {
        -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
        mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
        display: flex;
        margin: 0;
    }
    .shadowtext {
  background-clip: text;
  background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f);
  color: var(--color-background);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  padding: calc(--stroke-width / 2);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: var(--stroke-width);
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
<script>

</script>
<script setup>
    import {
        ref,
        watch,
        onUpdated,
        defineEmits
    } from 'vue'
    import {
        useRouter,
        useRoute
    } from 'vue-router';
    const route = useRoute()
    const router = useRouter()
    let number = ref('')
    let check = ref(false)
    let step = ref(1) 
    let radio = ref('')
    let introradio = ref('')
    let fname = ref('')
    let lname = ref('')
    let username = ref('')
    let email = ref('')
    let password = ref('')
    let passwordagain = ref('')
    let partners = ref(['تأمین کننده', 'مصرف کننده'])
    let organspoducter = ref(['حقیقی', 'کشاورز', 'بنکدار', 'شرکت حقوقی'])
    let organsconsumer = ref([
        'مصرف کننده (خرده)', 'رستورانی', 'شرکتی (بازگانی)', 'شرکتی (آجیل وخشکباری)', 'کارخانه ای',
        'تاجری(صادرات)', 'تاجری(واردات)', 'تاجری'
    ])
    let states = ref([
"آذربایجان شرقی",
"آذربایجان غربی",
"اردبیل",
"اصفهان",
"البرز",
"ایلام",
"بوشهر",
"تهران",
"چهارمحال و بختیاری",
"خراسان جنوبی",
"خراسان رضوی",
"خراسان شمالی",
"خوزستان",
"زنجان",
"سمنان",
"سیستان و بلوچستان",
"فارس",
"قزوین",
"قم",
"کردستان",
"کرمان",
"کرمانشاه",
"کهگیلویه وبویراحمد",
"گلستان",
"گیلان",
"لرستان",
"مازندران",
"مرکزی",
"هرمزگان",
"همدان",
"یزد",
])
    let selectedpartner = ref('')
    let selectedorgan = ref('')
    let organ = ref(true)
    watch(selectedpartner, (newselectedpartner, oldselectedpartner) => {
        if (newselectedpartner === 'مصرف کننده' || 'تأمین کننده') {
            organ.value = false
        } else {    
            organ.value = true
        }
    })
    function nextstep(){
        if(radio.value == ''){

        }else{
            if(number.value != '' && check.value !=false){
                step.value = 2
            }
        }
    }
    function nextstep2(){
        if(password.value == '' || passwordagain.value == ''){
            
        }else if(password.value == passwordagain.value){
            if(password.value.length <= 6 ){

            }else{
                step.value = 3
            }
            
        }
        
    }
    function nextstep3(){
        if( introradio.value !=''){
            step.value = 4
        }
            
        
    }
</script>