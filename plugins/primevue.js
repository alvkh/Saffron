import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
export default defineNuxtPlugin(nuxtapp=>{
    nuxtapp.vueApp.use(PrimeVue,{ripple:true})
    nuxtapp.vueApp.component("Button",Button)
})