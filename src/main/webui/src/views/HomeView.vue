<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
window.location.replace("/index.html")
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-8">
    <img class="w-32 lg:w-44" src="/public/img/rise-logo.png"/>
    <p class="text-2xl lg:text-3xl font-bold">Beli eSIM</p>
    <div class="w-4/6 flex flex-col gap-4 lg:gap-6 justify-center">
      <router-link to="/numberList">
        <div class="w-full bg-white drop-shadow-lg h-20 lg:h-24 rounded-3xl flex justify-center items-center">
          <img class="h-12" src="/public/img/telkomsel.png"/>
        </div>
      </router-link>
      <div class="w-full bg-white drop-shadow-lg h-20 lg:h-24 rounded-3xl flex justify-center items-center">
        <img class="h-12" src="/public/img/indosat.png"/>
      </div>
      <div class="w-full bg-white drop-shadow-lg h-20 lg:h-24 rounded-3xl flex justify-center items-center">
        <img class="h-12" src="/public/img/xl.png"/>
      </div>
    </div>
  </div>
</template>
