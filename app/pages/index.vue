<script setup lang="ts">
import HomeCarouselComponent from '../components/HomeCarouselComponent.vue'
</script>

<template>
  <main class="bg-[#f7f8f3]">
    <HomeCarouselComponent />

    <section class="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div>
        <p class="text-sm font-bold uppercase tracking-widest text-[#276b8a]">
          Mission Dawah South Africa
        </p>

        <h2 class="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#174c3c] sm:text-5xl lg:text-7xl">
          Serving communities through compassion and opportunity
        </h2>

        <p class="mt-6 max-w-2xl border-l-4 border-[#e7b94c] pl-4 text-lg leading-8 text-[#18251f] sm:text-xl">
          We strengthen communities through food support and access to education.
        </p>
      </div>
    </section>
  </main>
</template>
