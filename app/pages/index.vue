<script setup lang="ts">
import HomeCarouselComponent from '../components/HomeCarouselComponent.vue'
import HomeContactSectionComponent from '../components/HomeContactSectionComponent.vue'
import ProjectCardsSectionComponent from '../components/ProjectCardsSectionComponent.vue'

useSeoMeta({
  title: 'Mission Dawah South Africa',
  description: 'Serving communities through compassion and opportunity by strengthening food support and access to education.',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://missiondawah.org.za/',
    },
  ],
})
</script>

<template>
  <main class="bg-[#f7f8f3]">
    <HomeCarouselComponent />
    <ProjectCardsSectionComponent />
    <HomeContactSectionComponent />
  </main>
</template>
