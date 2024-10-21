<script setup>
    import { ref, defineExpose, watch } from 'vue'
    const show = ref(false)
    const emit = defineEmits(['onClose', 'onOpen'])

    watch(show, async(newVal) => {
        if (newVal) {
            emit('onOpen')
        } else {
            emit('onClose')
        }
    })

    const toggle = () => {
        show.value = !show.value
    }

    defineExpose ({
        toggle
    })
</script>
<template>
    <div v-if="show" class="w-64 p-4 rounded-xl bg-white absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
        <slot name="img"></slot>
        <p class="font-bold text-center text-sm"><slot name="message"></slot></p>
        <button class="button button-primary" @click="toggle"><slot name="confirmText">Okay</slot></button>
    </div>
    <div v-if="show" class="w-full h-svh absolute top-0 left-0 bg-black opacity-25 z-40" @click="toggle"/>
</template>