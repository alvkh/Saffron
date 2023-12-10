<template>
    <div
        class="lg:w-[320px] w-[240px] flex flex-col h-[120px] z-10 bg-[#0E1317] right-[10px] lg:right-[30px] fixed top-[40px] lg:top-[130px] rounded-lg">
        <slot></slot>
        <div class="h-[2px] bg-red-600 transition-all" :style="{ width: persent + '%' }"></div>
        </div>
</template>

<style scoped>
.borderline {
    border-width: 3px;
    border-style: solid;
    border-image:
        linear-gradient(to right,
            transparent 0%,
            #C59D5F 50%,
            transparent 100%) 1 1 100%;

}
</style>
<script setup>
var interval;
import { onMounted, ref, defineEmits } from 'vue';
const persent = ref(100)
const emit = defineEmits()
onMounted(() => {
    interval = setInterval(() => {
        if (persent.value == 0) {

        }
        persent.value -= 1
    }, 30)

})
onUnmounted(() => {
    clearInterval(interval)
})
</script>