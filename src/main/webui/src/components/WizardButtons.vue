<script setup>
    let emit = defineEmits(['onNext', 'onBack'])

    const next = () => {
        emit('onNext')
    }
    const back = () => {
        emit('onBack')
    }
</script>
<template>
    <div class="w-full flex gap-3 justify-center">
        <button class="button button-primary" v-if="$slots.back" @click="back">Sebelumnya</button>
        <button class="button button-accent" @click="next"><slot name="next">Lanjutkan</slot></button>
    </div>
</template>