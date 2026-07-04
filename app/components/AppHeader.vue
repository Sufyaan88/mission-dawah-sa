<template>
  <header class="sticky top-0 z-10 bg-[#174c3c] px-4 py-4 text-white shadow-sm sm:px-6 lg:px-8">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <a
        data-testid="site-logo"
        class="w-fit rounded-md bg-[#e7b94c] px-3 py-2 text-lg font-black tracking-wide text-[#18251f]"
        href="/"
      >
        MDSA
      </a>

      <nav
        class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold sm:text-base"
        aria-label="Main navigation"
      >
        <a class="hover:text-[#e7b94c]" href="/">Home</a>
        <a class="hover:text-[#e7b94c]" href="/tahabbu">Tahabbu</a>
        <a class="hover:text-[#e7b94c]" href="/bursary">Bursary</a>
      </nav>
    </div>
  </header>
</template>
