<script setup lang="ts">
import HadithSectionComponent from '../components/HadithSectionComponent.vue'
import ProjectBannerComponent from '../components/ProjectBannerComponent.vue'
import ProjectDonationComponent from '../components/ProjectDonationComponent.vue'
import ProjectGoalComponent from '../components/ProjectGoalComponent.vue'

useSeoMeta({
  title: 'Bursary Programme | Mission Dawah South Africa',
  description: 'Learn how the Mission Dawah bursary programme helps students reduce financial barriers and continue their education.',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://missiondawah.org.za/bursary',
    },
  ],
})
</script>

<template>
  <main>
    <ProjectBannerComponent
      eyebrow="Education support project"
      title="Bursary"
      description="Helping students continue their studies by reducing financial barriers and supporting access to education."
      theme="blue"
    >
      <template #visual>
        <svg class="h-48 w-48 sm:h-56 sm:w-56" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="7" aria-hidden="true">
          <path d="m24 72 76-38 76 38-76 38-76-38Z" />
          <path d="M52 89v47c29 20 67 20 96 0V89" />
          <path d="M176 72v58" />
          <path d="M56 154c28-12 58-12 88 0v22c-30-12-60-12-88 0v-22Z" />
        </svg>
      </template>
    </ProjectBannerComponent>

    <ProjectGoalComponent
      eyebrow="Our goal"
      title="Opening pathways through education"
      :paragraphs="[
        'The bursary program aims to reduce financial barriers that can prevent students from continuing their studies.',
        'By contributing toward education costs, Mission Dawah South Africa helps students focus on learning and pursue opportunities that can strengthen their futures and communities.',
      ]"
      theme="blue"
    />

    <HadithSectionComponent
      text="Whoever follows a path in the pursuit of knowledge, Allah will make easy for him a path to Paradise."
      source="Sahih Muslim 2699a"
      theme="blue"
    />

    <ProjectDonationComponent
      title="Support the Bursary"
      description="Contributions help Mission Dawah South Africa support students as they continue their education."
      bank-name="FNB/RMB"
      account-holder="MISSION DAWAH SOUTH AFRICA NPC"
      account-type="Islamic Gold Business Account"
      account-number="63145999017"
      branch-code="200409"
      reference="Bursary - Sadaqah/Lillah/Zakat"
      theme="blue"
    />
  </main>
</template>
