<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const slides = [
  {
    eyebrow: 'Feeding communities',
    title: 'Tahabbu brings care to the table',
    description: 'Supporting families with practical food assistance rooted in dignity and compassion.',
    link: '/tahabbu',
    linkText: 'Discover Tahabbu',
    backgroundClass: 'bg-[#174c3c]',
    accent: '01',
  },
  {
    eyebrow: 'Investing in education',
    title: 'The MDSA Bursary opens doors',
    description: 'Helping students continue their studies and pursue opportunities through education.',
    link: '/bursary',
    linkText: 'Explore the Bursary',
    backgroundClass: 'bg-[#276b8a]',
    accent: '02',
  },
] as const

const activeIndex = ref(0)
const activeSlide = computed(() => slides[activeIndex.value])
let autoplayTimer: ReturnType<typeof setInterval> | undefined

function showNextSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function showPreviousSlide() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  autoplayTimer = window.setInterval(showNextSlide, 10000)
})

onBeforeUnmount(() => {
  window.clearInterval(autoplayTimer)
})
</script>

<template>
  <section aria-label="Featured projects" aria-roledescription="carousel">
    <article
      class="relative min-h-[30rem] overflow-hidden px-14 py-16 text-white transition-colors duration-700 sm:px-20 sm:py-20 lg:px-24"
      :class="activeSlide.backgroundClass"
      aria-live="polite"
    >
      <div class="absolute -left-24 -top-28 size-96 rounded-full bg-[#e7b94c]/25 blur-3xl" />
      <div class="absolute -bottom-40 right-0 size-[32rem] rounded-full bg-white/15 blur-3xl" />
      <div class="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20" />

      <div class="relative z-10 mx-auto flex min-h-80 max-w-6xl items-center">
        <div class="max-w-3xl rounded-3xl border border-white/25 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-10">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#e7b94c]">
            {{ activeSlide.eyebrow }}
          </p>

          <h1 class="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            {{ activeSlide.title }}
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {{ activeSlide.description }}
          </p>

          <a
            class="mt-8 inline-flex rounded-md bg-[#e7b94c] px-5 py-3 font-bold text-[#18251f] transition hover:bg-[#f1cf77] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            :href="activeSlide.link"
          >
            {{ activeSlide.linkText }}
          </a>
        </div>

        <span class="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[16rem] font-black leading-none text-white/10 md:block">
          {{ activeSlide.accent }}
        </span>
      </div>

      <button
        class="absolute left-2 top-1/2 z-20 grid h-16 w-10 -translate-y-1/2 place-items-center text-5xl font-extralight text-white/45 drop-shadow-lg transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e7b94c] sm:left-5"
        type="button"
        aria-label="Previous slide"
        @click="showPreviousSlide"
      >
        &lt;
      </button>
      <button
        class="absolute right-2 top-1/2 z-20 grid h-16 w-10 -translate-y-1/2 place-items-center text-5xl font-extralight text-white/45 drop-shadow-lg transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e7b94c] sm:right-5"
        type="button"
        aria-label="Next slide"
        @click="showNextSlide"
      >
        &gt;
      </button>

      <div class="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-hidden="true">
        <span
          v-for="(_, index) in slides"
          :key="index"
          class="h-1.5 rounded-full bg-white/40 transition-all"
          :class="index === activeIndex ? 'w-8 bg-white' : 'w-3'"
        />
      </div>
    </article>
  </section>
</template>
