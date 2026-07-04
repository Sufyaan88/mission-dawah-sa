<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  eyebrow: string
  title: string
  paragraphs: string[]
  theme: 'green' | 'blue'
}>()

const accentClasses = computed(() => props.theme === 'blue'
  ? {
      text: 'text-[#276b8a]',
      border: 'border-[#276b8a]',
      background: 'bg-[#e1eff6]',
    }
  : {
      text: 'text-[#174c3c]',
      border: 'border-[#174c3c]',
      background: 'bg-[#dfeee7]',
    })
</script>

<template>
  <section
    class="bg-[#f7f8f3] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    :data-theme="props.theme"
    aria-labelledby="project-goal-title"
  >
    <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <p class="text-sm font-bold uppercase tracking-[0.2em]" :class="accentClasses.text">
          {{ props.eyebrow }}
        </p>
        <h2 id="project-goal-title" class="mt-3 text-3xl font-black leading-tight text-[#18251f] sm:text-5xl">
          {{ props.title }}
        </h2>
      </div>

      <div
        data-testid="goal-content"
        class="space-y-5 rounded-3xl border-l-4 p-7 text-lg leading-8 text-[#3f4d46] shadow-sm sm:p-10"
        :class="[accentClasses.border, accentClasses.background]"
      >
        <p v-for="paragraph in props.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
