<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  bankName: string
  accountHolder: string
  accountType: string
  accountNumber: string
  branchCode: string
  theme: 'green' | 'blue'
}>()

const themeClasses = computed(() => props.theme === 'blue'
  ? {
      background: 'from-[#183d50] via-[#276b8a] to-[#315f64]',
      accent: 'text-[#e7b94c]',
    }
  : {
      background: 'from-[#102019] via-[#174c3c] to-[#315f64]',
      accent: 'text-[#e7b94c]',
    })
</script>

<template>
  <section
    class="bg-gradient-to-br px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
    :class="themeClasses.background"
    :data-theme="props.theme"
    aria-labelledby="donation-title"
  >
    <div class="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <p class="text-sm font-bold uppercase tracking-[0.2em]" :class="themeClasses.accent">
          Make a contribution
        </p>
        <h2 id="donation-title" class="mt-3 text-3xl font-black leading-tight sm:text-5xl">
          {{ props.title }}
        </h2>
        <p class="mt-5 text-lg leading-8 text-white/80">
          {{ props.description }}
        </p>
      </div>

      <dl class="divide-y divide-white/15 rounded-3xl border border-white/20 bg-white/10 px-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:px-9">
        <div class="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-5">
          <dt class="text-sm font-bold uppercase tracking-wider text-white/60">Bank</dt>
          <dd class="font-bold">{{ props.bankName }}</dd>
        </div>
        <div class="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-5">
          <dt class="text-sm font-bold uppercase tracking-wider text-white/60">Account holder</dt>
          <dd class="font-bold">{{ props.accountHolder }}</dd>
        </div>
        <div class="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-5">
          <dt class="text-sm font-bold uppercase tracking-wider text-white/60">Account type</dt>
          <dd class="font-bold">{{ props.accountType }}</dd>
        </div>
        <div class="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-5">
          <dt class="text-sm font-bold uppercase tracking-wider text-white/60">Account number</dt>
          <dd class="break-all font-mono text-lg font-bold">{{ props.accountNumber }}</dd>
        </div>
        <div class="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-5">
          <dt class="text-sm font-bold uppercase tracking-wider text-white/60">Branch code</dt>
          <dd class="font-mono text-lg font-bold">{{ props.branchCode }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
