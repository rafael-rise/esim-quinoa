<script setup>
import Pagination from '@/components/Pagination.vue';
import WizardButtons from '@/components/WizardButtons.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const confirmPackage = () => {
    router.push({path: '/transactionSummary'})
}
const back = () => {
    router.push({path: '/numberList'})
}


</script>
<template>
    <div class="w-full h-full flex flex-col items-center gap-4">
        <div class="w-full flex flex-col items-center gap-1">
            <p class="text-lg font-bold lg:text-2xl">Pilih Paket eSIM</p>
            <div class="px-8 py-1.5 rounded-lg bg-rise-accent text-white flex flex-col items-center text-xs lg:text-sm">
                <p class="font-bold">0851 2223 2224</p>
                <p class="font-bold">Rp 0,-</p>
            </div>
        </div>
        <div class="w-full min-h-0 flex-grow flex flex-col gap-2 items-center overflow-scroll">
            <div class="w-5/6 px-2 py-1 lg:py-2 lg:text-sm rounded-lg border flex justify-between items-center text-xs" v-for="x in 5">
                <p class="w-3/5">Paket bulanan kota hingga 10GB 30Hari</p>
                <p class="text-rise-primary-blue flex-grow text-right font-bold">Rp 35.000,-</p>
            </div>
        </div>
        <Pagination/>
        <WizardButtons @on-next="confirmPackage" @on-back="back">
            <template #back></template>
        </WizardButtons>
    </div>
</template>