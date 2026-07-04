<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-10 bg-[#174c3c] px-4 py-4 text-white shadow-sm sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="flex items-center justify-between">
        <a
          data-testid="site-logo"
          class="w-fit rounded-md bg-[#e7b94c] px-3 py-2 text-lg font-black tracking-wide text-[#18251f]"
          href="/"
        >
          MDSA
        </a>

        <button
          class="rounded-md p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94c] sm:hidden"
          type="button"
          aria-controls="mobile-navigation"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
          @click="menuOpen = !menuOpen"
        >
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path v-if="menuOpen" d="M6 6l12 12M18 6 6 18" />
            <path v-else d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav
          data-testid="desktop-navigation"
          class="hidden gap-5 text-base font-semibold sm:flex"
          aria-label="Main navigation"
        >
          <a class="hover:text-[#e7b94c]" href="/">Home</a>
          <a class="hover:text-[#e7b94c]" href="/tahabbu">Tahabbu</a>
          <a class="hover:text-[#e7b94c]" href="/bursary">Bursary</a>
        </nav>
      </div>

      <nav
        v-if="menuOpen"
        id="mobile-navigation"
        data-testid="mobile-navigation"
        class="mt-4 flex flex-col border-t border-white/20 pt-3 text-sm font-semibold sm:hidden"
        aria-label="Mobile navigation"
      >
        <a class="rounded-md px-2 py-3 hover:bg-white/10 hover:text-[#e7b94c]" href="/">Home</a>
        <a class="rounded-md px-2 py-3 hover:bg-white/10 hover:text-[#e7b94c]" href="/tahabbu">Tahabbu</a>
        <a class="rounded-md px-2 py-3 hover:bg-white/10 hover:text-[#e7b94c]" href="/bursary">Bursary</a>
      </nav>
    </div>
  </header>
</template>
