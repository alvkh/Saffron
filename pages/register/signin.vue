<template>
    <div class="flex flex-col ">
        <navbar></navbar>
        <div class="w-full h-screen bg-hero-pattern justify-center flex items-center bg-cover">
            <div class="flex flex-col p-8 lg:w-[50%] gap-10 lg:h-[60%] opa-div justify-center rounded-xl z-10">
                <h2 class="text-[24px] font-peyda-bold text-[#C59D5F] text-center">
                    ثبت نام
                </h2>
                <form action="" class="flex gap-8 flex-row  font-peyda-bold">

                    <div class="flex flex-col lg:flex-row w-full gap-4 ">
                        <div class="flex flex-col gap-4 lg:w-[50%]">
                            <div class="flex flex-col gap-2 font-peyda-bold">
                                <input class="p-[6px] rounded-md  placeholder:text-[#C59D5F]" v-model="fname" placeholder="نام " type="text">
                            </div>
                            <div class="flex flex-col gap-2">
                                <input class="p-[6px] rounded-md  placeholder:text-[#C59D5F]" v-model="lname" placeholder="نام خانوادگی" type="text">
                            </div>
                            <div class="flex flex-col gap-2 font-peyda-bold">
                                <select v-model="selectedpartner" placeholder="نوع همکاری" class="p-[6px] text-[#C59D5F] gap-4 rounded-md" id="">
                                    <option v-for="items in partners" class="text-[#C59D5F]" :value="items">{{ items }}
                                    </option>
                                </select>
                            </div>
                            <div class="flex flex-col gap-2">
                                <select v-model="selectedorgan" :disabled="organ" placeholder="ارگان"
                                    class="p-[6px] text-[#C59D5F] gap-4 rounded-md" name="" id="">
                                    <option v-if="selectedpartner == 'مصرف کننده'" v-for="items in organsconsumer"
                                        class="text-[#C59D5F]" :value="items">{{ items }}</option>
                                    <option v-if="selectedpartner == 'تأمین کننده'" v-for="items in organspoducter"
                                        class="text-[#C59D5F]" :value="items">{{ items }}</option>
                                </select>

                            </div>
                        </div>
                        <div class="flex flex-col lg:w-[50%] gap-4">
                            <div class="flex flex-col gap-2">
                                <input class="p-[6px] rounded-md  placeholder:text-[#C59D5F]" v-model="username" placeholder="نام کاربری" type="text">
                            </div>
                            <div class="flex flex-col gap-2">
                                <input class="p-[6px] rounded-md  placeholder:text-[#C59D5F]" v-model="email" placeholder="ایمیل" type="email">
                            </div>
                            <div class="flex flex-col gap-2 font-peyda-bold">
                                <input class="p-[6px] rounded-md  placeholder:text-[#C59D5F]" v-model="password" placeholder="کلمه عبور " type="password">
                            </div>
                        </div>
                    </div>
                    <button @click.prevent=""
                        class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">ثبت
                        نام</button>

                </form>
            </div>
        </div>
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

.img-fade {
    -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
    display: block;
    margin: 0;
}
</style>
<script setup>
import { ref, watch, onUpdated } from 'vue'
import { useRouter,useRoute } from 'vue-router';
const route = useRoute()
const router = useRouter()
let fname = ref('')
let lname = ref('')
let username = ref('')
let email = ref('')
let password = ref('')
let partners = ref(['تأمین کننده', 'مصرف کننده'])
let organspoducter = ref(['حقیقی', 'کشاورز', 'بنکدار', 'شرکت حقوقی'])
let organsconsumer = ref([
    'مصرف کننده (خرده)'
    , 'رستورانی'
    , 'شرکتی (بازگانی)'
    , 'شرکتی (آجیل وخشکباری)'
    , 'کارخانه ای'
    , 'تاجری(صادرات)'
    , 'تاجری(واردات)'
    , 'تاجری'
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
    

}


</script>