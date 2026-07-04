<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  description: string
  href: string
  accent?: 'green' | 'blue'
}>(), {
  accent: 'green',
})

const accentClasses = computed(() => props.accent === 'blue'
  ? {
      border: 'border-[#276b8a]/30 border-t-[#276b8a] hover:border-[#276b8a]',
      surface: 'bg-gradient-to-br from-white via-white to-[#e1eff6]',
      icon: 'bg-[#276b8a] text-white shadow-lg shadow-[#276b8a]/20',
      arrow: 'text-[#276b8a]',
    }
  : {
      border: 'border-[#174c3c]/30 border-t-[#174c3c] hover:border-[#174c3c]',
      surface: 'bg-gradient-to-br from-white via-white to-[#dfeee7]',
      icon: 'bg-[#174c3c] text-white shadow-lg shadow-[#174c3c]/20',
      arrow: 'text-[#174c3c]',
    })
</script>

<template>
  <a
    class="group block h-full rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#e7b94c] focus:ring-offset-4"
    :href="props.href"
  >
    <article
      class="flex h-full flex-col rounded-3xl border border-t-4 p-7 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:p-9"
      :class="[accentClasses.border, accentClasses.surface]"
    >
      <div
        class="grid size-20 place-items-center rounded-2xl"
        :class="accentClasses.icon"
        aria-hidden="true"
      >
        <slot name="icon" />
      </div>

      <h3 class="mt-7 text-3xl font-black text-[#18251f]">
        {{ props.title }}
      </h3>

      <p class="mt-4 flex-1 text-base leading-7 text-[#4b5a52]">
        {{ props.description }}
      </p>

      <span class="mt-7 text-3xl transition group-hover:translate-x-2" :class="accentClasses.arrow" aria-hidden="true">
        &rarr;
      </span>
    </article>
  </a>
</template>
