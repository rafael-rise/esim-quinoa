<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import WizardButtons from '@/components/WizardButtons.vue';

const router = useRouter()
let orderCompleted = ref(false)

const back = () => {
    router.push({path: '/packageList'})
}

</script>
<template>
    <div class="w-full h-full flex flex-col items-center gap-2">
        <p class="text-xl font-bold" v-if="!orderCompleted">Rincian Total Harga</p>
        <div class="flex flex-col items-center w-full gap-1 lg:gap-2" v-else>
            <p class="text-xl font-bold uppercase !mb-0">Terima kasih</p>
            <p class="text">Kode bayar kamu:</p>
            <div class="w-5/6 h-16 bg-slate-500"></div>
            <p class="font-bold">222 05 06 007</p>
        </div>
        <div class="w-full border-y py-2 flex flex-col gap-1 text-xs lg:text-sm">
            <p class="font-bold">Nomor eSIM</p>
            <div class="w-full flex justify-between">
                <p class="w-3/5">0851 2223 2224</p>
                <p class="font-bold">Rp. 0,-</p>
            </div>
            <p class="font-bold">Paket</p>
            <div class="w-full flex justify-between">
                <p class="w-3/5">Paket bulanan kuota hingga 6 GB 30Hari (Internet 1GB & Lokal 5GB)</p>
                <p class="font-bold">Rp. 35.000,-</p>
            </div>
        </div>
        <div class="w-full flex justify-between text-xs lg:text-sm">
            <p class="font-bold">Total</p>
            <p class="font-bold text-rise-primary-blue">Ro. 35.000,-</p>
        </div>
        <WizardButtons v-if="!orderCompleted" @on-next="orderCompleted = true" @on-back="back">
            <template #back></template>
            <template #next>Buat Kode Bayar</template>
        </WizardButtons>
        <div class="w-full min-h-0 flex-grow flex flex-col gap-1.5 lg:gap-2 text-xs lg:text-sm items-center justify-center overflow-auto" v-else>
            <p>* Harga belum termasuk fee</p>
            <p class="font-bold">Kode bayar berlaku 1x24 jam.</p>
            <p class="text-center">Berikan kode bayar di atas kepada kasir <br/> dan lakukan pembayaran.</p>
            <WizardButtons>
                <template #next>Simpan Struk</template>
            </WizardButtons>
        </div>
    </div>
</template>