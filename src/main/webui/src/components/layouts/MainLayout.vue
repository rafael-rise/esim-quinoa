<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter()
// import TheWelcome from '../components/TheWelcome.vue'
const goHome = () => {
    router.push("/")
}
</script>

<template>
    <div class="w-full h-full flex flex-col gap-2">
        <div class="w-full flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 lg:w-8 stroke-rise-primary-blue" @click="goHome">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <div class="w-full flex justify-between items-center">
                <img class="h-8 lg:h-11" src="/public/img/telkomsel.png"/>
                <img class="h-10 lg:h-16" src="/public/img/rise-logo.png"/>
            </div>
        </div>
        <div class="w-full min-h-0 flex-grow">
            <RouterView />
        </div>
    </div>
</template>
