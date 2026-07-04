<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  source: string
  theme: 'green' | 'blue'
}>()

const themeClasses = computed(() => props.theme === 'blue'
  ? {
      background: 'from-[#183d50] to-[#276b8a]',
      accent: 'text-[#e7b94c]',
    }
  : {
      background: 'from-[#102019] to-[#174c3c]',
      accent: 'text-[#e7b94c]',
    })
</script>

<template>
  <section
    class="bg-gradient-to-br px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
    :class="themeClasses.background"
    :data-theme="props.theme"
    aria-labelledby="hadith-title"
  >
    <div class="mx-auto max-w-4xl text-center">
      <p id="hadith-title" class="text-sm font-bold uppercase tracking-[0.2em]" :class="themeClasses.accent">
        Guidance from the Sunnah
      </p>

      <figure class="mt-8 rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-12">
        <span class="block text-7xl font-black leading-none text-white/15" aria-hidden="true">“</span>
        <blockquote class="-mt-4 text-2xl font-semibold leading-relaxed sm:text-3xl">
          {{ props.text }}
        </blockquote>
        <figcaption class="mt-7 text-sm font-bold uppercase tracking-wider text-white/70">
          <cite class="not-italic">{{ props.source }}</cite>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
