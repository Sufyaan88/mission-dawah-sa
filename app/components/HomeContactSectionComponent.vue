<template>
  <section id="contact" class="relative overflow-hidden bg-[#174c3c] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8" aria-labelledby="contact-title">
    <div class="absolute -left-32 -top-32 size-96 rounded-full bg-[#e7b94c]/20 blur-3xl" />
    <div class="absolute -bottom-40 right-0 size-[28rem] rounded-full bg-[#276b8a]/40 blur-3xl" />

    <div class="relative mx-auto max-w-6xl">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#e7b94c]">
          Get in touch
        </p>
        <h2 id="contact-title" class="mt-3 text-4xl font-black sm:text-5xl">
          Contact us
        </h2>
        <p class="mt-5 text-lg leading-8 text-white/80">
          Connect with Mission Dawah South Africa to learn more about our projects and how you can support them.
        </p>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <a
          class="group flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#e7b94c]"
          href="mailto:missiondawahsa@gmail.com"
        >
          <span class="grid size-14 shrink-0 place-items-center rounded-xl bg-[#e7b94c] text-[#18251f]" aria-hidden="true">
            <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-sm font-bold uppercase tracking-wider text-white/65">Email</span>
            <span class="mt-1 block break-all text-lg font-bold">missiondawahsa@gmail.com</span>
          </span>
        </a>

        <a
          class="group flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#e7b94c]"
          href="https://www.instagram.com/missiondawahsouthafrica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="grid size-14 shrink-0 place-items-center rounded-xl bg-[#276b8a] text-white" aria-hidden="true">
            <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block text-sm font-bold uppercase tracking-wider text-white/65">Instagram</span>
            <span class="mt-1 block break-all text-lg font-bold">@missiondawahsouthafrica</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
