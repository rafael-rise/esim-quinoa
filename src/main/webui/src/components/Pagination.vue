<script setup></script>
<template>
    <div class="w-full flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="stroke-rise-primary-blue w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <div class="flex-grow flex justify-center gap-2 text-xs xl:text-sm items-center">
            <p>Page</p>
            <input type="number" class="w-10 text-center border" value="1"/>
            <p>of 100</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="stroke-rise-primary-blue w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </div>
</template>