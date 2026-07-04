<script setup lang="ts">
import HadithSectionComponent from '../components/HadithSectionComponent.vue'
import ProjectBannerComponent from '../components/ProjectBannerComponent.vue'
import ProjectDonationComponent from '../components/ProjectDonationComponent.vue'
import ProjectGoalComponent from '../components/ProjectGoalComponent.vue'
</script>

<template>
  <main>
    <ProjectBannerComponent
      eyebrow="Community care project"
      title="Tahabbu"
      description="Building stronger community connections through compassion, shared responsibility, and practical food support."
      theme="green"
    >
      <template #visual>
        <svg class="h-48 w-48 sm:h-56 sm:w-56" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="7" aria-hidden="true">
          <circle cx="100" cy="52" r="22" />
          <circle cx="48" cy="110" r="22" />
          <circle cx="152" cy="110" r="22" />
          <path d="M82 67 62 91M118 67l20 24M73 117h54" />
          <path d="M100 157c-26-17-39-31-39-48 0-13 10-23 23-23 8 0 13 4 16 10 3-6 8-10 16-10 13 0 23 10 23 23 0 17-13 31-39 48Z" />
        </svg>
      </template>
    </ProjectBannerComponent>

    <ProjectGoalComponent
      eyebrow="Our goal"
      title="Connection through practical care"
      :paragraphs="[
        'Tahabbu is built around bringing people together through practical care and consistent community support.',
        'Food assistance creates an opportunity to connect with families, understand local needs, and strengthen relationships rooted in dignity and compassion.',
      ]"
      theme="green"
    />

    <HadithSectionComponent
      text="Spread the Salam, feed others, and perform Salat while the people are sleeping; you will enter Paradise with Salam."
      source="Jamiʿ at-Tirmidhi 2485"
      theme="green"
    />

    <ProjectDonationComponent
      title="Support Tahabbu"
      description="Contributions help Mission Dawah South Africa continue practical community support through the Tahabbu project."
      bank-name="FNB/RMB"
      account-holder="MISSION DAWAH SOUTH AFRICA NPC"
      account-type="Islamic Gold Business Account"
      account-number="63145999017"
      branch-code="200409"
      theme="green"
    />
  </main>
</template>
