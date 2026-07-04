<script setup lang="ts">
import ProjectCardComponent from './ProjectCardComponent.vue'
</script>

<template>
  <section id="projects" class="bg-[#f7f8f3] px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="projects-title">
    <div class="mx-auto max-w-6xl">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#276b8a]">
          Our projects
        </p>
        <h2 id="projects-title" class="mt-3 text-3xl font-black text-[#18251f] sm:text-5xl">
          Choose where you want to make a difference
        </h2>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <ProjectCardComponent
          title="Tahabbu"
          description="Discover how the Tahabbu project supports families through food assistance delivered with care and dignity."
          href="/tahabbu"
          accent="green"
        >
          <template #icon>
            <svg class="size-12" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 17h22c0 6-4.9 10-11 10S5 23 5 17Z" />
              <path d="M8 17c1-4 4-6 8-6s7 2 8 6" />
              <path d="M16 10c-3-2-4-4-2-6 1-1 3-1 4 1 1-2 3-2 4-1 2 2 1 4-2 6l-2 1-2-1Z" />
            </svg>
          </template>
        </ProjectCardComponent>

        <ProjectCardComponent
          title="Bursary"
          description="Learn how the bursary program helps students continue their studies and pursue new opportunities."
          href="/bursary"
          accent="blue"
        >
          <template #icon>
            <svg class="size-12" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m3 12 13-7 13 7-13 7-13-7Z" />
              <path d="M8 15v7c5 4 11 4 16 0v-7" />
              <path d="M29 12v10" />
            </svg>
          </template>
        </ProjectCardComponent>
      </div>
    </div>
  </section>
</template>
