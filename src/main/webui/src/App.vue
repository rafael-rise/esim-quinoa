<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex-grow h-svh bg-white flex flex-col p-4 lg:p-6 items-center gap-2 rounded-2xl sm:w-[max-w-200px] md:max-w-[460px] md:max-h-[720px] lg:flex-grow-0 lg:w-[400px] lg:max-h-[720px] xl:max-h-[740px] relative overflow-hidden">
      <div class="w-full min-h-0 flex-grow">
        <RouterView />
      </div>
      <div class="w-full border-t text-center text-xs flex flex-col gap-1 pt-3">
        <p>Copyright &copy; 2024</p>
        <p>Supported by <a>PT Rajawali Inti Selular</a></p>
      </div>
    </div>
</template>

<style scoped>
</style>
