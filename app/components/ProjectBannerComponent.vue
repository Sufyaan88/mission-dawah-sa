<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  eyebrow: string
  title: string
  description: string
  theme: 'green' | 'blue'
}>()

const themeClasses = computed(() => props.theme === 'blue'
  ? {
      background: 'from-[#183d50] via-[#276b8a] to-[#315f64]',
      glow: 'bg-[#e7b94c]/20',
    }
  : {
      background: 'from-[#102019] via-[#174c3c] to-[#315f64]',
      glow: 'bg-[#e7b94c]/25',
    })
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
    :class="themeClasses.background"
    :data-theme="props.theme"
    aria-labelledby="project-banner-title"
  >
    <div class="absolute -left-32 -top-32 size-96 rounded-full blur-3xl" :class="themeClasses.glow" />
    <div class="absolute -bottom-48 right-0 size-[32rem] rounded-full bg-white/10 blur-3xl" />

    <div class="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-10">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#e7b94c]">
          {{ props.eyebrow }}
        </p>

        <h1 id="project-banner-title" class="mt-4 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
          {{ props.title }}
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
          {{ props.description }}
        </p>
      </div>

      <div class="grid min-h-64 place-items-center rounded-3xl border border-white/20 bg-white/10 p-8 text-[#e7b94c] shadow-xl backdrop-blur-md">
        <slot name="visual" />
      </div>
    </div>
  </section>
</template>
