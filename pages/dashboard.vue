<template>
    <NuxtLayout name="dashboard">
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(()=>{
router.push('/dashboard/dash')
})
</script>