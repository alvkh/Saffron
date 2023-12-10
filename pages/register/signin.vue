<template>
    
    <div class="flex flex-col relative ">
        <transition name="register">
            <div class="w-screen h-screen z-10 fixed top-0 right-0 flex justify-center items-center" v-if="rols">
                <div @click="rols = false" class="w-full h-full bg-black opacity-10 absolute" />
                <div class="w-[500px] h-[380px] opacity-90 flex flex-col z-20 p-6 items-center overflow-y-scroll bg-[#181D23] shadow-sm shadow-black rounded-lg gap-3">
                    <h2 class="text-[#C59D5F] font-peyda-bold">شرایط و قوانین و مقررات</h2>
                    <p class="font-peyda-noraml text-center">ورود کاربران به  هنگام استفاده از پروفایل شخصی به معنای آگاه بودن و پذیرفتن شرایط و قوانین  سایت لوکس سافرون می باشد. توجه داشته باشید که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین  سایت لوکس سافرون از سوی کاربر است.</p>
                    <h2 class="text-[#C59D5F] font-peyda-bold">قوانین عمومی</h2>
                    <p class="font-peyda-noraml text-center">کلیه اصول و رویه های این سایت منطبق با قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر می باشد. در صورتی که در قوانین مندرج، رویه‌ها و سرویس‌های  سایت لوکس سافرون تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است..</p>
                    <h2 class="text-[#C59D5F] font-peyda-bold">تعریف مشتری یا کاربر</h2>
                    <p class="font-peyda-noraml text-center">مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم ثبت نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات  سایت لوکس سافرون اقدام کند.</p>
                    <h2 class="text-[#C59D5F] font-peyda-bold">تعریف فروشنده </h2>
                    <p class="font-peyda-noraml text-center">محصولات ارایه شده در وب‌سایت، توسط  سایت لوکس سافرون از شرکت زعفران لوکس سافرون عرضه و به فروش می‌رسند. - مسئولیت‌های مربوط به کیفیت، قیمت، محتوا، شرایط و همچنین خدمات پس از فروش محصول بر عهده این شرکت است.</p>
                    <button @click.prevent="userinfo.check = true,rols =false "
                                class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-1 px-6 rounded-xl text-[#181D23] w-fit">قبول قوانین</button>
                </div>
            </div>
        </transition>
        <navbar></navbar>
        <transition>
            <alertbox v-if="warning == true">
                <div class="flex-grow  flex flex-col items-center w-full">
                    <h2 class="borderline text-center my-2 font-peyda-bold about py-2 text-[14px] lg:text-[18px] font-bold w-fit">اخطار
                    </h2>
                    <p class="font-peyda-noraml py-2 text-[14px]  h-[50px] ">لطفا تمامی فیلد ها را به درستی پر نمایید</p>
                </div>
            </alertbox>
        </transition>
        <transition>
            <alertbox v-if="passacc == true">
                <div class="flex-grow  flex flex-col items-center w-full">
                    <h2 class="borderline text-center my-2 font-peyda-bold about py-2 text-[14px]  lg:text-[18px] font-bold w-fit">اخطار
                    </h2>
                    <p class="font-peyda-noraml py-2 text-[14px] h-[50px] ">رمز حداقل باید دارای 8 کارکتر باشد</p>
                </div>
            </alertbox>
        </transition>
        <transition>
            <sucssesbox v-if="sucsses == true">
                <div class="flex-grow  flex flex-col items-center w-full">
                    <h2 class="borderline text-center my-2 font-peyda-bold about py-2 text-[14px] lg:text-[18px] font-bold w-fit">موفق شدید !!
                    </h2>
                    <p class="font-peyda-noraml text-center py-4 px-2 h-[50px] ">ثبت نام با موفقیت انجام شد در حال انتقال به صفحه کاربری</p>
                </div>
            </sucssesbox>
        </transition>
        <div class="w-full lg:h-screen bg-hero-pattern justify-center flex  items-center bg-cover img-fadebanner">
            <div class="flex flex-col p-12 lg:w-[50%] gap-10  opa-div rounded-xl z-10">
                <h2 class="text-[24px] font-peyda-bold text-[#C59D5F] text-center">
                    ثبت نام
                </h2>
                <form action="" class="flex flex-col gap-8 justify-center font-peyda-bold">
                    <div v-if="step == 1" class="flex flex-col gap-10">
                        <div class="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between w-[60%] mx-auto ">
                            <div class="flex lg:flex-row lg:gap-0 gap-2 flex-col items-center">
                                <input id="default-radio-1" v-model="userinfo.radio" type="radio" value="مصرف کننده"
                                    name="default-radio"
                                    class="w-10 h-10 text-[#C59D5F] bg-[#C59D5F] border[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                                <label for="default-radio-1"
                                    class="ms-2 text-[18px] lg:text-[24px] font-peyda-noraml lg:w-fit w-full text-white lg:text-start text-center dark:text-[#C59D5F]">مصرف
                                    کننده</label>
                            </div>
                            <div class="flex items-center lg:flex-row lg:gap-0 gap-2 flex-col">
                                <input checked id="default-radio-2" v-model="userinfo.radio" type="radio" value="تأمین کننده"
                                    name="default-radio"
                                    class="w-10 h-10 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                                <label for="default-radio-2"
                                    class="ms-2 text-[18px] lg:text-[24px] font-peyda-noraml text-white dark:text-[#C59D5F] lg:text-start text-center !shadowtext">تأمین
                                    کننده</label>
                            </div>
                        </div>
                        <input type="text" maxlength="11" oninput="this.value=this.value.replace(/[^0-9]/g,'');" v-model="userinfo.number"
                            class="lg:w-[70%] p-[6px] focus:outline-none rounded-lg mx-auto text-[#C59D5F] placeholder:text-[#C59D5F] "
                            placeholder="شماره تماس">
                        <div class="text-[14px] self-center flex gap-2">
                            <p><button @click.prevent="rols=true" class="text-[#C59D5F] px-1">قوانین و مقررات</button> را خوانده ام</p>
                            <input type="checkbox" v-model="userinfo.check">
                        </div>
                        <button @click.prevent="nextstep"
                            class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">ثبت
                            نام</button>
                    </div>
                    <div class="flex flex-col gap-4 p-4" v-else-if="step == 2">
                        <div class="lg:w-[70%] rounded-lg p-[6px] flex gap-2 items-center mx-auto bg-[#383838]">
                            <input :type="pass1" v-model="userinfo.password"
                            class="w-full  bg-transparent focus:outline-none text-[#C59D5F] placeholder:text-[#C59D5F] "
                            placeholder="رمز عبور">
                            <svgs-hiddenshow @showpass="passo1"></svgs-hiddenshow>
                        </div>
                        <div class="lg:w-[70%] rounded-lg p-[6px] flex gap-2 items-center mx-auto bg-[#383838]">
                            <input :type="pass2" v-model="userinfo.passwordagain"
                            class="w-full bg-transparent focus:outline-none text-[#C59D5F] placeholder:text-[#C59D5F] "
                            placeholder="تکرار رمز عبور">
                            <svgs-hiddenshow @showpass="passo2"></svgs-hiddenshow>
                        </div>
                        <button @click.prevent="nextstep2"
                            class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله
                            بعد</button>
                    </div>
                    <div class="flex flex-col gap-4 lg:gap-2 p-4" v-else-if="step == 3">
                        <h2 class="text-[14px] text-center lg:text-start lg:text-[18px] text-[#C59D5F] font-peyda-bold">نحوه آشنایی شما با ما چگونه است؟</h2>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" v-model="userinfo.introradio" type="radio"
                                value="سایت های خبری و اموزشی" name="default-radio"
                                class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                            <label for="default-radio-2"
                                class="ms-2 text-[14px] lg:text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">سایت
                                های خبری و اموزشی</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" v-model="userinfo.introradio" type="radio"
                                value="معرفی دوستان و آشنایان" name="default-radio"
                                class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                            <label for="default-radio-2"
                                class="ms-2 text-[14px] lg:text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">معرفی
                                دوستان و آشنایان</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" v-model="userinfo.introradio" type="radio"
                                value="شبکه های اجتماعی" name="default-radio"
                                class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                            <label for="default-radio-2"
                                class="ms-2 text-[14px] lg:text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">شبکه
                                های اجتماعی</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" v-model="userinfo.introradio" type="radio" value="جستجو گوگل"
                                name="default-radio"
                                class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                            <label for="default-radio-2"
                                class="ms-2 text-[14px] lg:text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">جستجو
                                گوگل</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" v-model="userinfo.introradio" type="radio" value="سایر روش ها"
                                name="default-radio"
                                class="w-5 h-5 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                            <label for="default-radio-2"
                                class="ms-2 text-[14px] lg:text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">سایر
                                روش ها</label>
                        </div>
                        <button @click.prevent="nextstep3"
                            class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله
                            بعد</button>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4 " v-if="step == 4">
                        <div class="flex gap-2 ">
                            <div class="flex flex-col gap-2 w-[48%] ">
                                <input type="text" v-model="userinfo.fname" placeholder="نام"
                                    class="p-1 rounded-lg placeholder:text-[14px] focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                                <input type="text" v-model="userinfo.lname" placeholder="نام خانوادگی"
                                    class="p-1 rounded-lg placeholder:text-[14px] focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                                <input type="text" v-model="userinfo.username" placeholder="نام کاربری"
                                    class="p-1 rounded-lg placeholder:text-[14px] focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                                <select class="text-[#C59D5F] text-[12px] p-1 rounded-lg" name="" id="">
                                    <option v-for="items in states" :value="items">{{ items }}</option>
                                </select>
                                <input type="text" v-model="userinfo.city" placeholder=" شهر یا روستا (دستی وارد کنید)"
                                    class="p-1 rounded-lg placeholder:text-[12px] focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                            </div>
                            <div class="flex flex-col gap-2 w-[48%] ">
                                <input type="text" v-model="userinfo.email" placeholder="ایمیل"
                                    class="p-1 rounded-lg placeholder:text-[14px] focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                                <input type="text" v-model="userinfo.birthday" placeholder="تاریخ تولد"
                                    class="p-1 rounded-lg placeholder:text-[14px] focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                                <select v-model="userinfo.hello" class="text-[#C59D5F] p-1 rounded-lg" name="" id="">
                                    <option v-if="userinfo.radio == 'مصرف کننده'" v-for="items in organsconsumer "
                                        :value="items">{{ items }}</option>
                                    <option v-if="userinfo.radio == 'تأمین کننده'" v-for="items in organspoducter"
                                        :value="items">{{ items }}</option>
                                </select>
                                <input type="text"
                                    class="p-1 rounded-lg focus:outline-none  text-[#C59D5F] placeholder:text-[#C59D5F]">
                                <div class="flex p-1 justify-between w-[60%] mx-auto">
                                    <div class="flex items-center ">
                                        <input checked id="default-radio-2" v-model="userinfo.gender" type="radio" value="مرد"
                                            name="default-radio"
                                            class="lg:w-5 lg:h-5 w-3 h-3 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                                        <label for="default-radio-2"
                                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">مرد</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input checked id="default-radio-2" v-model="userinfo.gender" type="radio" value="زن"
                                            name="default-radio"
                                            class="lg:w-5 lg:h-5 w-3 h-3 text-[#C59D5F] bg-[#C59D5F] border-[#C59D5F] focus:ring-[#C59D5F] dark:focus:ring-[#C59D5F] dark:ring-offset-[#C59D5F] dark:bg-[#C59D5F] dark:border-[#C59D5F]">
                                        <label for="default-radio-2"
                                            class="ms-2 text-[18px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">زن</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click.prevent="nextstep4"
                            class="bg-[#C59D5F] self-center mx-auto font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله
                            بعد</button>
                    </div>
                    <div v-if="step == 5" class="flex flex-col w-full gap-4 p-4">
                        <h2 class="text-[18px] text-[#C59D5F] font-peyda-bold">سوالات مربوطه</h2>
                        <div class="flex flex-col w-[40%] gap-2 ">
                            <label for="default-radio-2"
                                v-if="hello == 'حقیقی'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.realperson[1] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'کشاورز' " class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.farmer[1] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'تاجری'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.producer[1] }}</label>
                            <input  id="default-radio-2" v-model="userinfo.introradio" type="text"
                                 name="default-radio"
                                class=" text-[#C59D5F]  p-1 rounded-md focus:outline-none border-[#C59D5F]">
                        </div>
                        <div class="flex flex-col w-[40%] gap-2 ">
                            <label for="default-radio-2"
                                v-if="hello == 'حقیقی'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.realperson[1] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'کشاورز' " class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.farmer[1] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'تاجری'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.producer[1] }}</label>
                            <input  id="default-radio-2" v-model="userinfo.introradio" type="text"
                                 name="default-radio"
                                class=" text-[#C59D5F]  p-1 rounded-md focus:outline-none border-[#C59D5F] ">
                        </div>
                        <div class="flex flex-col w-[40%] gap-2">
                            <label for="default-radio-2"
                                v-if="hello == 'حقیقی'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.realperson[2] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'کشاورز' " class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.farmer[2] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'تاجری'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.producer[2] }}</label>
                            <input  id="default-radio-2" v-model="userinfo.introradio" type="text"
                                 name="default-radio"
                                class=" text-[#C59D5F]  p-1 rounded-md focus:outline-none border-[#C59D5F] ">
                        </div>
                        <div class="flex flex-col w-[40%] gap-2 ">
                            <label for="default-radio-2"
                                v-if="hello == 'حقیقی'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.realperson[3] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'کشاورز' " class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.farmer[3] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'تاجری'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.producer[3] }}</label>
                            <input  id="default-radio-2" v-model="userinfo.introradio" type="text"
                                 name="default-radio"
                                class=" text-[#C59D5F]  p-1 rounded-md focus:outline-none border-[#C59D5F] ">
                        </div>
                        <div class="flex flex-col w-[40%] gap-2 ">
                            <label for="default-radio-2"
                                v-if="hello == 'حقیقی'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.realperson[4] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'کشاورز' " class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.farmer[4] }}</label>
                            <label for="default-radio-2"
                                v-else-if="hello == 'تاجری'" class=" text-[14px] font-peyda-noraml text-white dark:text-[#C59D5F] !shadowtext">{{ json.producer[4] }}</label>
                            <input  id="default-radio-2" v-model="userinfo.introradio" type="text"
                                 name="default-radio"
                                class="text-[#C59D5F]  p-1 rounded-md focus:outline-none border-[#C59D5F] ">
                        </div>
                        <button @click.prevent="final"
                            class="bg-[#C59D5F] self-center font-peyda-bold text-[18px] shadow-sm shadow-[#C59D5F] p-2 px-8 rounded-xl text-[#181D23] w-fit">مرحله
                            بعد</button>
                    </div>

                </form>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translateX(200px);
    }
    .register-enter-active,
    .register-leave-active {
        transition: all 0.5s ease;
    }

    .register-enter-from,
    .register-leave-to {
        opacity: 0;
        transform: translateY(200px);
    }

    .borderline {
        border-width: 2px;
        border-style: solid;
        border-image:
            linear-gradient(to right,
                transparent 0%,
                #C59D5F 50%,
                transparent 100%) 1 1 100%;

    }

    .opa-div {
        background-color: rgba(24, 29, 35, 0.548);
        zoom: 1;
        float: left;
        clear: both;
        /*opacity:0.4;
filter: alpha(opacity = 40);*/
    }

    .img-fadebanner {
        -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 90%);
        mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 90%);
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
    import json from '../../json/Questions.json'
    import {
        ref,
        watch,
        reactive,
        onUpdated,
        defineEmits
    } from 'vue'
    import {
        useRouter,
        useRoute
    } from 'vue-router';
    const route = useRoute()
    const router = useRouter()
    var warning = ref(false)
    const userinfo =reactive({
        city : '',
        number : '',
        gender : '',
        birthday : '',
        check : false,
        radio : '',
        introradio : '',
        fname : '',
        lname : '',
        username: '',
        email: '',
        password:'',
        passwordagain:'',
        selectedorgan:'',
        selectedpartner:'',
    })
    let hello = ref('')
    let rols = ref(false)
    let step = ref(1)
    let sucsses =ref(false)
    let passacc = ref(false)
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
    let organ = ref(true)
    let pass1=ref('password')
    let pass2=ref('password')
    
    onMounted(()=>{
        userinfo.radio = 'مصرف کننده'
    })
    watch(userinfo.selectedpartner, (newselectedpartner, oldselectedpartner) => {
        if (newselectedpartner === 'مصرف کننده' || 'تأمین کننده') {
            organ.value = false
        } else {
            organ.value = true
        }
    })
    function passo1(data1){
        if(data1 == true)
        {pass1.value = 'text'
    }else{
        pass1.value = 'password'
    }
    }
    function passo2(data2){
        if(data2 == true)
        {pass2.value = 'text'
    }else{
        pass2.value = 'password'
    }
       
    }
    function nextstep() {
        if (userinfo.radio == '') {
            warning.value = true
            setTimeout(() => {
                warning.value = false
            }, 3250);
        } else {
            if (userinfo.number != '' && userinfo.check != false) {
                if(userinfo.number.length == 11)
                {
                    step.value = 2
                }else{
                    warning.value = true
            setTimeout(() => {
                warning.value = false
            }, 3250);
                }
            } else {
                warning.value = true
                setTimeout(() => {
                    warning.value = false
                }, 3250);
            }
        }
    }

    function nextstep2() {
        if (userinfo.password == '' || userinfo.passwordagain == '') {
            warning.value = true
            setTimeout(() => {
                warning.value = false
            }, 3250);

        } else if (userinfo.password == userinfo.passwordagain) {
            if ( 7 >= userinfo.password.length) {
                passacc.value = true
                setTimeout(() => {
                    passacc.value = false
                }, 3250);

            } else {
                pass1.value='password'
                pass2.value='password'
                step.value = 3
            }

        }else{
            warning.value = true
            setTimeout(() => {
                warning.value = false
            }, 3250);
        }

    }

    function nextstep3() {
        if (userinfo.introradio != '') {
            step.value = 4
        } else {
            warning.value = true
            setTimeout(() => {
                warning.value = false
            }, 3250);
        }


    }

    function nextstep4() {
        if (userinfo.birthday != '',userinfo.city != '',userinfo.gender != '',userinfo.fname != '',userinfo.lname != '',userinfo.username != '') {
            step.value = 5
        } else {
            warning.value = true
            setTimeout(() => {
                warning.value = false
            }, 3250);
        }


    }
    function final(){
        sucsses.value = true
            setTimeout(() => {
                sucsses.value = false
            }, 3250);
    }
</script>