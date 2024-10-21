<script setup>
    import { ref, defineExpose, watch } from 'vue'
    const show = ref(false)
    const emit = defineEmits(['onClose', 'onOpen', 'onSubmit'])

    watch(show, async(newVal) => {
        if (newVal) {
            emit('onOpen')
        } else {
            emit('onClose')
        }
    })

    const toggleShow = () => {
        show.value = !show.value
    }

    const submit = () => {
        emit('onSubmit')
    }

    defineExpose ({
        toggleShow
    })
</script>
<template>
    <Transition name="menuSlide">
        <div v-if="show" class="w-full bg-white rounded-t-3xl absolute z-50 bottom-0 left-0 flex flex-col p-4 items-center justify-center gap-4">
            <div class="w-full flex justify-between">
                <svg @click="toggleShow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 stroke-rise-primary-blue">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <p class="text-sm text-rise-primary-blue font-bold">Reset</p>
            </div>
            <slot name="content"></slot>
            <button class="button button-accent !w-full !text-base !leading-8 !rounded-xl" @click="submit"><slot name="confirmText">Submit</slot></button>
        </div>
    </Transition>
    <Transition name="fade">
        <div v-if="show" class="w-full h-svh absolute top-0 left-0 bg-black opacity-25 z-40" @click="toggleShow"/>
    </Transition>
</template>
<style scoped>
.menuSlide-enter-active, .menuSlide-leave-active {
    transition: all 0.3s ease;
}
.menuSlide-enter-from, .menuSlide-leave-to {
    @apply translate-y-full
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    @apply opacity-0
}
</style>