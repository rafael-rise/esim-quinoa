<script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router';
    import Pagination from '@/components/Pagination.vue'
    import Popup from '@/components/Popup.vue';
    import WizardButtons from '@/components/WizardButtons.vue';
    import Modal from '@/components/Modal.vue';

    const router = useRouter()
    let popupRef = ref(null)
    let filterModalRef = ref(null)

    const showFilter = () => {
        filterModalRef.value.toggleShow()
    }

    onMounted(() => {
        // popupRef.value.toggle()
    })

    const confirmNumber = () => {
        router.push({path: '/packageList'})
    }
    const back = () => {
        router.push({path: '/home'})
    }

</script>
<template>
    <div class="w-full h-full flex flex-col items-center gap-2 lg:gap-3">
        <p class="text-lg lg:text-2xl font-bold">Pilih Nomor</p>
        <div class="w-full border rounded-lg flex p-1 lg:p-2">
            <input type="number" class="w-full text-xs xl:text-sm bg-transparent" placeholder="Cari Nomor">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 stroke-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        <div class="w-full flex justify-between">
            <button class="button button-flat" @click="showFilter">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-3 stroke-rise-primary-blue">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                </span>
                <span>Filter</span>
            </button>
            <button class="button button-flat">
                <span>Nomor Cantik</span>
            </button>
            <button class="button button-flat">
                <span>Rp 0,-</span>
            </button>
        </div>
        <div class="w-full min-h-0 flex-grow grid grid-cols-2 gap-1.5">
            <div class="flex flex-col justify-center items-center text-xs xl:text-sm rounded-lg border" v-for="x in 10" :class="{'border-rise-accent bg-rise-primary-blue text-white': x == 1}">
                <p class="font-bold">0851 2223 2224</p>
                <p class="font-bold text-rise-primary-blue" :class="{'text-white': x == 1}">Rp 0,-</p>
            </div>
        </div>
        <Pagination/>
        <WizardButtons @onNext="confirmNumber" @on-back="back">
            <template #back></template>
        </WizardButtons>
        <Popup ref="popupRef">
            <template #img>
                <img class="h-32" src="/public/img/alert-illustration-failed-1.png"/>
            </template>
            <template #message>
                Oops, Nomor pilihanmu sudah dipilih pelanggan lain
            </template>
            <template #confirmText>
                Pilih Nomor Lain
            </template>
        </Popup>
        <Modal ref="filterModalRef" @on-submit="showFilter">
            <template #content>
                <p class="text-xl font-bold">Filter Harga</p>
                <div class="w-full grid grid-cols-2 gap-4">
                    <div class="button button-flat button-flat-active font-bold !leading-6">< Rp 1jt</div>
                    <div class="button button-flat font-bold !leading-6">Rp 1jt - Rp 5jt</div>
                    <div class="button button-flat font-bold !leading-6">Rp 5jt - Rp 10jt</div>
                    <div class="button button-flat font-bold !leading-6">Rp 10jt <</div>
                </div>
            </template>
            <template #confirmText>Terapkan</template>
        </Modal>
    </div>
</template>